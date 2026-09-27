# AGENTS.md

## Overview

This repository is a **pnpm monorepo** managed with [pnpm workspaces](https://pnpm.io/workspaces).

- `apps/*` — application packages
- `libs/Miloberry` — custom React component library based on shadcn/ui

## Getting started

1. Install dependencies from the repository root:

   ```bash
   pnpm install
   ```

2. Useful commands (run from the repo root):

   ```bash
   pnpm storybook            # run Storybook for the Miloberry lib
   pnpm build-storybook      # build Storybook statically
   pnpm --filter miloberry exec tsc --noEmit   # typecheck the lib
   ```

## Required reading

Any agent wishing to contribute to this repository **must read and follow** [CONTRIBUTING.md](./CONTRIBUTING.md) before making changes.
