data "exoscale_domain" "my_domain" {
  name = "whizus.net"
}

resource "exoscale_domain_record" "my_host" {
  domain      = data.exoscale_domain.my_domain.id
  name        = "platform.kcd"
  record_type = "A"
  content     = exoscale_nlb.nlb[0].ip_address
}