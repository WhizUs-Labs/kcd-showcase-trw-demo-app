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
variable "zone" {
  type    = string
  default = "at-vie-2"
}
variable "argocd_token" {
  type      = string
  sensitive = true
}
variable "kubeconfig_path" {
  description = "Path to the kubeconfig file"
  type        = string
  default     = "~/.kube/config.d/kcd-demo/kcd-demo.config.yaml"
}