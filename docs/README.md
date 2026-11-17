# 📚 Documentation Hub

This handbook describes the current game, source architecture, development process, operational checks, privacy, and project governance. It distinguishes implemented functionality from future ideas and known limitations.

## 🧭 Start here

| Need | Document |
|---|---|
| Play and understand controls | [Gameplay guide](gameplay.md) |
| Set up locally | [Installation](installation.md) |
| Understand modules and session lifecycle | [Architecture](architecture.md) |
| Change the project safely | [Development](development.md) |
| Check artwork and sound files | [Assets and media](assets.md) |
| Accessibility implementation and gaps | [Accessibility](accessibility.md) |
| Run unit and manual checks | [Testing](testing.md) |
| Publish a static copy | [Deployment](deployment.md) |
| Diagnose problems | [Troubleshooting](troubleshooting.md) |
| Security and privacy | [Security notes](security.md) and [privacy notes](privacy.md) |
| Quality gates | [Quality assurance](quality-assurance.md) |
| Understand the folders | [Project structure](project-structure.md) |
| Release a change | [Release process](release-process.md) |
| Remaining technical limitations | [Known issues](known-issues.md) |

## 🗂️ Reference material

- [API and integrations](api.md)
- [Browser support](browser-support.md)
- [Configuration](configuration.md)
- [Database and persistence boundary](database.md)
- [Data and state model](data-model.md)
- [Performance notes](performance.md)
- [Decision log](decision-log.md)
- [Glossary](glossary.md)
- [FAQ](faq.md)
- [Diagrams and SVG flow illustration](diagrams/README.md)
- [Runbooks](runbooks/README.md)
- [Reusable templates](templates/README.md)
- [Script documentation](../scripts/README.md)
- [Test documentation](../tests/README.md)

## ✅ Current project boundary

The game is a static HTML/CSS/JavaScript application with no backend, HTTP API, database, login, leaderboard, analytics, or persistent score storage. Node.js is used only for dependency-free unit tests and repository validation.

## ⚖️ Licensing boundary

The root MIT grant applies only to original code and documentation attributed to Brajesh Kumar. It excludes the bundled character art, animations, audio, and third-party branding whose reuse permissions are not established here. See [LICENSE](../LICENSE) and [the asset inventory](assets.md).

## 🧭 Contribution standard

Gameplay changes should update the README and relevant gameplay, architecture, testing, troubleshooting, privacy, and known-issues documentation. New media requires documented redistribution permission. Do not mark manual verification as complete unless it was actually performed.
