provider "aws" {
  region = var.aws_region

  default_tags {
    tags = {
      name       = "anitunes"
      created_by = "terraform"
    }
  }
}
