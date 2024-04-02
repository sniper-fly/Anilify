terraform {
  # cloud {
  #   organization = "terraform_tutorial_miroscular"
  #   workspaces {
  #     name = 
  #   }
  # }

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.41.0"
    }
  }

  required_version = "~> 1.7"
}
