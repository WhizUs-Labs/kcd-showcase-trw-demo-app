# EXOSCALE
variable "EXOSCALE_KEY" {
  type        = string
  description = "exoscale key"
  sensitive   = true
}
variable "EXOSCALE_SECRET" {
  type        = string
  description = "exoscale secret"
  sensitive   = true
}

# SKS
variable "zone" {
  type    = string
  default = "at-vie-2"
}
variable "cicd" {
  description = "Will be set to true if run from a CI/CD pipeline"
  type        = bool
  default     = false
}
variable "gitlab_pat" {
  type      = string
  sensitive = true
}
variable "sks_version" {
  description = "SKS version"
  default     = "1.27.5"
  type        = string
}
variable "service_level" {
  description = "SLA level of the SKS cluster"
  default     = "starter"
  type        = string

  validation {
    condition     = contains(["starter", "pro"], var.service_level)
    error_message = "Unknown service level. Only starter and pro available."
  }
}
variable "nodepools" {
  description = "Definitions of nodepools"
  type = map(object({
    instance_type = string
    size          = number
    disk_size     = number
    enabled       = bool
  }))
  default = {
    "nodepool1" = {
      instance_type = "standard.medium"
      size          = 3
      disk_size     = 20
      enabled       = true
    }
  }
}
variable "kubeconfig_path" {
  description = "Path to the kubeconfig file"
  type        = string
  default     = "~/.kube/config.d/kcd-demo/kcd-demo.config.yaml"
}