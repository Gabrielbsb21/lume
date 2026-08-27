# Lume

Lume is an open-source ERP platform for small businesses. It is a modular monolith built as a production-quality reference application with Angular and Spring Boot.

## Repository

```text
lume/
  api/                 Spring Boot 4.1 API (Java 25)
  web/                 Angular 22 application
  docs/                Product and architecture documentation
  docker-compose.yml   Local PostgreSQL service
```

The backend is organized by business module and the frontend by feature. See the [architecture](docs/ARCHITECTURE.md), [technology stack](docs/TECH_STACK.md), and [roadmap](docs/ROADMAP.md) for the guiding decisions.

## Prerequisites

- Java 25
- Node.js 24 and pnpm 11
- Docker with Docker Compose

## Local development

Start PostgreSQL:

```bash
docker compose up -d postgres
```

Run the API:

```bash
cd api
./gradlew bootRun
```

Run the web application in another terminal:

```bash
cd web
pnpm install
pnpm start
```

The application is available at <http://localhost:4200>. The API health endpoint is at <http://localhost:8080/actuator/health> and its OpenAPI UI at <http://localhost:8080/docs>.

Default local database credentials are intentionally development-only. Copy `.env.example` to `.env` to override the Compose values; use `DB_URL`, `DB_USER`, and `DB_PASSWORD` to override the API connection.

## Verification

```bash
cd api && ./gradlew build
cd web && pnpm format:check && pnpm test:ci && pnpm build
cd web && pnpm exec playwright install chromium && pnpm e2e
```

Backend integration tests use Testcontainers and therefore require Docker. Pull requests and pushes to `main` run the same checks in GitHub Actions.

## Contributing

Read the [contribution guidelines](docs/CONTRIBUTING_GUIDELINES.md) before starting a change. Keep module boundaries explicit, prefer the simplest design that meets the business need, and treat accessibility and tests as part of the feature.
