# AGENTS.md - Project Guide

## Project Overview

OneLittleWeb hiring task - convert a Figma design into a fully coded, responsive Next.js page. Frontend-only. Deadline: Sunday, 5 April 2026.

## Technical Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | Next.js | 16.x |
| UI Library | React | 19.x |
| Language | TypeScript | 5.x |
| Styling | Tailwind CSS | 4.x |
| Components | shadcn/ui (base-lyra) | - |
| Icons | lucide-react | - |
| Runtime | Bun | 1.3.11 |
| Hooks | Husky + lint-staged | - |
| Monorepo | Better-T-Stack | 3.27.0 |

## Code Conventions

### React Best Practices
- Use functional components with TypeScript
- Server Components by default (Next.js App Router)
- Add `"use client"` only when needed (event handlers, hooks, browser APIs)
- Props defined as typed interfaces, not inline types
- Use `@/` alias for app-local imports (`apps/web/src/`)
- Use `@olw-web-dev/ui/` for shared UI components

### Performance Rules
- Minimize client-side JavaScript
- Use Next.js Image component for all images
- Prefer CSS transitions over JS animations
- Lazy load below-fold content where appropriate

### Styling Rules
- Tailwind utility classes only - no custom CSS unless necessary
- Follow shadcn/ui patterns for component variants
- Use CSS variables from globals.css for theming
- Mobile-first responsive design (sm → md → lg → xl)

### Import Aliases
```typescript
// Shared UI components
import { Button } from "@olw-web-dev/ui/components/button"

// Shared utilities
import { cn } from "@olw-web-dev/ui/lib/utils"

// App-local components
import { Header } from "@/components/header"

// App-local
import { something } from "@/lib/something"
```

## Working Rules

1. **Explain WHAT and WHY before changing** - Describe the change and its rationale
2. **One file at a time** - Focused, reviewable changes
3. **Comments explain WHY not WHAT** - Code should be self-documenting
4. **Design reference before UI changes** - Always check DESIGN.md
5. **No speculative code** - Only what the design requires
6. **No backend code** - This is a frontend-only task

## File Organization

```
olw-web-dev/
├── .claude/                    # Project documentation
│   ├── MEMORY.md               # Documentation index
│   ├── AGENTS.md               # This file
│   ├── PLAN.md                 # Phases and progress
│   └── DESIGN.md               # Figma design specs
├── .husky/                     # Git hooks
│   └── pre-commit              # Runs lint-staged
├── apps/
│   └── web/                    # Next.js application
│       ├── src/
│       │   ├── app/            # App Router pages
│       │   │   ├── layout.tsx  # Root layout
│       │   │   ├── page.tsx    # Home page
│       │   │   └── favicon.ico
│       │   ├── components/     # App-specific components
│       │   │   ├── header.tsx
│       │   │   ├── loader.tsx
│       │   │   ├── mode-toggle.tsx
│       │   │   ├── providers.tsx
│       │   │   └── theme-provider.tsx
│       │   └── index.css       # App styles
│       ├── components.json     # shadcn config (app-level)
│       ├── next.config.ts
│       └── package.json
├── packages/
│   ├── ui/                     # Shared shadcn/ui components
│   │   ├── src/
│   │   │   ├── components/     # Button, Card, Input, etc.
│   │   │   ├── hooks/
│   │   │   ├── lib/utils.ts
│   │   │   └── styles/globals.css
│   │   └── components.json
│   ├── config/                 # Shared TypeScript config
│   │   └── tsconfig.base.json
│   └── env/                    # Shared env validation
│       └── src/
├── CLAUDE.md                   # Auto-loaded session config
├── package.json                # Root workspace config
└── bun.lock
```

## Dependencies

### Core
- `next` - Full-stack React framework
- `react` / `react-dom` - UI library
- `tailwindcss` - Utility-first CSS (v4)
- `@tailwindcss/postcss` - PostCSS integration

### UI
- `@base-ui/react` - Unstyled UI primitives (shadcn base)
- `shadcn` - Component generator CLI
- `class-variance-authority` - Component variant system
- `clsx` + `tailwind-merge` - Class merging (`cn` utility)
- `tw-animate-css` - Tailwind animation utilities
- `lucide-react` - Icon library
- `sonner` - Toast notifications
- `next-themes` - Theme switching (dark/light)

### Dev
- `husky` - Git hooks
- `lint-staged` - Pre-commit linting
- `typescript` - Type checking
- `babel-plugin-react-compiler` - React compiler optimization

## Commit Guidelines

Format: `<type>(<scope>): <description>`

### Types
- `feat`: New feature or section
- `fix`: Bug fix
- `style`: Visual changes (spacing, colors, etc.)
- `refactor`: Code restructuring without behavior change
- `chore`: Build, config, tooling changes
- `docs`: Documentation updates

### Examples
```
feat(hero): add hero section with responsive layout
style(nav): fix mobile menu spacing per design specs
chore: setup project documentation and claude config
```
