resource "aws_dynamodb_table" "prompts" {
  name           = "${var.project_name}-prompts-${var.environment}"
  billing_mode   = "PAY_PER_REQUEST"
  hash_key       = "PromptId"
  range_key      = "Version"

  attribute {
    name = "PromptId"
    type = "S"
  }

  attribute {
    name = "Version"
    type = "S"
  }

  tags = {
    Name        = "${var.project_name}-prompts"
    Environment = var.environment
  }
}

resource "aws_dynamodb_table" "metadata" {
  name           = "${var.project_name}-metadata-${var.environment}"
  billing_mode   = "PAY_PER_REQUEST"
  hash_key       = "DatasetId"

  attribute {
    name = "DatasetId"
    type = "S"
  }

  tags = {
    Name        = "${var.project_name}-metadata"
    Environment = var.environment
  }
}
