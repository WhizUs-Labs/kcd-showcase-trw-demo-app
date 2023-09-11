variable "zone" {
  type    = string
  default = "at-vie-2"
}
variable "cluster_name" {
  type    = string
  default = "test"
}
variable "instance_type" {
  type    = string
  default = "standard.medium"
}
variable "nodepool_size" {
  type    = number
  default = 1
}
variable "cni" {
  type    = string
  default = "cilium"
}
variable "kubeconfig_path" {
  description = "Path to the kubeconfig file"
  type        = string
}
variable "extra_security_group_ports" {
  type        = list(number)
  description = "add extra security group ports such as 80, 443"
}