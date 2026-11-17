# 🗂️ Project Structure

```text
.
├── .github/
│   ├── DISCUSSION_TEMPLATE/
│   ├── ISSUE_TEMPLATE/
│   ├── PULL_REQUEST_TEMPLATE.md
│   ├── dependabot.yml
│   └── workflows/
├── docs/
│   ├── assets/
│   ├── diagrams/
│   ├── runbooks/
│   └── templates/
├── scripts/
│   └── validate-repository.mjs
├── tests/
│   └── game-logic.test.js
├── index.html
├── style.css
├── script.js
├── game-logic.js
├── favicon.svg
└── existing PNG, GIF, and MP3 files
```

## Directory boundaries

- Root browser files are the deployable game.
- `game-logic.js` contains deterministic helpers imported by the browser controller and unit tests.
- `scripts/` contains repository maintenance tools.
- `tests/` contains Node test-runner files.
- `docs/` contains project, operations, visual, and contributor documentation.
- `.github/` contains contribution templates and workflow automation.

No build or transpilation step is required. Static hosting should publish the root runtime files and referenced media paths.
