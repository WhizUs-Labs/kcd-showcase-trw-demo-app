variable "argo_enabled" {
  type    = bool
  default = false
}

variable "argo_config" {
  type = object({
    name      = string
    namespace = string
  })
  default = {
    name      = "argo-cd"
    namespace = "argocd"
  }
}

variable "argo_envs" {
  type = list(object({
    name           = string
    path           = string
    repoUrl        = string
    targetRevision = string
    namespace      = string
  }))
  default = []
}

variable "argo_private_repos" {
  type = list(object({
    name  = string
    url   = string
    token = string
  }))
  default   = []
  sensitive = true
}