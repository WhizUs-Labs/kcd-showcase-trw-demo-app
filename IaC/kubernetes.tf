resource "kubernetes_secret" "kcd-demo-app-imagepullsecret" {
  metadata {
    name      = "kcd-demo-app-imagepullsecret"
    namespace = var.kcd_demo_app_namespace
  }

  type = "kubernetes.io/dockerconfigjson"

  data = {
    ".dockerconfigjson" = jsonencode({
      auths = {
        "registry.gitlab.com" = {
          "username" = var.imagepullsecret_user
          "password" = var.imagepullsecret_pass
          "email"    = var.imagepullsecret_email
          "auth"     = base64encode("${var.imagepullsecret_user}:${var.imagepullsecret_pass}")
        }
      }
    })
  }
}