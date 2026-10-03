# lint-playground

Sample React app for experimenting with strict linting setups. Every UI element
is composed from the [`miloberry`](../../libs/Miloberry) component library —
the app deliberately contains no hand-rolled primitives.

Read [`AGENTS.md`](./AGENTS.md) for the full architecture contract
(Functional Core, Imperative Shell) and the task-list workflow.

## Commands

```bash
pnpm --filter lint-playground dev        # vite dev server
pnpm --filter lint-playground lint       # eslint (flat config, strict)
pnpm --filter lint-playground typecheck  # tsc --noEmit
pnpm --filter lint-playground build      # typecheck + vite build
```

## Structure

```
src/
  main.tsx                 entry point
  App.tsx                  renders the router
  routes/                  routing directory — owns the route table
  features/
    tasks/                 feature domain
      index.ts             public API (barrel) — the only sanctioned import path
      domain/              functional core: pure business rules (no React/IO/mutation)
      use-tasks.ts         imperative shell: state hook
      task-board.tsx       imperative shell: feature root component
      task-card.tsx        imperative shell: leaf component
      add-task-dialog.tsx  imperative shell: leaf component (Dialog/Select/Input/Textarea)
      task-board-page.tsx  page component rendered by routes
  docs/                    task lists (see AGENTS.md)
```

## Linting

`eslint.config.js` uses the ESLint 9+ flat config format with:

- `@eslint/js` recommended
- `typescript-eslint` **strictTypeChecked** (type-aware, strictest preset)
- `eslint-plugin-react-hooks` recommended
- `react-refresh/only-export-components`
- `no-restricted-imports` guard forcing feature imports through `index.ts`
- `eslint-plugin-functional` + import/global restrictions enforcing the pure
  functional core (`src/**/domain/**`)

### Roadmap for heavier enforcement

See `docs/active-task-list.md` (`LINT` prefix items):

- `eslint-plugin-boundaries` — enforce the folder architecture itself
- `eslint-plugin-import-x` — import ordering, cycle detection, layer groups
- CI hardening with `--max-warnings 0` to make warnings blocking
