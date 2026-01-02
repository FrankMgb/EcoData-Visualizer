# EcoData Visualizer (ClimateFlow) 🌍

**EcoData Visualizer** is a secure, AI-powered platform designed to provide real-time climate insights and analytics. Built on AWS Serverless architecture, it leverages Next.js for a high-performance frontend and Amazon Bedrock for generative AI capabilities.

## 🚀 Features

-   **AI-Powered Insights**: Generates real-time climate summaries using Amazon Bedrock.
-   **Secure Infrastructure**: Enterprise-grade security with S3 encryption, CloudFront OAC, and strict IAM policies.
-   **Real-Time Analytics**: High-performance data querying with AWS Athena and QuickSight integration.
-   **Serverless Backend**: Scalable API endpoints powered by AWS Lambda and API Gateway.
-   **Responsive Design**: Modern, dark-mode UI built with React, Tailwind CSS, and Framer Motion.

## 🛠️ Tech Stack

-   **Frontend**: Lastest Next.js (Static Export), React 19, Tailwind CSS.
-   **Backend**: Node.js, Serverless Framework (v3), AWS Lambda.
-   **Infrastructure**: Terraform (IaC), AWS Amplify, S3, DynamoDB, API Gateway.
-   **Deployment**: Automated CI/CD via AWS Amplify connected to GitHub.

## 📋 Prerequisites

Ensure you have the following installed on your machine:

-   **Node.js**: v18+ (v22.x recommended)
-   **AWS CLI**: v2.x (Configured with `aws configure`)
-   **Terraform**: v1.5+
-   **Serverless Framework**: v3 (via `npx`)

## 💻 Local Development Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/FrankMgb/EcoData-Visualizer.git
    cd EcoData-Visualizer
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) to view the app.

## ☁️ Backend & Infrastructure

### Backend Deployment (Serverless)
The backend API is located in the `backend/` directory.

1.  Navigate to the backend folder:
    ```bash
    cd backend
    ```
2.  Deploy the service:
    ```bash
    npx serverless@3 deploy
    ```
    *This creates the API Gateway and Lambda functions.*

### Infrastructure Provisioning (Terraform)
The AWS resources (Amplify, S3, DynamoDB, etc.) are managed via Terraform in the `terraform/` directory.

1.  Navigate to the terraform folder:
    ```bash
    cd terraform
    ```
2.  Initialize and Apply:
    ```bash
    terraform init
    terraform apply
    ```
    *Note: You may need to provide a `github_token` for the Amplify repository connection.*

## 🚀 Deployment (CI/CD)

The project is configured for continuous deployment using **AWS Amplify**.

-   **Trigger**: Any push to the `main` branch automatically triggers a new build and deployment.
-   **Live URL**: [https://climateflows.com](https://climateflows.com)

## 📂 Project Structure

```
├── backend/               # Serverless Framework service (Lambda functions)
├── public/                # Static assets (images, logos)
├── src/
│   ├── app/               # Next.js App Router pages
│   ├── components/        # Reusable React components
├── terraform/             # Infrastructure as Code configuration
├── next.config.js         # Next.js configuration (SSG enabled)
└── package.json           # Project dependencies
```

## 📄 License

This project is licensed under the MIT License.
