data "exoscale_domain" "my_domain" {
  name = "whizus.net"
}

resource "exoscale_domain_record" "my_host" {
  domain      = data.exoscale_domain.my_domain.id
  name        = "kcd"
  record_type = "A"
  content     = data.exoscale_nlb.nlb.ip_address
}