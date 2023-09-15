terraform {
  required_providers {
    exoscale = {
      source  = "exoscale/exoscale"
      version = "0.51.0"
    }
    helm = {
      source  = "hashicorp/helm"
      version = "2.9.0"
    }
    kubernetes = {
      source  = "hashicorp/kubernetes"
      version = "2.23.0"
    }
  }
}

provider "exoscale" {
  key    = var.EXOSCALE_KEY
  secret = var.EXOSCALE_SECRET
}

provider "helm" {
  kubernetes {
    config_path = pathexpand("${var.kubeconfig_path}")
  }
}

provider "kubernetes" {
  config_path = pathexpand("${var.kubeconfig_path}")
}
