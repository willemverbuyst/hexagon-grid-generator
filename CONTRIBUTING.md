# Contributing

When it comes to open source, there are different ways you can contribute, all
of which are valuable.

## Initial steps

Before you start working on a contribution, create an issue describing what you want to build. It's possible someone else is already working on something similar, or perhaps there is a reason that feature isn't implemented. The maintainers will point you in the right direction.

## Development

The following steps will get you setup to contribute changes to this repo:

1. Fork this repo.

2. Clone your forked repo: `git clone git@github.com:{your_username}/hexagon-grid-generator.git`

3. Run `yarn` to install dependencies.

4. Create a new branch off the `development` branch: `git checkout -b your-feature-name`

5. Push your branch to the repo: `git push origin your-feature-name`

6. Create PR with description of what you have done and how to test it.

7. Submit the PR. The maintainers will follow up ASAP.

### Commands

**`yarn dev`**

- runs app

**`yarn build`**

- deletes `build` and re-compiles `src` to `build`

**`yarn test`**

- runs all vi-tests

### Tests

Vi-Test is used for testing. After implementing your contribution, write tests for it. Just create a new file under `src/__tests__` or add additional tests to the appropriate existing file.

Before submitting your PR, run `yarn test` to make sure there are no (unintended) breaking changes.

### Documentation

The documentation is in the README.md. Be sure to document any API changes you implement.

## License

By contributing your code to the repository, you agree to
license your contribution under the MIT license.
