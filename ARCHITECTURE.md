# Frontend Architecture

This project uses **Feature-Based Modular Architecture** for scalable React + Vite + TypeScript applications.

The goal is to keep business capabilities isolated, shared utilities reusable, and dependencies predictable as the project grows.

## Folder Structure

```txt
src/
  app/
    App.tsx
    providers.tsx
    router.tsx
    routes/
      protected-route.tsx

  assets/

  components/
    common/
    ui/

  constants/

  features/
    auth/
      api/
      components/
      constants/
      hooks/
      pages/
      schemas/
      stores/
      utils/
      index.ts
      types.ts

    dashboard/
      components/
      hooks/
      pages/
      index.ts

  hooks/
  layouts/

  lib/
    axios.ts
    cn.ts
    env.ts
    query.ts
    queryClient.ts

  stores/
  styles/
  types/
  utils/
  main.tsx
```

## Folder Responsibilities

### `app/`

Application composition root.

Owns:

- root `App.tsx`
- global providers
- router setup
- route guards
- application bootstrap wiring

Do not put business logic in `app/`.

### `features/`

Business capability modules.

Each feature owns its own:

- pages
- components
- hooks
- API calls
- schemas
- stores
- constants
- utilities
- types

Feature-specific files should stay inside the feature.

### `components/ui/`

Reusable UI primitives.

Examples:

- `Button`
- `Input`
- `Textarea`
- `Select`
- `Badge`
- `Card`
- `Modal`

Rules:

- business-agnostic
- accessible by default
- customizable via `className`
- safe to reuse across features

### `components/common/`

Shared application-level components.

Examples:

- `PageHeader`
- `DataTable`
- `SearchInput`
- `EmptyState`
- `LoadingState`
- `ErrorState`
- `ConfirmDialog`
- `Pagination`
- `StatusBadge`

These may understand common app patterns, but must not contain feature-specific business logic.

### `layouts/`

Route shells and page structure.

Examples:

- app layout
- auth layout
- dashboard layout

Layouts may compose navigation and route outlets, but should avoid business rules.

### `lib/`

Third-party library wrappers and infrastructure helpers.

Examples:

- Axios instance
- TanStack Query client
- Tailwind class merge helper
- environment reader

`lib/` must not import from `features/`.

### `hooks/`

Reusable global hooks.

Examples:

- `useDebounce`
- `useDisclosure`
- `usePagination`

Feature-specific hooks belong in `features/[feature]/hooks`.

### `stores/`

Global client state only.

Use this for app-wide UI or session state that crosses feature boundaries. Feature-specific Zustand stores belong inside the related feature.

### `constants/`

Application-wide constants.

Examples:

- app name
- route paths
- default pagination values

Feature constants belong inside the feature.

### `types/`

Shared TypeScript types used across multiple modules.

Feature-specific types belong inside `features/[feature]/types.ts`.

### `utils/`

Pure reusable utilities.

Examples:

- date formatter
- currency formatter
- storage helpers

Utilities should avoid React, browser side effects, and feature imports unless explicitly designed for the browser.

### `styles/`

Global styling.

Owns:

- Tailwind entry import
- CSS variables
- global reset/base styles

## Dependency Rules

Allowed dependency direction:

```txt
app
  -> layouts
  -> features
  -> components
  -> stores
  -> lib
  -> constants
  -> utils

features
  -> components
  -> hooks
  -> lib
  -> constants
  -> types
  -> utils

components
  -> lib
  -> types

lib
  -> no feature imports

utils
  -> no feature imports
```

Important rules:

- Global folders must not depend on feature internals.
- Cross-feature imports should be rare.
- If one feature needs another feature, import only from that feature's public `index.ts`.
- If two features need the same logic, extract it into `components`, `hooks`, `lib`, `types`, or `utils`.

## Import Rules

Use the `@/` alias:

```ts
import { Button } from '@/components/ui'
import { ROUTES } from '@/constants/routes'
import { apiClient } from '@/lib/axios'
```

Avoid deep relative imports across modules:

```ts
// Bad
import { Button } from '../../../components/ui/Button'

// Good
import { Button } from '@/components/ui'
```

Do not import private feature internals from outside the feature:

```ts
// Bad
import { LoginForm } from '@/features/auth/components/login-form'

// Good
import { LoginPage } from '@/features/auth'
```

Relative imports are acceptable inside a feature boundary.

## Naming Conventions

- Shared components: `PascalCase.tsx`
- Common UI exports: through `components/ui/index.ts` or `components/common/index.ts`
- Shared hooks: `useDebounce.ts`, `useDisclosure.ts`
- Feature hooks: keep consistent inside the feature
- API files: `*-api.ts`
- Store files: `*-store.ts`
- Schema files: `*-schema.ts`
- Constant files: `*-constants.ts`
- Shared utilities: `camelCase.ts`
- Feature public API: `index.ts`

## State Management Rules

Use TanStack React Query for server state:

- fetching
- caching
- mutations
- invalidation

Use Zustand for client state:

- UI state
- session state
- multi-step local workflows
- app-level preferences

Prefer local component state when state does not need to be shared.

## API Rules

- Keep the Axios instance in `src/lib/axios.ts`
- Put feature endpoint functions in `features/[feature]/api`
- Do not put all endpoints in a global `services` folder
- API functions should return typed data
- Query and mutation hooks should live close to the feature that owns them

## Component Rules

- Reusable primitives belong in `components/ui`
- Shared app components belong in `components/common`
- Feature-only components belong in the feature
- Components should support `className` where customization is expected
- Use `React.forwardRef` for reusable form primitives
- Avoid business logic in shared components
- Keep accessibility built in

## TypeScript Rules

- Do not use `any`
- Prefer `interface` for component props
- Use `type` for unions, utility types, and data shapes when appropriate
- Keep feature-specific types inside the feature
- Keep shared types in `src/types`
- Keep `strict` mode enabled

## Tailwind Rules

- Use Tailwind utility classes for component styling
- Use `cn` from `src/lib/cn.ts` for conditional class composition
- Keep design tokens in `styles/globals.css`
- Avoid feature-specific styling in global CSS
- Prefer component-local class composition over broad global selectors

## Large Feature Guidance

When a feature grows beyond roughly 30 files, split it internally:

```txt
features/inventory/
  api/
  pages/
  stores/
  modules/
    products/
      components/
      hooks/
      utils/
    warehouses/
      components/
      hooks/
      utils/
  index.ts
```

Keep submodules inside the parent feature unless they become independent business capabilities.

## Good Decisions

Good:

```txt
features/auth/api/auth-api.ts
features/auth/hooks/use-login.ts
features/auth/stores/auth-store.ts
components/ui/Button.tsx
lib/axios.ts
```

Why: ownership and dependency boundaries are clear.

## Bad Decisions

Bad:

```txt
src/services/users.ts
src/hooks/use-login.ts
src/components/LoginForm.tsx
```

Why: feature logic becomes scattered across global folders.

Bad:

```ts
import { UserForm } from '@/features/users/components/UserForm'
```

Why: it bypasses the feature public API.
