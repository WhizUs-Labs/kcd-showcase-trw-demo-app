module "exoscale_sks" {
  source       = "./modules/sks_cluster"
  cluster_name = "kcd-demo"
  cni          = "cilium"

  zone                       = var.zone
  nodepool_size              = 2
  instance_type              = "standard.medium"
  extra_security_group_ports = [80, 443]
  kubeconfig_path            = var.kubeconfig_path
}

module "argocd" {
  source = "./modules/argocd/"
  #  kubeconfig_path = var.kubeconfig_path
  argo_enabled = true
  argo_envs = [
    {
      repoUrl        = "https://gitlab.com/whizus/poc/kcd-platform-prototype/kcd_demo_app"
      path           = "/"
      name           = "kcd-demo-app"
      targetRevision = "HEAD"
    }
  ]

  argo_private_repos = [
    {
      url   = "https://gitlab.com/whizus/poc/kcd-platform-prototype/kcd_demo_app"
      name  = "kcd-demo-app-secret"
      token = var.argocd_token
    }
  ]

  depends_on = [module.exoscale_sks]
}