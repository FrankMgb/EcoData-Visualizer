# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Repo overview
This repository contains:
- A Next.js app (App Router) under `src/`.
- AWS serverless infrastructure defined in `terraform/`.
- Two Python Lambda handlers in `lambda/` (currently MVP/mock responses).

Next.js is configured for **static export** (`output: 'export'` in `next.config.mjs`), so production builds output a static site into `out/`.

## Common commands
This repo includes `package-lock.json`, so use npm.

### Install dependencies
- `npm ci`

### Dev server
- `npm run dev`

### Lint
- `npm run lint`

If you need to lint only the frontend source:
- `npx eslint --config eslint.config.mjs "src/**/*.{js,jsx}"`

### Build (static export)
- `npm run build`

### Preview the exported static build
After `npm run build`, preview `out/` with a simple static server:
- `cd out && python3 -m http.server 3000`

### Tests
There is currently no `test` script in `package.json`, and no `*.test.*` / `*.spec.*` files under `src/`.

## High-level architecture
### Frontend (Next.js App Router)
- Routing and layouts live in `src/app/`:
  - `src/app/layout.js` defines the global shell (Navbar + Footer) around all pages.
  - `src/app/page.js` is the `/` route.
  - `src/app/features/page.js` is the `/features` route.
- UI building blocks are in `src/components/` (Hero, MetricsGrid, ReportsSection, etc.).
- Styling:
  - Global styles and shared utility classes (e.g., `.glass`) are in `src/app/globals.css`.
  - Tailwind configuration is in `tailwind.config.js`.
- Import alias:
  - `@/*` resolves to `src/*` via `jsconfig.json`.

Note: `src/app/layout.js` already renders `Navbar` and `Footer`. If you see duplicate navbar/footer on `/`, check whether `src/app/page.js` is also rendering them.

### Backend + Infra (Terraform + Lambda)
Infra is declared in `terraform/`:
- API Gateway HTTP API:
  - `GET /metrics` → Lambda `lambda/get_metrics.py`
  - `POST /insights` → Lambda `lambda/get_insights.py`
  (See `terraform/api_gateway.tf` and `terraform/lambda.tf`.)
- DynamoDB:
  - prompts table: `${project}-prompts-${env}` with `(PromptId, Version)` keys
  - metadata table: `${project}-metadata-${env}` keyed by `DatasetId`
  (See `terraform/dynamodb.tf`.)
- S3:
  - web bucket configured for website hosting (`terraform/s3.tf`)
  - data bucket with server-side encryption (`terraform/s3.tf`)
- IAM:
  - Lambda execution role + basic logging policy attachment
  - Bedrock invoke policy attachment (even though the current Lambda code is mock)
  (See `terraform/lambda.tf`.)

Lambda handlers in `lambda/` currently return hard-coded payloads and include permissive CORS headers. They are intended as MVP placeholders for later Athena/S3 querying and Bedrock-backed insight generation.

## Design / documentation artifacts
- `context.txt` contains architectural notes (planned data pipeline, security, and API shape). Treat this as design intent.
- `Deployment.puml` / `DeploymentDiagram.png` are architecture diagrams; some elements may not match the current implementation and should be reconciled before using them as source-of-truth.
