output "Security_Group" {
  description = "Created Security Group: "
  value       = exoscale_security_group.sks_sg.name
}

output "sks_cluster_endpoint" {
  description = "SKS Cluster Endpoint: "
  value       = exoscale_sks_cluster.sks_cluster.endpoint
}

output "kubeconfig" {
  value     = exoscale_sks_kubeconfig.sks_kubeconfig.kubeconfig
  sensitive = true
}

output "configpath" {
  value = local_sensitive_file.my_sks_kubeconfig_file.filename
}