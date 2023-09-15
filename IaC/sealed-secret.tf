module "sealed-secrets" {
  source                 = "./modules/sealed-secrets"
  sealed_secrets_enabled = local.sealed_secrets_enabled
  sealed_secrets_cert    = var.sealed_secrets_cert
  sealed_secrets_key     = var.sealed_secrets_key

  depends_on = [
    local_sensitive_file.my_sks_kubeconfig_file
  ]
}