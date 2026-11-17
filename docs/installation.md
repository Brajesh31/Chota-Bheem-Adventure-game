# 🛠️ Installation and Local Setup

## Requirements

- A current desktop or mobile browser with JavaScript modules enabled.
- A local copy of this repository.
- Python 3, Node.js, or another static file server for local development.

Node.js and npm are not needed to play the deployed game. No application dependencies or credentials are required.

## Get the project

```bash
git clone https://github.com/Brajesh31/Chota-Bheem-Adventure-game.git
cd Chota-Bheem-Adventure-game
```

## Start a local static server

Because the game loads native JavaScript modules, use an HTTP server instead of relying on direct `file://` opening.

```bash
python -m http.server 8000
```

Open `http://localhost:8000` in your browser.

## Run development checks

Install Node.js 22 or later, then use:

```bash
npm test
npm run validate
npm run check
```

The scripts use Node.js built-in APIs. No `npm install` is required.

## Verify the game

1. Confirm the title screen background and start controls load.
2. Start a game and verify that the score resets.
3. Test keyboard and on-screen controls.
4. Test collision, pause/resume, restart, and return to title.
5. Inspect the browser console and Network panel for missing local files.
6. Check a narrow viewport and reduced-motion preference.

## Environment file

`.env.example` is informational only. No environment values are consumed. Never place API keys, passwords, private tokens, or privileged credentials in HTML, CSS, or JavaScript.

See [troubleshooting.md](troubleshooting.md) when module loading or media loading fails.
