# Project Principles

Every contribution should prioritize:

-   Readability
-   Simplicity
-   Accessibility
-   Testability
-   Documentation
-   Consistency

Avoid introducing unnecessary complexity.

Prefer evolving the modular monolith instead of introducing
microservices without a clear business need.

## Git conventions

Branch names must follow Conventional Commits semantics:

```text
codex/<type>/<short-kebab-case-description>
```

Use one of the standard types: `feat`, `fix`, `docs`, `style`, `refactor`,
`perf`, `test`, `build`, `ci`, `chore`, or `revert`.

Commit messages must use the following format:

```text
<type>(<optional-scope>): <description>
```

Example:

```text
branch: codex/chore/update-project-dependencies
commit: chore(deps): update project dependencies
```
