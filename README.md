# Chota Bheem Adventures

A small browser runner game made with plain HTML, CSS, and JavaScript. Start the game, move Bheem with the arrow keys, jump over the charging bull, and increase your score by surviving each pass.

The project is a static client-side page. It has no server, HTTP API, database, or saved scores.

## Play

1. Open `index.html` in a modern browser, or serve the repository directory with a local static file server.
2. Select **Lets Run** on the start screen.
3. Use the arrow keys:
   - **Up**: jump
   - **Left**: move left
   - **Right**: move right
4. Avoid the bull. The score increases when the bull passes without a collision.
5. On collision, the page displays a game-over message. Reload the page to start again.

The game uses the local images, GIFs, and MP3 files in the repository. Music playback depends on browser audio support and user interaction.

Some bundled alternate assets are not referenced by the current page or styles. See [docs/architecture.md](docs/architecture.md) before assuming every image or audio file is used.

## Requirements

- A modern desktop browser with JavaScript enabled
- Keyboard input for the current controls

No build tools, package manager, credentials, or network service are required. The page references Ubuntu from Google Fonts; if the browser cannot fetch it, the CSS falls back to a generic sans-serif font.

## Project files

```text
index.html              Start and game screens
style.css               Page layout, character placement, and animations
script.js               Keyboard input, score, collision, and audio behavior
frontPage.png           Start-screen background
jungle.png / jungle.gif Game background assets
bheem.png / bheem.gif  Character artwork
bull.png / bull.gif    Obstacle artwork
*.mp3                   Background and game-over audio
```

See [docs/architecture.md](docs/architecture.md) for the source flow, [docs/development.md](docs/development.md) for local editing, and [docs/troubleshooting.md](docs/troubleshooting.md) for known behavior and limitations.

## Current limitations

- Only keyboard controls are implemented; there are no touch controls or settings.
- The collision interval is not stopped after game over, so collision handling may continue in the background.
- The game-over screen does not offer an in-page restart; reload the page.
- Scores and game state are not saved.
- The repository contains character art, animation, and music whose redistribution rights are not established by repository metadata. See [LICENSE](LICENSE) before reusing or redistributing assets.

## Contributing and support

Read [CONTRIBUTING.md](CONTRIBUTING.md) before submitting a change. Use [SUPPORT.md](SUPPORT.md) for ordinary questions and [SECURITY.md](SECURITY.md) for private security reports. The [ROADMAP.md](ROADMAP.md) lists possible future work without promised dates.

## License

The MIT grant in [LICENSE](LICENSE) covers the original source code and handbook authored by Brajesh Kumar (`@brajesh31`). It expressly excludes the character images, GIFs, audio, trademarks, and any other third-party material whose rights are not established here.

Last updated: 2026-10-16 06:55 UTC
