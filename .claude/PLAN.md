# PLAN.md - Project Phases & Progress

## Project Goal

Convert the OneLittleWeb Figma hiring task design into a pixel-accurate, responsive Next.js page and deploy it to Vercel.

**Deadline:** Sunday, 5 April 2026 at 11:59 PM

---

## Phases

### Phase 1 - Setup & Scaffolding
- [x] Create project with Better-T-Stack (Next.js, Bun, Husky, Tailwind)
- [x] Verify all dependencies installed
- [x] Setup project documentation (.claude/ directory, CLAUDE.md)
- [ ] Confirm dev server runs on port 3001
- [ ] Extract and document Figma design specs in DESIGN.md

### Phase 2 - Design Analysis
- [ ] Analyze Figma design sections and layout
- [ ] Document color scheme, typography, spacing in DESIGN.md
- [ ] Identify all sections and components needed
- [ ] Plan responsive breakpoints

### Phase 3 - Component Development
- [ ] Build page layout structure
- [ ] Implement each design section as components
- [ ] Add responsive styles for all breakpoints
- [ ] Add hover/interaction states per design

### Phase 4 - Polish & QA
- [ ] Cross-check implementation against Figma design
- [ ] Test responsive behavior across breakpoints
- [ ] Fix spacing, alignment, and typography details
- [ ] Performance check (Lighthouse)
- [ ] Clean up unused code/components

### Phase 5 - Deployment
- [ ] Push to public GitHub repository
- [ ] Deploy to Vercel
- [ ] Final verification on live URL
- [ ] Submit (repo link + live link + time spent)

---

## Commit Sequence

1. `chore: setup project documentation and claude config`
2. `feat: add page layout structure and base components`
3. `feat(section): add [section-name] section` (per section)
4. `style: responsive adjustments and spacing fixes`
5. `chore: deploy to vercel`

---

## How to Apply

- Check off items as they're completed
- Update the **current phase** marker below when moving to a new phase
- Add new tasks discovered during implementation
- Keep commit messages aligned with the sequence above

**Current Phase:** Phase 1 - Setup & Scaffolding
