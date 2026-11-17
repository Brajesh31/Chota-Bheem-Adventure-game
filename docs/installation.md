# 🛠️ Installation and Local Setup

## Requirements
- A current desktop browser with JavaScript enabled.
- A local copy of this repository.
- Optional: a static HTTP server for serving local files.

Node.js, npm, a database, a backend, and environment secrets are not required.

## Option A: Open the file
Open `index.html` directly in a browser. The game uses relative asset paths. This is sufficient in browsers that permit local file resource loading.

## Option B: Run a static HTTP server
From the repository root:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`. This is a development convenience, not an application server.

## Verify the page
1. Confirm the start screen background loads.
2. Start the game.
3. Confirm the character, jungle background, and bull render.
4. Test Up, Left, and Right.
5. Observe score progression and collision behavior.
6. Check browser console and network panel for missing assets.

## Environment file
`.env.example` documents that no environment variables are currently required. Browser JavaScript is public to every visitor. Never put API keys, passwords, or private credentials in HTML, CSS, or client-side JavaScript.
