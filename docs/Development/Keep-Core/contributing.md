--- 
order: 4
---

# Keep Contribution Guide

::: tip
The following is a set of guidelines for contributing to Keep and its packages. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.
:::

## Getting started

1. Fork needed [GitHub repository](https://github.com/keep-network)

2. Clone your fork

3. Follow the [installation & build steps](/development/Keep-Core/getting_started.md) in the repository’s developer README.

4. Setup the recommended [Development Tooling](/development/Keep-Core/contributing.md#development-tooling).

5. Open a PR against the `master` branch and describe the change you are intending to undertake in the PR description.

Before marking the PR as ready for review, make sure:

* It passes the linter checks (`npm run lint`) (see [Pre-commit](/development/Keep-Core/contributing.md#pre-commit) to make this automatic).

* It passes the [continuous](https://app.circleci.com/github/keep-network/keep-core/pipelines) integration tests on CircleCI.

* Your changes have sufficient test coverage (e.g regression tests have been added for bug fixes, unit tests for new features)

## Development Tooling

Commits [must be signed](https://help.github.com/en/articles/about-commit-signature-verification).

### Continuous Integration

Keep uses [CircleCI](https://circleci.com/) for continuous integration. All CircleCI jobs (including tests, linting) must be green to merge a PR.

### Pre-commit

Pre-commit is a tool to install hooks that check code before commits are made. It can be helpful to install this, to automatically run linter checks and avoid pushing code that will not be accepted. Follow the [installation instructions here](https://pre-commit.com/), and then run `pre-commit install` to install the hooks. Note that the [`scripts/macos-setup.sh`](https://github.com/keep-network/keep-core/blob/master/scripts/macos-setup.sh) script should automatically set this up for you.

### Linting

Linters and formatters for Solidity, JavaScript, and Go code are set up and run automatically as part of pre-commit hooks. These are checked again in CI builds to ensure they have been run and are passing.

If you want to change a rule, or add a custom rule, to the JavaScript or Solidity linting, please propose these changes to our [solium-config-keep](https://github.com/keep-network/solium-config-keep) and [eslint-config-keep](https://github.com/keep-network/eslint-config-keep) packages. All other packages have it as a dependency.