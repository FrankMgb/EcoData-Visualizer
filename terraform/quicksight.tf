resource "aws_iam_policy" "quicksight_s3_access" {
  name        = "${var.project_name}-quicksight-access-${var.environment}"
  description = "Policy for QuickSight to access S3 data bucket"

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Action = [
          "s3:GetObject",
          "s3:ListBucket"
        ]
        Resource = [
          aws_s3_bucket.data_bucket.arn,
          "${aws_s3_bucket.data_bucket.arn}/*"
        ]
      }
    ]
  })
}
