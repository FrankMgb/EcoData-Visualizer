resource "aws_apigatewayv2_api" "api" {
  name          = "${var.project_name}-api-${var.environment}"
  protocol_type = "HTTP"
  cors_configuration {
    allow_origins = ["*"]
    allow_methods = ["GET", "POST", "OPTIONS"]
    allow_headers = ["Content-Type", "Authorization"]
  }
}

resource "aws_apigatewayv2_stage" "api_stage" {
  api_id = aws_apigatewayv2_api.api.id
  name   = "$default"
  auto_deploy = true
}

resource "aws_apigatewayv2_integration" "get_metrics_integration" {
  api_id           = aws_apigatewayv2_api.api.id
  integration_type = "AWS_PROXY"
  integration_uri  = aws_lambda_function.get_metrics.invoke_arn
}

resource "aws_apigatewayv2_route" "get_metrics_route" {
  api_id    = aws_apigatewayv2_api.api.id
  route_key = "GET /metrics"
  target    = "integrations/${aws_apigatewayv2_integration.get_metrics_integration.id}"
}

resource "aws_apigatewayv2_integration" "get_insights_integration" {
  api_id           = aws_apigatewayv2_api.api.id
  integration_type = "AWS_PROXY"
  integration_uri  = aws_lambda_function.get_insights.invoke_arn
}

resource "aws_apigatewayv2_route" "get_insights_route" {
  api_id    = aws_apigatewayv2_api.api.id
  route_key = "POST /insights"
  target    = "integrations/${aws_apigatewayv2_integration.get_insights_integration.id}"
}

resource "aws_lambda_permission" "api_gw" {
  statement_id  = "AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.get_metrics.function_name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_apigatewayv2_api.api.execution_arn}/*/*"
}

resource "aws_lambda_permission" "api_gw_insights" {
  statement_id  = "AllowExecutionFromAPIGatewayInsights"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.get_insights.function_name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_apigatewayv2_api.api.execution_arn}/*/*"
}
