# AGENTS.md — lint-playground

## What this app is

A sample React 19 + Vite + TypeScript application inside the pnpm monorepo.
Its **sole purpose** is to serve as a playground for heavy linting setups that
enforce a particular way of structuring code — "make the easy code path the
right way to code."

Two hard constraints:

1. **UI is composed exclusively from the `miloberry` workspace library.** No
   hand-rolled primitives; import from `miloberry` only (plus `lucide-react`
   for icons).
2. **Functional Core, Imperative Shell (see below).** This is enforced by
   linting, not just convention.

## Commands

```bash
pnpm --filter lint-playground dev        # vite dev server
pnpm --filter lint-playground lint       # eslint (flat config, strict)
pnpm --filter lint-playground typecheck  # tsc --noEmit
pnpm --filter lint-playground build      # typecheck + vite build
```

All three checks must pass before any commit: `lint`, `typecheck`, `build`.

## Folder structure

```
src/
  main.tsx                  entry point (the outermost imperative shell)
  App.tsx                   renders the router
  routes/                   THE routing directory — owns the route table
    router.tsx                createBrowserRouter config; pages come from
    root-layout.tsx           feature public APIs; features never know URLs
    index.ts                  public API (barrel)
  features/                 one folder per application domain
    tasks/                    a feature domain
      index.ts                public API — the ONLY sanctioned import path
                              for other layers
      domain/                 FUNCTIONAL CORE (see below)
      use-tasks.ts            imperative shell: state hook
      task-board.tsx          imperative shell: composed UI
      task-card.tsx           imperative shell: leaf UI
      add-task-dialog.tsx     imperative shell: leaf UI
      task-board-page.tsx     page component (what routes render)
      constants.ts            pure constants/mappings (UI-level)
  styles.css                imports miloberry theme + Tailwind v4 sources
docs/
  active-task-list.md       open work items and ideas
  archived-tasks.md         completed items (moved, never deleted)
```

## Functional Core, Imperative Shell (enforced)

The application follows this paradigm strictly:

- **Functional core** — `src/**/domain/**`. All business rules live here as
  pure functions over immutable data. **No React, no DOM, no UI libraries,
  no I/O, no mutation, no `let`.** Non-determinism (ids, clocks, randomness)
  is injected by callers (e.g. `createTask(input, { id, now })`).
- **Imperative shell** — everything else (`routes/`, hooks, components,
  `main.tsx`). It owns state, effects and I/O, and delegates *all* business
  rules to the core. The shell stays thin: no business logic may leak into
  components or hooks — if you need a rule, add a pure function to
  `features/<domain>/domain/` and call it.

**How it's enforced:** the `src/**/domain/**` block in `eslint.config.js`
applies `eslint-plugin-functional` (immutability/purity rules) plus
`no-restricted-imports` (bans `react`, `react-dom`, `miloberry`,
`lucide-react`) and `no-restricted-globals` (bans `document`, `window`,
`localStorage`, `fetch`, `console`) to domain files. Do not weaken these
rules to make code pass — restructure the code instead.

## Additional enforced conventions

- Import features only through their public API: `@/features/<name>` (via
  `index.ts`). Deep imports (`@/features/<name>/<file>`) are errors. Within a
  feature, use relative imports; the domain is imported as `./domain`.
- `typescript-eslint` **strictTypeChecked** is on: explicit return types on
  functions, `type`-only imports (`import type { … }`), no `any`, unused
  vars must be `_`-prefixed.
- Warnings are errors in practice: run `eslint . --max-warnings 0`.

## Task list workflow

Ideas and work items live in `docs/`:

- **New** work items and ideas are appended to `docs/active-task-list.md`
  with a designated prefix (`FEAT`, `LINT`, `ARCH`, `DOCS`, `CHORE`).
- **Completed** items are **moved** to `docs/archived-tasks.md` (newest
  first). Never delete items; always move them.
- When you finish an item, move it to the archive **in the same PR** that
  completes it.

## Commit conventions

Follow the repo-root `CONTRIBUTING.md`: Conventional Commits, PRs only,
`lint`/`typecheck`/`build` green before review.
