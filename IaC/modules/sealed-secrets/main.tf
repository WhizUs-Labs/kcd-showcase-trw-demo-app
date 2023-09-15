resource "helm_release" "sealed_secrets" {
  count            = var.sealed_secrets_enabled ? 1 : 0
  name             = var.sealed_secrets_config.name
  repository       = "https://charts.bitnami.com/bitnami"
  chart            = "sealed-secrets"
  version          = "1.4.1"
  timeout          = 1200
  create_namespace = true
  namespace        = var.sealed_secrets_config.namespace
  lint             = true
  wait             = true

  depends_on = [
    helm_release.sealed_secrets_key
  ]
}

resource "helm_release" "sealed_secrets_key" {
  count            = var.sealed_secrets_enabled ? 1 : 0
  chart            = "${path.module}/charts/sealed-secrets-key"
  name             = "sealed-secrets-key"
  version          = "1.0.0"
  namespace        = var.sealed_secrets_config.namespace
  create_namespace = true

  set {
    name  = "secretKey"
    value = var.sealed_secrets_key
  }

  set {
    name  = "secretCert"
    value = var.sealed_secrets_cert
  }
}