terraform {
  backend "http" {
    lock_method            = "POST"
    unlock_method          = "DELETE"
    skip_cert_verification = true
  }
}