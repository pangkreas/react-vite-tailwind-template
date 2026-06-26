# __APP_NAME__

__APP_DESCRIPTION__

This project was generated from the React Vite Enterprise Starter template.

## Template Placeholders

The `create-pangkreas-app` CLI replaces placeholders such as `__APP_NAME__`, `__APP_DESCRIPTION__`, `__AUTHOR__`, `__COMPANY__`, `__YEAR__`, and `__VERSION__` after cloning this template.

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

## Installation

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

## Scripts

```bash
npm run dev
npm run build
npm run lint
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

## Environment Variables

Only variables prefixed with `VITE_` are exposed to the client by Vite.

```env
VITE_APP_NAME="__APP_NAME__"
VITE_APP_DESCRIPTION="__APP_DESCRIPTION__"
VITE_API_BASE_URL="http://localhost:3000/api"
```

Never commit real secrets to the repository.

## Quality Gates

Before shipping changes:

```bash
npm run lint
npm run build
```
