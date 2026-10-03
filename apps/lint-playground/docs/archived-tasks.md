# Archived Tasks

Completed work items, moved here from [`active-task-list.md`](./active-task-list.md).
Newest first.

- `ARCH`: Feature anatomy standardized — every feature has `components/` (presentational), `hooks/` (imperative shell) and `lib/` (pure functional core), plus a per-feature `AGENTS.md` describing its business context
- `FEAT`: Jest + Testing Library unit testing — co-located `*.test.ts(x)` for every file in `features/` (pure lib tests, `renderHook` hook tests, component render/interaction tests), jsdom polyfills for Base UI
- `LINT`: Naming conventions enforced via `eslint-plugin-check-file` — component files UpperCamelCase, everything else lowerCamelCase, with reserved names (index.ts, main.tsx, App.tsx, vite-env.d.ts, configs) exempt
- `CHORE`: Comment policy adopted — no comments except JSDoc on public-interface functions; all explanatory content moved to AGENTS.md/docs
- `FEAT`: Scaffold `lint-playground` — Vite + React 19 + TS app consuming the `miloberry` workspace library exclusively; medium-complexity Task Board UI
- `LINT`: ESLint 9 flat config with `typescript-eslint` strictTypeChecked, `react-hooks`, `react-refresh`, and a `no-restricted-imports` guard forcing feature imports through their `index.ts` public API
- `ARCH`: Routing directory — `src/routes/` owns the route table (react-router v7); features never know their own URLs
- `ARCH`: Functional Core, Imperative Shell — pure business rules extracted to `src/features/tasks/domain/` (types, `createTask`, `filterTasks`, `calculateTaskStats`); shell (hooks, components, routes) owns state and I/O
- `LINT`: Enforce the functional core with `eslint-plugin-functional` (no-let, immutable-data, prefer-immutable-types, no-classes, no-throw/try, no-promise-reject) plus import/global restrictions banning React, UI libs, DOM and I/O in `src/**/domain/**`
- `CHORE`: Removed dead `React` import in `libs/Miloberry/src/components/ui/scroll-area.tsx` flagged by the app's stricter tsconfig
