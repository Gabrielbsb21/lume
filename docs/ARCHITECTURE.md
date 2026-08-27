# Architecture

## Philosophy

Start as a Modular Monolith.

The system should be organized by business modules instead of technical
layers.

## Backend

Spring Boot

Structure:

``` text
modules/
  auth/
  company/
  users/
  products/
  inventory/
  customers/
  suppliers/
  sales/
  purchases/
  finance/
  reports/

shared/
infrastructure/
```

Suggested layers inside each module:

-   presentation
-   application
-   domain
-   infrastructure

Modules communicate through interfaces and domain/application events.

## Frontend

Angular

``` text
src/
  app/
    core/
    shared/
    layout/
    features/
```

Features own their pages, services and state.

## Principles

-   SOLID
-   Clean Architecture
-   Modular Monolith
-   Domain-driven organization
-   Feature-first frontend
-   Accessibility by default
