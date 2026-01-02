resource "aws_amplify_app" "climate_flow" {
  name       = "climate-flow-app"
  repository = "https://github.com/FrankMgb/EcoData-Visualizer"
  access_token = var.github_token

  # Auto-build settings
  enable_auto_branch_creation = true
  enable_branch_auto_build    = true
  enable_branch_auto_deletion = true

  # Build settings
  build_spec = <<-EOT
    version: 1
    frontend:
      phases:
        preBuild:
          commands:
            - npm ci
        build:
          commands:
            - npm run build
      artifacts:
        baseDirectory: .next
        files:
          - '**/*'
      cache:
        paths:
          - node_modules/**/*
  EOT

  # Environment Variables
  environment_variables = {
    NEXT_PUBLIC_API_URL = "https://zj91z6w4b4.execute-api.us-east-1.amazonaws.com/dev"
  }
}

resource "aws_amplify_branch" "main" {
  app_id      = aws_amplify_app.climate_flow.id
  branch_name = "main"

  framework = "Next.js - SSG"
  stage     = "PRODUCTION"
}
