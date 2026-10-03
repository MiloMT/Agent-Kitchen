# AGENTS.md — lint-playground

A sample React 19 + Vite + TypeScript app for exploring strict linting setups
that enforce a particular way of structuring code — "make the easy code path
the right way to code." The UI is composed exclusively from the Miloberry
component library, and the app follows a strictly enforced Functional Core /
Imperative Shell architecture.

`src/features/<feature>/AGENTS.md` holds the per-feature business context.
Read the relevant one before touching a feature.

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

## Functional Core, Imperative Shell

The application follows this paradigm strictly:

- **Functional core** — `src/features/**/lib/**`. All business rules are pure
  functions over immutable data. No React, no DOM, no UI libraries, no I/O,
  no mutation. Non-determinism (ids, clocks, randomness) is injected by
  callers.
- **Imperative shell** — everything else (`routes/`, `hooks/`,
  `components/`, `main.tsx`). It owns state, effects and I/O, and delegates
  *all* business rules to the core. If you need a rule, add a pure function
  to `features/<feature>/lib/` and call it — never inline logic in a hook or
  component.

This is enforced programmatically by the `src/features/**/lib/**` block in
`eslint.config.js`. Never weaken those rules to make code pass — restructure
the code instead.

## Feature anatomy

Each feature under `src/features/` has three subdirectories:

- `components/` — presentational UI modules and compositions; props in,
  events out, no business logic.
- `hooks/` — the imperative shell: inputs/outputs contributing to the
  feature (state, I/O, ids, clocks); thin, delegating every rule to `lib/`.
- `lib/` — the business functional core: pure functions only.

At the feature root sit the two contract files:

- `types.ts` — the feature's domain-restricted types. The single place where
  the feature's domain model is declared; consumed by every layer of the
  feature and re-exported through the public API.
- `constants.ts` — the feature's domain-restricted constants and mappings
  (including the one place where business values meet UI concerns, e.g.
  priority → badge variant).

Together they act as the higher-level feature contract: an agent (or
developer) can read `types.ts` + `constants.ts` + `AGENTS.md` to understand
the domain without reading a line of implementation.

Each feature also exposes a public API via `index.ts` and carries its own
`AGENTS.md` describing its business context. The folder architecture itself
is not yet lint-enforced — keep it intact by hand until
`eslint-plugin-boundaries` lands (see task list).

## Comment policy

Comments are **not allowed**, with exactly two exceptions:

1. **JSDoc on functions that belong to a public interface** — a function
   exported through a feature's `index.ts` public API (e.g. the pure
   functions in `features/<feature>/lib/`).
2. **Code that could not be understood otherwise.** If you reach for a
   comment, first try renaming, restructuring, or extracting — the code
   should explain itself.

Anything that needs explaining beyond code (architecture, conventions,
context) belongs in `AGENTS.md`, `README.md` or the task list — not in
comments next to the code. Not yet programmatically enforced.

## Testing

Every file in `src/features/**` has a co-located `*.test.ts(x)` sibling:

- `lib/*.test.ts` — pure unit tests, no DOM.
- `hooks/*.test.ts` — `renderHook`-based tests of state transitions.
- `components/*.test.tsx` — Testing Library render + interaction tests.

Business rules are tested in `lib/`; components are tested through their
props and events, never by reimplementing rules in the test.

## Task list

Ideas and work items live in `docs/`:

- **New** work items and ideas are appended to `docs/active-task-list.md`
  with a designated prefix (`FEAT`, `LINT`, `ARCH`, `DOCS`, `CHORE`).
- **Completed** items are **moved** to `docs/archived-tasks.md` (newest
  first). Never delete items; always move them.
- When you finish an item, move it to the archive **in the same PR** that
  completes it.

## Commits

Follow the repo-root `CONTRIBUTING.md`: Conventional Commits, PRs only,
`lint`/`test`/`typecheck`/`build` green before review.
