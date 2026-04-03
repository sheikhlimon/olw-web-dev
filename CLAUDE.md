# CLAUDE.md - OneLittleWeb Hiring Task

> Auto-loaded at the start of every session. Read all referenced files for full context.

## Files to Read

- [.claude/MEMORY.md](.claude/MEMORY.md) - Index of all documentation
- [.claude/AGENTS.md](.claude/AGENTS.md) - Project overview, conventions, working rules
- [.claude/PLAN.md](.claude/PLAN.md) - Project phases, progress, commit plan
- [.claude/DESIGN.md](.claude/DESIGN.md) - Figma design specs and UI decisions

## Quick Reference

| Item | Detail |
|------|--------|
| **Stack** | Next.js 16 + React 19 + TypeScript + Tailwind CSS v4 + shadcn/ui |
| **Runtime** | Bun 1.3.11 |
| **Monorepo** | Better-T-Stack (bun workspaces) |
| **Linting** | Husky + lint-staged (pre-commit hook) |
| **UI Lib** | shadcn/ui (base-lyra) in `packages/ui` |
| **Port** | 3001 |
| **Phase** | Phase 1 - Setup & Scaffolding |

## Working Rules

1. Explain WHAT and WHY before changing code
2. One file at a time - focused changes
3. Comments explain WHY, not WHAT
4. Check DESIGN.md before any UI change
5. Follow conventional commit format
6. No backend - frontend only (design-to-code task)

## Important Reminders

- Deadline: **Sunday, 5 April 2026 at 11:59 PM**
- Deploy to Vercel
- Public GitHub repo required
- Pixel-accurate implementation from Figma
- Responsive design is critical
