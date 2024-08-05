# REST APIの作成
resource "aws_api_gateway_rest_api" "example_api_gateway" {
  name = "example_api_gateway"

  endpoint_configuration {
    types = ["REGIONAL"]
  }
}

# ANYメソッドでルートに対するリクエストを許可するためのメソッドの作成
# 認証は不要で、全てのユーザーがリクエストを送信可能
resource "aws_api_gateway_method" "example_next_api" {
  rest_api_id   = aws_api_gateway_rest_api.example_api_gateway.id
  resource_id   = aws_api_gateway_rest_api.example_api_gateway.root_resource_id
  http_method   = "ANY"
  authorization = "NONE"
}

# proxy+というワイルドカードを含んでいるため、全てのリソースパスで処理される
resource "aws_api_gateway_resource" "example_resource_paths" {
  rest_api_id = aws_api_gateway_rest_api.example_api_gateway.id
  parent_id   = aws_api_gateway_rest_api.example_api_gateway.root_resource_id
  path_part   = "{proxy+}"
}

resource "aws_api_gateway_method" "aws_api_gateway_resource_paths" {
  rest_api_id   = aws_api_gateway_rest_api.example_api_gateway.id
  resource_id   = aws_api_gateway_resource.example_resource_paths.id
  http_method   = "ANY"
  authorization = "NONE"
}

# Lambdaにリクエストを投げられるようにAWS_PROXYを指定
resource "aws_api_gateway_integration" "example_next_api_root" {
  rest_api_id = aws_api_gateway_rest_api.example_api_gateway.id
  resource_id = aws_api_gateway_rest_api.example_api_gateway.root_resource_id
  http_method = aws_api_gateway_method.example_next_api.http_method

  type                    = "AWS_PROXY"
  uri                     = aws_lambda_function.example_lambda_repo_function.invoke_arn
  integration_http_method = "POST"
}

resource "aws_api_gateway_integration" "example_next_api_paths" {
  rest_api_id = aws_api_gateway_rest_api.example_api_gateway.id
  resource_id = aws_api_gateway_resource.example_resource_paths.id
  http_method = aws_api_gateway_method.aws_api_gateway_resource_paths.http_method
  type        = "AWS_PROXY"

  uri                     = aws_lambda_function.example_lambda_repo_function.invoke_arn
  integration_http_method = "POST"
}

resource "aws_api_gateway_deployment" "example_next_api" {
  rest_api_id = aws_api_gateway_rest_api.example_api_gateway.id

  triggers = {
    redeployment = filebase64("${path.module}/api_gateway.tf")
  }

  lifecycle {
    create_before_destroy = true
  }

  depends_on = [
    aws_api_gateway_integration.example_next_api_root,
    aws_api_gateway_integration.example_next_api_paths
  ]
}
resource "aws_api_gateway_stage" "example_next_api" {
  deployment_id = aws_api_gateway_deployment.example_next_api.id
  rest_api_id   = aws_api_gateway_rest_api.example_api_gateway.id
  stage_name    = "prod"
}

resource "aws_lambda_permission" "example_apigw_lambda" {
  statement_id  = "AllowExecutionFromAPIGatewaya"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.example_lambda_repo_function.function_name
  principal     = "apigateway.amazonaws.com"

  source_arn = "${aws_api_gateway_rest_api.example_api_gateway.execution_arn}/*/*/*"
}
