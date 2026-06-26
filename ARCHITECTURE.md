# Frontend Architecture: React + Vite + TypeScript

This project uses Feature-Based Modular Architecture for scalable enterprise React applications.

## Folder Structure

```txt
src/
  app/
    App.tsx
    providers.tsx
    query-client.ts
    router.tsx
    routes/
      protected-route.tsx
  assets/
  components/
    common/
    ui/
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
  layouts/
  lib/
  stores/
  styles/
  utils/
  main.tsx
```

## Responsibilities

`app/` is the application bootstrap layer. It owns app-level providers, router creation, query client configuration, route guards, and the root `App.tsx`.

`features/` contains business capabilities. Each feature owns its pages, feature components, API calls, hooks, schemas, state, constants, utilities, and types. A feature exposes only its public API through `index.ts`.

`components/ui/` contains reusable UI primitives such as Button, Dialog, Input, Table, and other shadcn/ui-style components. These components must be business-agnostic.

`components/common/` contains reusable app-level components such as loading screens, empty states, page headers, and shared navigation pieces.

`layouts/` contains route shells such as app, auth, dashboard, or workspace layouts. Layouts organize structure and navigation, not business logic.

`lib/` contains wrappers and configuration for third-party libraries such as Axios, TanStack React Query, storage helpers, and `cn`.

`stores/` contains global Zustand stores only. Feature-specific stores stay inside the feature.

`styles/` contains global CSS, Tailwind entry files, tokens, and theme-level styling.

`utils/` contains pure reusable utilities that are used by multiple features.

`assets/` contains shared images, icons, and fonts. Feature-only assets should live inside the feature.

## Import Rules

Use the `@/` alias for app imports:

```ts
import { Button } from '@/components/ui/button'
import { useAuthStore } from '@/features/auth'
import { apiClient } from '@/lib/axios'
```

Do not import another feature's internals:

```ts
// Bad
import { LoginForm } from '@/features/auth/components/login-form'

// Good
import { LoginPage } from '@/features/auth'
```

## Dependency Rules

Features may depend on `components`, `layouts`, `lib`, `stores`, `styles`, and `utils`.

Features should not depend on another feature's private files. If cross-feature communication is needed, expose a small public API from that feature's `index.ts`, or extract the shared concept into a neutral shared module.

Global folders must not import feature code, except `app/router.tsx`, which composes route-level feature pages.

## Feature Boundaries

Put a file inside a feature when it is only useful for that feature:

- feature page
- feature form
- feature table
- feature API endpoint wrapper
- feature validation schema
- feature Zustand store
- feature hook
- feature business rule
- feature constant

Put a file in a global folder only when it is reused by multiple features and does not contain feature-specific business rules.

## TypeScript Naming Conventions

- Components: `PascalCase`, file name in kebab-case, for example `login-form.tsx`
- Hooks: `use-*`, for example `use-login.ts`
- API files: `*-api.ts`
- Stores: `*-store.ts`
- Schemas: `*-schema.ts`
- Constants: `*-constants.ts`
- Types: colocate in `types.ts` when feature-scoped

## Large Features

When a feature grows past roughly 30 files, split it into internal modules:

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
    stock-adjustments/
      components/
      hooks/
      utils/
  index.ts
```

Keep those modules inside the parent feature unless they become independently owned business capabilities.

## Good Decisions

Good: `features/auth/api/auth-api.ts` owns auth API calls.

Good: `features/auth/stores/auth-store.ts` owns auth state because it is auth-specific.

Good: `components/ui/button.tsx` is global because it is a generic UI primitive.

Good: `lib/axios.ts` is global because it configures the Axios instance used by feature API modules.

## Bad Decisions

Bad: placing all API calls in `src/services`.

Bad: placing all hooks in `src/hooks`.

Bad: importing `features/users/components/user-form` from `features/orders`.

Bad: moving feature-only constants into global constants.

These choices create low cohesion and make large apps harder to refactor.
