## Requirements

| Name | Version |
|------|---------|
| <a name="requirement_exoscale"></a> [exoscale](#requirement\_exoscale) | 0.51.0 |
| <a name="requirement_helm"></a> [helm](#requirement\_helm) | 2.9.0 |

## Providers

| Name | Version |
|------|---------|
| <a name="provider_exoscale"></a> [exoscale](#provider\_exoscale) | 0.51.0 |
| <a name="provider_local"></a> [local](#provider\_local) | 2.4.0 |

## Modules

| Name | Source | Version |
|------|--------|---------|
| <a name="module_argocd"></a> [argocd](#module\_argocd) | ./modules/argocd/ | n/a |

## Resources

| Name | Type |
|------|------|
| [exoscale_nlb.nlb](https://registry.terraform.io/providers/exoscale/exoscale/0.51.0/docs/resources/nlb) | resource |
| [exoscale_nlb_service.sks_ingress_https](https://registry.terraform.io/providers/exoscale/exoscale/0.51.0/docs/resources/nlb_service) | resource |
| [exoscale_security_group.sks](https://registry.terraform.io/providers/exoscale/exoscale/0.51.0/docs/resources/security_group) | resource |
| [exoscale_security_group_rules.sks](https://registry.terraform.io/providers/exoscale/exoscale/0.51.0/docs/resources/security_group_rules) | resource |
| [exoscale_sks_cluster.cluster](https://registry.terraform.io/providers/exoscale/exoscale/0.51.0/docs/resources/sks_cluster) | resource |
| [exoscale_sks_kubeconfig.sks_kubeconfig](https://registry.terraform.io/providers/exoscale/exoscale/0.51.0/docs/resources/sks_kubeconfig) | resource |
| [exoscale_sks_nodepool.nodepool](https://registry.terraform.io/providers/exoscale/exoscale/0.51.0/docs/resources/sks_nodepool) | resource |
| [local_sensitive_file.my_sks_kubeconfig_file](https://registry.terraform.io/providers/hashicorp/local/latest/docs/resources/sensitive_file) | resource |

## Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| <a name="input_EXOSCALE_KEY"></a> [EXOSCALE\_KEY](#input\_EXOSCALE\_KEY) | exoscale key | `string` | n/a | yes |
| <a name="input_EXOSCALE_SECRET"></a> [EXOSCALE\_SECRET](#input\_EXOSCALE\_SECRET) | exoscale secret | `string` | n/a | yes |
| <a name="input_cicd"></a> [cicd](#input\_cicd) | Will be set to true if run from a CI/CD pipeline | `bool` | `false` | no |
| <a name="input_gitlab_pat"></a> [gitlab\_pat](#input\_gitlab\_pat) | n/a | `string` | n/a | yes |
| <a name="input_kubeconfig_path"></a> [kubeconfig\_path](#input\_kubeconfig\_path) | Path to the kubeconfig file | `string` | `".kube/kcd-demo.config.yaml"` | no |
| <a name="input_nodepools"></a> [nodepools](#input\_nodepools) | Definitions of nodepools | <pre>map(object({<br>    instance_type = string<br>    size          = number<br>    disk_size     = number<br>    enabled       = bool<br>  }))</pre> | <pre>{<br>  "nodepool1": {<br>    "disk_size": 20,<br>    "enabled": true,<br>    "instance_type": "standard.medium",<br>    "size": 3<br>  }<br>}</pre> | no |
| <a name="input_service_level"></a> [service\_level](#input\_service\_level) | SLA level of the SKS cluster | `string` | `"starter"` | no |
| <a name="input_sks_version"></a> [sks\_version](#input\_sks\_version) | SKS version | `string` | `"1.27.5"` | no |
| <a name="input_zone"></a> [zone](#input\_zone) | SKS | `string` | `"at-vie-2"` | no |

## Outputs

| Name | Description |
|------|-------------|
| <a name="output_kubeconfigfile"></a> [kubeconfigfile](#output\_kubeconfigfile) | n/a |

<!-- BEGIN_TF_DOCS -->
## Requirements

| Name | Version |
|------|---------|
| <a name="requirement_exoscale"></a> [exoscale](#requirement\_exoscale) | 0.51.0 |
| <a name="requirement_helm"></a> [helm](#requirement\_helm) | 2.9.0 |

## Providers

| Name | Version |
|------|---------|
| <a name="provider_exoscale"></a> [exoscale](#provider\_exoscale) | 0.51.0 |
| <a name="provider_local"></a> [local](#provider\_local) | 2.4.0 |

## Modules

| Name | Source | Version |
|------|--------|---------|
| <a name="module_argocd"></a> [argocd](#module\_argocd) | ./modules/argocd/ | n/a |

## Resources

| Name | Type |
|------|------|
| [exoscale_nlb.nlb](https://registry.terraform.io/providers/exoscale/exoscale/0.51.0/docs/resources/nlb) | resource |
| [exoscale_nlb_service.sks_ingress_https](https://registry.terraform.io/providers/exoscale/exoscale/0.51.0/docs/resources/nlb_service) | resource |
| [exoscale_security_group.sks](https://registry.terraform.io/providers/exoscale/exoscale/0.51.0/docs/resources/security_group) | resource |
| [exoscale_security_group_rules.sks](https://registry.terraform.io/providers/exoscale/exoscale/0.51.0/docs/resources/security_group_rules) | resource |
| [exoscale_sks_cluster.cluster](https://registry.terraform.io/providers/exoscale/exoscale/0.51.0/docs/resources/sks_cluster) | resource |
| [exoscale_sks_kubeconfig.sks_kubeconfig](https://registry.terraform.io/providers/exoscale/exoscale/0.51.0/docs/resources/sks_kubeconfig) | resource |
| [exoscale_sks_nodepool.nodepool](https://registry.terraform.io/providers/exoscale/exoscale/0.51.0/docs/resources/sks_nodepool) | resource |
| [local_sensitive_file.my_sks_kubeconfig_file](https://registry.terraform.io/providers/hashicorp/local/latest/docs/resources/sensitive_file) | resource |

## Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| <a name="input_EXOSCALE_KEY"></a> [EXOSCALE\_KEY](#input\_EXOSCALE\_KEY) | exoscale key | `string` | n/a | yes |
| <a name="input_EXOSCALE_SECRET"></a> [EXOSCALE\_SECRET](#input\_EXOSCALE\_SECRET) | exoscale secret | `string` | n/a | yes |
| <a name="input_gitlab_pat"></a> [gitlab\_pat](#input\_gitlab\_pat) | n/a | `string` | n/a | yes |
| <a name="input_kubeconfig_path"></a> [kubeconfig\_path](#input\_kubeconfig\_path) | Path to the kubeconfig file | `string` | `".kube/kcd-demo.config.yaml"` | no |
| <a name="input_nodepools"></a> [nodepools](#input\_nodepools) | Definitions of nodepools | <pre>map(object({<br>    instance_type = string<br>    size          = number<br>    disk_size     = number<br>    enabled       = bool<br>  }))</pre> | <pre>{<br>  "nodepool1": {<br>    "disk_size": 20,<br>    "enabled": true,<br>    "instance_type": "standard.medium",<br>    "size": 3<br>  }<br>}</pre> | no |
| <a name="input_service_level"></a> [service\_level](#input\_service\_level) | SLA level of the SKS cluster | `string` | `"starter"` | no |
| <a name="input_sks_version"></a> [sks\_version](#input\_sks\_version) | SKS version | `string` | `"1.27.5"` | no |
| <a name="input_zone"></a> [zone](#input\_zone) | SKS | `string` | `"at-vie-2"` | no |

## Outputs

| Name | Description |
|------|-------------|
| <a name="output_kubeconfigfile"></a> [kubeconfigfile](#output\_kubeconfigfile) | n/a |
<!-- END_TF_DOCS -->