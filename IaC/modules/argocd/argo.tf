resource "helm_release" "argo_cd" {
  count            = var.argo_enabled ? 1 : 0
  name             = var.argo_config.name
  repository       = "https://argoproj.github.io/argo-helm"
  chart            = "argo-cd"
  version          = "5.34.6"
  timeout          = 1200
  create_namespace = true
  namespace        = var.argo_config.namespace
  lint             = true
  wait             = true
}

resource "helm_release" "argo_demo_repo" {
  count            = length(var.argo_envs)
  chart            = "${path.module}/charts/argocd-application"
  name             = var.argo_envs[count.index].name
  version          = "1.0.0"
  namespace        = var.argo_config.namespace
  create_namespace = true

  set {
    name  = "namespace"
    value = "argocd"
  }

  set {
    name  = "name"
    value = var.argo_envs[count.index].name
  }

  set {
    name  = "source.repoUrl"
    value = var.argo_envs[count.index].repoUrl
  }

  set {
    name  = "source.path"
    value = var.argo_envs[count.index].path
  }

  set {
    name  = "source.targetRevision"
    value = var.argo_envs[count.index].targetRevision
  }

  depends_on = [helm_release.argo_repo_secret]
}

resource "helm_release" "argo_repo_secret" {
  count            = length(var.argo_private_repos)
  chart            = "${path.module}/charts/argocd-repo-secrets"
  name             = var.argo_private_repos[count.index].name
  version          = "1.0.0"
  namespace        = var.argo_config.namespace
  create_namespace = true

  set {
    name  = "name"
    value = var.argo_private_repos[count.index].name
  }
  set {
    name  = "url"
    value = var.argo_private_repos[count.index].url
  }
  set {
    name  = "token"
    value = var.argo_private_repos[count.index].token
  }

  depends_on = [helm_release.argo_cd]
}