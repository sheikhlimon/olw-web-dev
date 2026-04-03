# AGENTS.md - Project Guide

## Project Overview

OneLittleWeb hiring task — convert a Figma design into a fully coded, responsive Next.js page. Frontend-only. Deadline: Sunday, 5 April 2026.

## Technical Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | Next.js | 16.x |
| UI Library | React | 19.x |
| Language | TypeScript | 5.x |
| Styling | Tailwind CSS | 4.x |
| Font | DM Sans | via next/font |
| Icons | lucide-react | - |
| Runtime | Bun | 1.3.11 |
| Hooks | Husky + lint-staged | - |
| Monorepo | Better-T-Stack | 3.27.0 |

## Code Conventions

### React Best Practices
- Functional components with TypeScript
- Server Components by default (Next.js App Router)
- `"use client"` only when needed (event handlers, hooks, browser APIs)
- Props as typed interfaces

### Import Aliases
```typescript
// UI primitives
import { Button } from "@/components/ui/button"
import Container from "@/components/ui/container"

// Sections
import Navbar from "@/components/sections/navbar"

// Utilities (from shared package)
import { cn } from "@olw-web-dev/ui/lib/utils"
```

### Styling Rules
- Tailwind utility classes only — no custom CSS unless necessary
- Mobile-first responsive design (sm → md → lg → xl)
- Custom UI components in `components/ui/` with CVA variants
- Use `cn()` for conditional class merging

## Working Rules

1. **Explain WHAT and WHY before changing** — Describe the change and its rationale
2. **One file at a time** — Focused, reviewable changes
3. **Comments explain WHY not WHAT** — Code should be self-documenting
4. **Design reference before UI changes** — Always check DESIGN.md
5. **No speculative code** — Only what the design requires
6. **No backend code** — This is a frontend-only task

## File Organization

```
apps/web/src/
├── app/
│   ├── layout.tsx              # Root layout (DM Sans font, metadata)
│   └── page.tsx                # Home page (imports all sections)
├── components/
│   ├── sections/               # Page sections
│   │   ├── navbar.tsx
│   │   ├── hero.tsx
│   │   ├── company-logos.tsx
│   │   ├── services.tsx
│   │   ├── pricing.tsx
│   │   ├── tools.tsx
│   │   ├── getting-started.tsx
│   │   ├── why-choose-us.tsx
│   │   ├── reviews.tsx
│   │   ├── faq.tsx
│   │   ├── contact.tsx
│   │   └── footer.tsx
│   └── ui/                     # Reusable primitives
│       ├── button.tsx          # CVA variants (primary, outline, ghost)
│       └── container.tsx       # max-w-7xl + px-8 wrapper
└── index.css                   # Imports globals from packages/ui
```

```
packages/ui/src/
├── styles/globals.css          # Tailwind config, CSS variables, theme
└── lib/utils.ts                # cn() utility
```

## Dependencies We Actually Use

- `next` — Full-stack React framework
- `react` / `react-dom` — UI library
- `tailwindcss` + `@tailwindcss/postcss` — Styling
- `class-variance-authority` — Button/component variants
- `clsx` + `tailwind-merge` — `cn()` utility
- `lucide-react` — Icons
- `husky` + `lint-staged` — Git hooks

## Commit Guidelines

Format: `<type>(<scope>): <description>`

### Types
- `feat`: New feature or section
- `style`: Visual changes (spacing, colors, etc.)
- `chore`: Build, config, tooling changes
- `docs`: Documentation updates

### Examples
```
feat(hero): add hero section with responsive layout
style(nav): fix mobile menu spacing per design specs
chore: setup project documentation and claude config
```
