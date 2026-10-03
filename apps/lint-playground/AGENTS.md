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
pnpm --filter lint-playground test       # jest unit tests
pnpm --filter lint-playground typecheck  # tsc --noEmit
pnpm --filter lint-playground build      # typecheck + vite build
```

All four checks must pass before any commit: `lint`, `test`, `typecheck`,
`build`.

## Folder structure

```
src/
  main.tsx                    entry point (the outermost imperative shell)
  App.tsx                     renders the router
  routes/                     THE routing directory — owns the route table
    router.tsx                  createBrowserRouter config; pages come from
    RootLayout.tsx              feature public APIs; features never know URLs
    index.ts                    public API (barrel)
  features/                   one folder per application domain
    tasks/                      a feature domain
      AGENTS.md                 business context of THIS feature (read first!)
      index.ts                  public API — the ONLY sanctioned import path
                                for other layers
      components/               presentational UI + compositions (PascalCase)
      hooks/                    imperative shell: state/effects hooks
      lib/                      FUNCTIONAL CORE (see below)
      constants.ts              pure constants/mappings (UI-level)
  styles.css                  imports miloberry theme + Tailwind v4 sources
docs/
  active-task-list.md         open work items and ideas
  archived-tasks.md           completed items (moved, never deleted)
```

## Feature anatomy (every feature follows this)

Each directory under `src/features/<feature>/` has exactly three
subdirectories:

| Directory      | Role                                                                 |
| -------------- | -------------------------------------------------------------------- |
| `components/`  | Presentational UI modules and compositions that make up the feature. No business logic: props in, events out. |
| `hooks/`       | The imperative shell: logic related to any inputs or outputs that contribute to the feature (state, I/O, ids, clocks). Thin — delegates every rule to `lib/`. |
| `lib/`         | The business functional core: **pure functions only**. No React, no DOM, no UI libraries, no I/O, no mutation, no `let`. Non-determinism is injected by callers. |

Each feature also has its own `AGENTS.md` describing the feature's business
context — intent, purpose and high-level functioning. **Read it before
touching the feature**, and keep it updated when the domain changes.

## Functional Core, Imperative Shell (enforced)

- **Functional core** — `src/features/**/lib/**`. All business rules are
  pure functions over immutable data (e.g. `createTask(input, { id, now })`).
- **Imperative shell** — everything else (`routes/`, `hooks/`, `components/`,
  `main.tsx`). It owns state, effects and I/O, and delegates *all* business
  rules to the core. If you need a rule, add a pure function to
  `features/<feature>/lib/` and call it — never inline logic in a hook or
  component.

**How it's enforced:** the `src/features/**/lib/**` block in
`eslint.config.js` applies `eslint-plugin-functional` (immutability/purity
rules) plus `no-restricted-imports` (bans `react`, `react-dom`,
`miloberry`, `lucide-react`) and `no-restricted-globals` (bans `document`,
`window`, `localStorage`, `fetch`, `console`) to lib files. Do not weaken
these rules to make code pass — restructure the code instead.

## Comment policy (enforced in review)

Comments are **not allowed** in the codebase, with exactly two exceptions:

1. **JSDoc on functions that belong to a public interface** — a function
   exported through a feature's `index.ts` public API (e.g. the pure
   functions in `features/<feature>/lib/`).
2. **Code that could not be understood otherwise.** If you reach for a
   comment, first try renaming, restructuring, or extracting — the code
   should explain itself.

Anything that needs explaining beyond code (architecture, conventions,
context) belongs in `AGENTS.md`, `README.md` or the task list — not in
comments next to the code.

## Naming conventions (enforced)

- **Component files are UpperCamelCase** (`TaskBoard.tsx`), including their
  co-located `*.test.tsx` files (`TaskBoard.test.tsx`).
- **Every other file is lowerCamelCase** (`useTasks.ts`, `createTask.ts`)
  unless a reserved/default naming scheme mandates otherwise: `index.ts`
  barrels, `main.tsx`, `App.tsx`, `vite-env.d.ts`, `*.config.*`,
  `jest.setup.ts`, `AGENTS.md`.
- Enforced by the `check-file/filename-naming-convention` rules in
  `eslint.config.js`. Do not add exemptions casually.

## Testing conventions (enforced in spirit — keep it true)

- Every source file in `src/features/**` has a co-located `*.test.ts(x)`
  sibling.
- `lib/*.test.ts` — pure unit tests, no DOM.
- `hooks/*.test.ts` — `renderHook`-based tests of state transitions.
- `components/*.test.tsx` — Testing Library render + interaction tests.
- Business rules are tested in `lib/`; components are tested through their
  props and events, never by reimplementing rules in the test.

## Additional enforced conventions

- Import features only through their public API: `@/features/<name>` (via
  `index.ts`). Deep imports (`@/features/<name>/<file>`) are errors. Within a
  feature, use relative imports; the core is imported as `./lib` or `../lib`.
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
`lint`/`test`/`typecheck`/`build` green before review.
