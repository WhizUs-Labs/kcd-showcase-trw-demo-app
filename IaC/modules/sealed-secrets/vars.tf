variable "sealed_secrets_enabled" {
  type    = bool
  default = false
}

variable "sealed_secrets_config" {
  type = object({
    name      = string
    namespace = string
  })
  default = {
    name      = "sealed-secrets"
    namespace = "sealed-secrets"
  }
}

variable "sealed_secrets_key" {
  sensitive = true
  type      = string
}

variable "sealed_secrets_cert" {
  sensitive = true
  type      = string
}