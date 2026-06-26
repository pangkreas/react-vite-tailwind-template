# React Vite Enterprise Starter

Starter template for building scalable React applications with a feature-based modular architecture.

## Tech Stack

- React 19
- Vite
- TypeScript
- Tailwind CSS 4
- React Router
- TanStack React Query
- Axios
- Zustand
- shadcn/ui-style component primitives

## Getting Started

Install dependencies:

```bash
npm install
```

Create a local environment file:

```bash
cp .env.example .env
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Run lint:

```bash
npm run lint
```

Preview production build:

```bash
npm run preview
```

## Project Structure

```txt
src/
  app/          Application bootstrap, router, providers, route guards
  assets/       Shared static assets
  components/   Reusable UI and common application components
  constants/    App-wide constants
  features/     Feature modules and business capabilities
  hooks/        Shared reusable hooks
  layouts/      Route layouts and page shells
  lib/          Third-party library wrappers and configuration
  stores/       Global Zustand stores
  styles/       Global styles and Tailwind entry
  types/        Shared TypeScript types
  utils/        Shared pure utilities
```

See [ARCHITECTURE.md](./ARCHITECTURE.md) for the full architecture rules.

## Architecture Principles

- Feature-based modular architecture
- Clean Architecture-inspired boundaries
- Low coupling and high cohesion
- Public API exports through `index.ts`
- React Query for server state
- Zustand for client state
- Axios instance centralized in `src/lib/axios.ts`
- Shared primitives in `src/components/ui`
- Feature-specific code stays inside `src/features`

## Import Alias

Use the `@/` alias for source imports:

```ts
import { Button } from '@/components/ui'
import { ROUTES } from '@/constants/routes'
import { apiClient } from '@/lib/axios'
```

Avoid deep relative imports across modules.

## Environment Variables

Only variables prefixed with `VITE_` are exposed to the client by Vite.

```env
VITE_APP_NAME="React Enterprise Starter"
VITE_API_BASE_URL="http://localhost:3000/api"
```

Never commit real secrets to the repository.

## Component Guidelines

- Put generic primitives in `src/components/ui`
- Put shared app components in `src/components/common`
- Put feature-specific components inside the related feature
- Use TypeScript interfaces for props
- Support `className` for customization
- Use `React.forwardRef` for form controls and button-like primitives when useful
- Keep components accessible by default

## Feature Guidelines

Each feature should own its implementation:

```txt
features/users/
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
```

Only expose public contracts from `features/[feature]/index.ts`.

## Quality Gates

Before shipping changes:

```bash
npm run lint
npm run build
```

Both commands should pass.
