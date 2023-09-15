module "argocd" {
  source = "./modules/argocd/"
  #  kubeconfig_path = var.kubeconfig_path
  argo_enabled = true
  argo_envs = [
    {
      repoUrl        = "https://gitlab.com/whizus/poc/kcd-platform-prototype/kcd_demo_app.git"
      path           = "gitops/clusters/default"
      name           = "kcd-demo-app"
      targetRevision = "HEAD"
      namespace      = "kcd-demo"
    }
  ]

  argo_private_repos = [
    {
      url   = "https://gitlab.com/whizus/poc/kcd-platform-prototype/kcd_demo_app.git"
      name  = "kcd-demo-app-secret"
      token = var.gitlab_pat
    }
  ]

  depends_on = [
    local_sensitive_file.my_sks_kubeconfig_file
  ]
}