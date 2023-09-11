resource "exoscale_security_group" "sks_sg" {
  name = "${var.cluster_name}_security_group"
}
# Default port range for NodePort Services
resource "exoscale_security_group_rule" "sg_rule_1" {
  security_group_id = exoscale_security_group.sks_sg.id
  type              = "INGRESS"
  protocol          = "TCP"
  cidr              = "0.0.0.0/0" # "::/0" for IPv6
  start_port        = 30000
  end_port          = 32767
}
# Kubelet API
resource "exoscale_security_group_rule" "sg_rule_2" {
  security_group_id      = exoscale_security_group.sks_sg.id
  user_security_group_id = exoscale_security_group.sks_sg.id
  type                   = "INGRESS"
  protocol               = "TCP"
  start_port             = 10250
  end_port               = 10250
}
# Calico
resource "exoscale_security_group_rule" "sg_rule_3" {
  security_group_id      = exoscale_security_group.sks_sg.id
  user_security_group_id = exoscale_security_group.sks_sg.id
  type                   = "INGRESS"
  protocol               = "TCP"
  start_port             = 4789
  end_port               = 4789
}

# Extra Rules
resource "exoscale_security_group_rule" "extra_sg_rule" {
  count = length(var.extra_security_group_ports)

  security_group_id = exoscale_security_group.sks_sg.id
  type              = "INGRESS"
  protocol          = "TCP"
  cidr              = "0.0.0.0/0" # "::/0" for IPv6
  start_port        = var.extra_security_group_ports[count.index]
  end_port          = var.extra_security_group_ports[count.index]
}

resource "exoscale_sks_cluster" "sks_cluster" {
  zone = var.zone
  name = var.cluster_name
  cni  = var.cni
}

resource "exoscale_sks_nodepool" "sks_nodepool" {
  cluster_id         = exoscale_sks_cluster.sks_cluster.id
  zone               = exoscale_sks_cluster.sks_cluster.zone
  name               = "${var.cluster_name}_nodepool"
  instance_type      = var.instance_type
  size               = var.nodepool_size
  disk_size          = 20
  security_group_ids = [exoscale_security_group.sks_sg.id]
}

resource "exoscale_sks_kubeconfig" "sks_kubeconfig" {
  cluster_id = exoscale_sks_cluster.sks_cluster.id
  zone       = exoscale_sks_cluster.sks_cluster.zone
  user       = "kubernetes-admin"
  groups     = ["system:masters"]
}

resource "local_sensitive_file" "my_sks_kubeconfig_file" {
  filename        = pathexpand("${var.kubeconfig_path}")
  content         = exoscale_sks_kubeconfig.sks_kubeconfig.kubeconfig
  file_permission = "0600"
}
