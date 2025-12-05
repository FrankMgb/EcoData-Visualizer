data "archive_file" "lambda_zip" {
  type        = "zip"
  source_file = "${path.module}/../lambda/get_metrics.py"
  output_path = "${path.module}/../lambda/get_metrics.zip"
}

resource "aws_iam_role" "lambda_role" {
  name = "${var.project_name}-lambda-role-${var.environment}"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRole"
        Effect = "Allow"
        Principal = {
          Service = "lambda.amazonaws.com"
        }
      }
    ]
  })
}

resource "aws_iam_role_policy_attachment" "lambda_basic" {
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
  role       = aws_iam_role.lambda_role.name
}

resource "aws_lambda_function" "get_metrics" {
  filename         = data.archive_file.lambda_zip.output_path
  function_name    = "${var.project_name}-get-metrics-${var.environment}"
  role             = aws_iam_role.lambda_role.arn
  handler          = "get_metrics.lambda_handler"
  source_code_hash = data.archive_file.lambda_zip.output_base64sha256
  runtime          = "python3.11"

  environment {
    variables = {
      ENVIRONMENT = var.environment
    }
  }
}

data "archive_file" "insights_zip" {
  type        = "zip"
  source_file = "${path.module}/../lambda/get_insights.py"
  output_path = "${path.module}/../lambda/get_insights.zip"
}

resource "aws_lambda_function" "get_insights" {
  filename         = data.archive_file.insights_zip.output_path
  function_name    = "${var.project_name}-get-insights-${var.environment}"
  role             = aws_iam_role.lambda_role.arn
  handler          = "get_insights.lambda_handler"
  source_code_hash = data.archive_file.insights_zip.output_base64sha256
  runtime          = "python3.11"

  environment {
    variables = {
      ENVIRONMENT = var.environment
    }
  }
}

resource "aws_iam_policy" "bedrock_access" {
  name        = "${var.project_name}-bedrock-access-${var.environment}"
  description = "Policy for Lambda to invoke Bedrock models"

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Action = [
          "bedrock:InvokeModel"
        ]
        Resource = "*"
      }
    ]
  })
}

resource "aws_iam_role_policy_attachment" "lambda_bedrock" {
  policy_arn = aws_iam_policy.bedrock_access.arn
  role       = aws_iam_role.lambda_role.name
}
