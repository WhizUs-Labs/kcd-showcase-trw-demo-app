resource "exoscale_nlb" "nlb" {

  count = contains(keys(exoscale_sks_nodepool.nodepool), local.default_nodepool_name) ? 1 : 0

  name        = "${local.global_prefix}-sks-nlb"
  description = "loadbalancer for SKS"
  zone        = var.zone

  lifecycle {
    ignore_changes = [
      # Ignore changes to tags, e.g. because a management agent
      # updates these based on some ruleset managed elsewhere.
      labels,
    ]
  }
}

resource "exoscale_nlb_service" "sks_ingress_https" {

  count = contains(keys(exoscale_sks_nodepool.nodepool), local.default_nodepool_name) ? 1 : 0

  zone             = exoscale_nlb.nlb[0].zone
  name             = "https"
  description      = "Ingress over HTTPS"
  nlb_id           = exoscale_nlb.nlb[0].id
  instance_pool_id = exoscale_sks_nodepool.nodepool[local.default_nodepool_name].instance_pool_id
  protocol         = "tcp"
  port             = 443
  target_port      = 31443
  strategy         = "round-robin"

  healthcheck {
    mode     = "tcp"
    port     = 31443
    interval = 5
    timeout  = 3
    retries  = 10
  }
}