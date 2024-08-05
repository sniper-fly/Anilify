resource "aws_ecr_repository" "example_lambda_repo" {
  name = "example_lambda_repo"
}

resource "aws_lambda_function" "example_lambda_repo_function" {
  function_name = "exampleLambdaRepo"
  package_type  = "Image"
  image_uri     = "${aws_ecr_repository.example_lambda_repo.repository_url}:latest"
  role          = aws_iam_role.example_lambda_iam.arn
  timeout       = 30

  lifecycle {
    ignore_changes = [
      image_uri
    ]
  }

  depends_on = [
    aws_ecr_repository.example_lambda_repo
  ]
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
