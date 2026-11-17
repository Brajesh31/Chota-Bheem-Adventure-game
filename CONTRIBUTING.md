# Contributing

Thanks for considering a contribution. This is a static browser game built with HTML, CSS, and native JavaScript modules. Keep changes focused, test them, and describe exactly what you verified.

## Before you begin

1. Read the README and the relevant pages in `docs/`.
2. Check existing issues and pull requests for duplicate work.
3. Discuss larger gameplay or architecture changes in an issue first.
4. Do not add artwork, music, fonts, or character material unless you have permission to use and redistribute it.

## Local development

The browser loads native JavaScript modules, so serve the project through HTTP:

```bash
python -m http.server 8000
```

Open `http://localhost:8000`. Node.js 22+ is required only for development checks. There are no third-party npm dependencies:

```bash
npm test
npm run validate
npm run check
```

See [docs/installation.md](docs/installation.md).

## Change guidelines

- Keep the static-file structure unless a specific requirement justifies architectural change.
- Keep pure calculations in `game-logic.js` and cover them with deterministic unit tests.
- Maintain one active animation-frame loop per session and cancel it when paused or stopped.
- Keep the player within the game bounds.
- Handle game-over once, and reset timers, audio, score, and obstacle state on restart.
- Keep keyboard, touch, focus, and reduced-motion behavior documented.
- Do not treat bundled artwork or audio as MIT-licensed; see [LICENSE](LICENSE).
- Update README and relevant documentation when behavior, controls, scoring, assets, or deployment changes.

## Pull requests

Include a summary, reason, browser and operating system, viewport, controls used, automated checks, and manual verification performed. Screenshots are useful for visual changes. Review the diff for unrelated changes and remove private data from evidence.

Follow the [Code of Conduct](CODE_OF_CONDUCT.md), and review [GOVERNANCE.md](GOVERNANCE.md).

## License and privacy

By submitting source or documentation, you confirm you have the right to contribute it under the applicable project license. Identify third-party media and its permissions. Do not add analytics, accounts, tracking, or remote services without a privacy/security review. See [PRIVACY.md](PRIVACY.md) and [SECURITY.md](SECURITY.md).
