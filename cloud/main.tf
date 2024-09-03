provider "aws" {
  region = var.aws_region

  default_tags {
    tags = {
      name       = "anitunes"
      created_by = "terraform"
    }
  }
}

provider "aws" {
  alias  = "us-east-1"
  region = "us-east-1"
}
