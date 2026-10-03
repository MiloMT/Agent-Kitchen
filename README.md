# Agent-Kitchen

A pnpm monorepo that doubles as an agent testing ground: it hosts real, working projects while intentionally shaping the repository's context setup — `AGENTS.md`, `CONTRIBUTING.md`, and per-app guidance — so coding agents can work in it effectively.

## Structure

| Path                  | Description                                                                        |
| --------------------- | ---------------------------------------------------------------------------------- |
| `apps/*`              | Applications                                                                       |
| `apps/lint-playground`| Sample Task Board app for exploring strict lint setups, built from Miloberry only  |
| `libs/Miloberry`      | Custom React component library based on shadcn/ui                                  |

## Getting started

Requires [Node.js](https://nodejs.org/) and [pnpm](https://pnpm.io/).

```bash
pnpm install    # install all workspace dependencies
pnpm storybook  # run Storybook for the Miloberry component library
```

Useful scripts from the repo root:

```bash
pnpm lint       # lint the apps
pnpm typecheck  # typecheck all workspaces
```

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines. All changes are merged through pull requests — see [AGENTS.md](./AGENTS.md) if you are an agent contributing to this repository.
