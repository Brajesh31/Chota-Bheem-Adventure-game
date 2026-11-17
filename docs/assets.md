# 🖼️ Assets and Media Inventory

This file records assets present in the repository and whether current source references them. It does not grant rights to reuse them.

## Files referenced by the current game

| Asset | Current reference | Purpose |
|---|---|---|
| `frontPage.png` | `style.css` | Start-screen background |
| `jungle.gif` | `style.css` | Animated game background |
| `bheem.gif` | `style.css` and `index.html` | Character animation and overlay image |
| `bull.gif` | `style.css` | Moving obstacle |
| `Chota Bheem - BGM.mp3` | `script.js` | Looping background audio |
| `gameover.mp3` | `script.js` | Collision/game-over audio |

The overlay element referencing `bheem.gif` is present but the current JavaScript does not show it.

## Present but currently unreferenced

- `jungle.png`
- `bheem.png`
- `bull.png`
- `bheem punch.gif`
- `music.mp3`

Do not delete apparently unused media without checking whether it is intended for future work or referenced by external material.

## Asset contribution rules

Before adding media, record creator/rightsholder, exact source and acquisition date, license or written permission, required attribution and modification restrictions, file format/dimensions/duration, approximate size, and whether redistribution inside a public Git repository is allowed.

Do not assume that a file is reusable because it is already present. The existing character artwork, names, logos, and audio may be protected by third-party rights. The root [LICENSE](../LICENSE) excludes these media assets from its MIT grant.
