# Tasks Feature — Business Context

## Purpose

The **Tasks** feature is a lightweight work-tracking domain: users record
small units of work ("tasks"), classify them by priority, filter the board
(All / Active / Done), and see at a glance how much of the work is complete.

This feature exists primarily as the reference implementation of the app's
architecture: a full vertical slice (pure core, hook shell, presentational
components, route page) that future features are expected to imitate.

## Domain model

- **Task** — a unit of work with an immutable identity (`id`), a `title`,
  optional `notes`, a `priority` (`low | medium | high`), a `createdAt`
  timestamp, and a `done` flag. Tasks are immutable; state transitions
  produce new tasks.
- **Priority** — business classification of urgency. It drives both the
  displayed label and the badge styling (mapped in `constants.ts`, the only
  place UI concerns and business values meet).
- **TaskFilter** — board views: `all`, `active` (not done), `done`.
- **TaskStats** — derived totals: `total`, `done`, `remaining`,
  `percentComplete` (0 when the board is empty).

## Business rules

1. A new task is always created **not done**, with `notes` normalized to
   `undefined` when empty. Non-determinism (ids, timestamps) is injected by
   the caller — the core never reads clocks or random sources.
2. Toggling a task flips its `done` flag; it never changes priority, title
   or timestamps.
3. Filtering never mutates tasks; it only changes what is visible.
4. Stats are always derived from the **full** task list, never the filtered
   one — completion is measured against all work, not the current view.

## Folder layout (this feature)

- `lib/` — **functional core**: pure business rules only (`createTask`,
  `filterTasks`, `calculateTaskStats`, domain types). No React, no DOM,
  no I/O, no mutation. Enforced by ESLint (`src/features/**/lib/**` block
  in `eslint.config.js`).
- `hooks/` — **imperative shell**: `useTasks` owns React state and I/O
  (ids, clock) and delegates every business rule to `lib/`.
- `components/` — **presentational**: `TaskBoard`, `TaskCard`,
  `AddTaskDialog`, `TaskBoardPage`. No business logic; props in, events out.
- `index.ts` — public API. Other layers import the feature only through it.

## Comment policy

No comments in this feature, with two exceptions: JSDoc on functions exported
through the public interface (the `lib/` functions), and code that genuinely
cannot be understood without it. See the app-level `AGENTS.md`.

## Testing

Every file has a co-located `*.test.ts(x)` sibling run by Jest:

- `lib/*.test.ts` — pure unit tests, no DOM.
- `hooks/*.test.ts` — `renderHook`-based tests of state transitions.
- `components/*.test.tsx` — render + interaction tests via Testing Library.

New business rules must land in `lib/` with tests; new UI must be tested at
the component level through its props/events, not by reimplementing rules.
