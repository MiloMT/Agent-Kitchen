# Active Task List

Work items and ideas that are **not yet done**. New items are appended here
with a designated prefix; completed items are **moved** (not copied) to
[`archived-tasks.md`](./archived-tasks.md).

## Prefixes

| Prefix  | Meaning                                            |
| ------- | -------------------------------------------------- |
| `FEAT`  | New application functionality                       |
| `LINT`  | Linting / enforcement-system work                   |
| `ARCH`  | Structural or architectural changes                 |
| `DOCS`  | Documentation                                       |
| `CHORE` | Tooling, deps, housekeeping                         |

## Open items

- `FEAT`: Persistence layer — a `localStorage` adapter behind an interface, plus a `LINT` companion: `no-restricted-syntax` banning direct `window.localStorage` usage outside `src/lib/`
- `FEAT`: Second feature domain (e.g. `features/notes/`) to make cross-feature boundary rules real
- `FEAT`: Form validation using the Miloberry `Field` / `Form` components — good target for `react-hooks/exhaustive-deps` stress tests
- `FEAT`: Server state via TanStack Query — swap seed data for async data with loading/error states
- `LINT`: Add `eslint-plugin-boundaries` to machine-enforce the folder architecture (features can't import each other except via public APIs, `lib/` can't import features)
- `LINT`: Add `eslint-plugin-import-x` — import ordering, cycle detection, group separation (miloberry / react / first-party)
- `LINT`: Evaluate automated comment-policy enforcement (e.g. a custom `no-restricted-syntax`/AST rule that rejects comments outside the two allowed cases: JSDoc on public-interface functions, and genuinely necessary explanations)
- `LINT`: Enforce the feature contract files — `types.ts` + `constants.ts` present at every feature root (e.g. `eslint-plugin-check-file` folder rules / presence checks)
- `LINT`: CI hardening — run `eslint . --max-warnings 0` + `tsc --noEmit` as blocking checks; add `eslint-plugin-eslint-comments/no-unused-disable` so disables can't be smuggled in
- `ARCH`: Route-level code splitting (`React.lazy` / dynamic `import()`) — build currently warns about chunk size because the miloberry barrel pulls in every component
- `ARCH`: Extract a `src/lib/` directory for imperative I/O adapters (storage, clock, id generation) so the shell's side effects have one home
- `DOCS`: Add per-feature README templates documenting each domain's pure API
- `CHORE`: Evaluate `eslint-plugin-total-functions` or `typed-immutable` for deeper purity checks in the functional core
