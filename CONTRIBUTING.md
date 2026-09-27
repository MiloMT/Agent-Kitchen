# Contributing

Thanks for contributing! Please read this document before opening a pull request.

## Contribution guidelines

- **All changes must go through a pull request.** Direct pushes to `main` are not allowed. The default branch is `main`.
- Keep pull requests small and focused. One logical change per PR.
- Make sure your changes typecheck and don't break existing functionality before requesting review.
- Write clear, descriptive commit messages following the conventions below.

## Commit messages

Commit messages should follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>(<optional scope>): <description>

<optional body>

<optional footer(s)>
```

Common types:

| Type       | Purpose                                            |
| ---------- | -------------------------------------------------- |
| `feat`     | New feature                                        |
| `fix`      | Bug fix                                            |
| `docs`     | Documentation only changes                         |
| `refactor` | Code change that neither fixes a bug nor adds code |
| `test`     | Adding or correcting tests                         |
| `chore`    | Tooling, maintenance, and other housekeeping       |

Examples:

```
feat(ui): add dialog component stories
fix(storybook): resolve @ path aliases in vite config
docs: update contributing guide with commit conventions
```

## Pull request template

Please structure your PR title and description as follows. PR titles should also follow the
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
