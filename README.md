# OneLittleWeb — Landing Page

A modern, responsive landing page for OneLittleWeb built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.

## Tech Stack

- **Next.js 16** (App Router, Turbopack)
- **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **shadcn/ui** (shared UI primitives)
- **Lucide React** (icons)
- **Bun** (runtime & package manager)

## Sections

| Section | Description |
|---------|-------------|
| Hero | Full-screen hero with background grid and radial fade |
| Navbar | Sticky header with responsive mobile hamburger menu |
| Tools | Tool/partner logos in responsive grid |
| Services | Service offerings with icons |
| Getting Started | 3-step onboarding flow |
| Why Choose Us | Features with decorative imagery |
| Pricing | Monthly/yearly toggle with plan cards |
| Reviews | 3-card testimonial carousel with auto-rotation |
| FAQ | Expandable accordion with team avatars |
| Footer | Links, social icons (Lucide), branding |

## Getting Started

```bash
bun install
bun run dev
```

Open [http://localhost:3001](http://localhost:3001).

## Build

```bash
bun run build
```

## Project Structure

```
apps/web/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── sections/    # Page sections (hero, navbar, pricing, etc.)
│   │   └── ui/          # Reusable UI components (Button, Cards, etc.)
│   └── index.css
├── public/images/       # Static assets
packages/
├── ui/                  # Shared shadcn/ui primitives
```

## Credit

This project was scaffolded with [Better-T-Stack](https://github.com/AmanVarshney01/create-better-t-stack) and developed as a hiring task for OneLittleWeb.
