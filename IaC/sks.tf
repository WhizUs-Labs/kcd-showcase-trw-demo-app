resource "exoscale_security_group" "sks" {
  name = "${local.global_prefix}-sks"
}

resource "exoscale_security_group_rules" "sks" {
  security_group = exoscale_security_group.sks.name

  ingress {
    description              = "Calico traffic"
    protocol                 = "UDP"
    ports                    = ["4789"]
    user_security_group_list = [exoscale_security_group.sks.name]
  }

  ingress {
    description = "Nodes logs/exec"
    protocol    = "TCP"
    ports       = ["10250"]
    cidr_list   = ["0.0.0.0/0", "::/0"]
  }

  ingress {
    description = "NodePort services"
    protocol    = "TCP"
    cidr_list   = ["0.0.0.0/0", "::/0"]
    ports       = ["30000-32767"]
  }
}

resource "exoscale_sks_cluster" "cluster" {
  zone          = var.zone
  name          = "${local.global_prefix}-sks"
  service_level = var.service_level
  version       = var.sks_version
  depends_on    = [exoscale_security_group.sks]
}

resource "exoscale_sks_nodepool" "nodepool" {
  for_each = { for k, v in var.nodepools : k => v if v.enabled }

  zone               = var.zone
  cluster_id         = exoscale_sks_cluster.cluster.id
  name               = "${local.global_prefix}-sks-nodepool-${each.key}"
  instance_type      = each.value.instance_type
  size               = each.value.size
  disk_size          = each.value.disk_size
  security_group_ids = [exoscale_security_group.sks.id]

  lifecycle {
    ignore_changes = [
      # Ignore changes to tags, e.g. because a management agent
      # updates these based on some ruleset managed elsewhere.
      size,
    ]
  }
}

resource "exoscale_sks_kubeconfig" "sks_kubeconfig" {
  cluster_id = exoscale_sks_cluster.cluster.id
  zone       = exoscale_sks_cluster.cluster.zone

  user   = "kubernetes-admin"
  groups = ["system:masters"]
}

resource "local_sensitive_file" "my_sks_kubeconfig_file" {
  filename        = pathexpand("${var.kubeconfig_path}")
  content         = exoscale_sks_kubeconfig.sks_kubeconfig.kubeconfig
  file_permission = "0600"
}