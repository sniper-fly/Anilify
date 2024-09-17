resource "aws_ecr_repository" "example_lambda_repo" {
  name = "example_lambda_repo"
}

resource "terraform_data" "push_image" {
  depends_on = [aws_ecr_repository.example_lambda_repo]

  provisioner "local-exec" {
    // ローカルのスクリプトを呼び出す
    command = "sh ${path.module}/push_image.sh"

    // スクリプト専用の環境変数
    environment = {
      AWS_REGION     = var.aws_region
      AWS_ACCOUNT_ID = local.aws_account_id
      REPO_URL       = aws_ecr_repository.example_lambda_repo.repository_url
    }
  }

  provisioner "local-exec" {
    when    = destroy
    command = "aws ecr batch-delete-image --repository-name example_lambda_repo --image-ids imageTag=latest"
  }
}

resource "aws_lambda_function" "example_lambda_repo_function" {
  depends_on = [terraform_data.push_image]

  function_name = "exampleLambdaRepo"
  package_type  = "Image"
  image_uri     = "${aws_ecr_repository.example_lambda_repo.repository_url}:latest"
  role          = aws_iam_role.example_lambda_iam.arn
  timeout       = 30
  memory_size   = 256

  lifecycle {
    ignore_changes = [
      image_uri
    ]
  }
}

resource "aws_iam_role" "example_lambda_iam" {
  name = "example_lambda_iam"

  assume_role_policy = data.aws_iam_policy_document.example_lambda_document.json
}

data "aws_iam_policy_document" "example_lambda_document" {
  statement {
    actions = [
      "sts:AssumeRole",
    ]
    principals {
      type        = "Service"
      identifiers = ["lambda.amazonaws.com"]
    }
    effect = "Allow"
  }
}
