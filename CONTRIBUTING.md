# Contributing

Thanks for considering a contribution. This is a small static browser game built without a framework or build system. Keep changes focused, test them in a browser, and describe what you verified.

## Before you begin

1. Read the README and relevant pages in `docs/`.
2. Check existing issues and pull requests for duplicate work.
3. Discuss larger behavior changes in an issue first.
4. Do not add assets, music, fonts, or character artwork unless you have permission to use and redistribute them.

## Local development

Open `index.html` directly or serve the directory with a local static file server. There are no npm dependencies, build scripts, automated tests, API keys, or backend services. See [docs/installation.md](docs/installation.md).

## Change guidelines

- Keep behavior simple and preserve the static-file structure.
- Use explicit declarations (`const`/`let`) and scope event listeners, timers, and audio lifecycle to a game session.
- Handle end-of-game state once and stop active intervals/animations appropriately.
- Keep keyboard behavior documented and consider focus, accessibility, and touch input when changing controls.
- Do not treat the existing image or audio files as MIT-licensed; see [LICENSE](LICENSE).
- Update the README and relevant docs when controls, scoring, assets, or runtime behavior change.

## Pull requests

Include a summary, reason, browser and operating system, controls used, and manual verification performed. Screenshots are useful for visual changes; do not include private data. Review the final diff for generated files, unrelated assets, and material without clear reuse rights.

Follow the [Code of Conduct](CODE_OF_CONDUCT.md).

## License

By submitting source or documentation, you confirm that you have the right to contribute it under the applicable project license. Identify third-party assets and their permissions. Existing media is excluded from the MIT grant in [LICENSE](LICENSE).
