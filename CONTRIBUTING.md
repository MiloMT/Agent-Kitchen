# Contributing

Thanks for contributing! Please read this document before opening a pull request.

## Getting started

1. Install dependencies from the repository root:

   ```bash
   pnpm install
   ```

2. This is a **pnpm monorepo**. Workspace packages live in:

   - `apps/*` — applications
   - `libs/*` — libraries (e.g. `libs/Miloberry`, the React component library)

3. Useful commands (run from the repo root):

   ```bash
   pnpm storybook            # run Storybook for the Miloberry lib
   pnpm build-storybook      # build Storybook statically
   pnpm --filter miloberry exec tsc --noEmit   # typecheck the lib
   ```

## Contribution guidelines

- **All changes must go through a pull request.** Direct pushes to `main` are not allowed. The default branch is `main`.
- Keep pull requests small and focused. One logical change per PR.
- Make sure your changes typecheck and don't break existing functionality before requesting review.
- Write clear, descriptive commit messages.

## Pull request template

Please structure your PR title and description as follows. PR titles should follow the
[Conventional Commits](https://www.conventionalcommits.org/) format, e.g. `feat(ui): add tabs component stories`.

```markdown
## Summary

A brief explanation of the change and why it is needed.

## Changes

- Bullet list of the notable changes made in this PR.

## Testing

- How the change was verified (commands run, manual steps, screenshots if UI-related).

## Checklist

- [ ] My changes typecheck (`tsc --noEmit`) and build successfully
- [ ] I have NOT merged directly to `main` (this PR is the merge path)
- [ ] I have updated documentation where applicable
```

## Questions?

If anything is unclear, open an issue or ask in the PR before starting large changes.
