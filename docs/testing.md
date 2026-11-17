# 🧪 Testing and Verification

## Automated unit tests

The project uses Node.js's built-in test runner. There are no third-party test dependencies.

```bash
npm test
```

The current test suite covers:
- Axis-aligned rectangle intersection.
- Obstacle pass detection.
- Player movement clamping.
- Obstacle difficulty duration and minimum limit.
- Hitbox inset calculations.

These are unit tests for pure logic. They do not render the browser or prove the animation and audio work correctly.

## Repository validation

```bash
npm run validate
```

This checks required project files, relative Markdown links, and local assets referenced by HTML, CSS, and audio declarations. It is not a security audit or a full Markdown parser.

## Manual browser smoke test

| ID | Action | Expected result |
|---|---|---|
| G-01 | Open `index.html` | Start screen and local artwork render |
| G-02 | Select Let's Run | Game screen appears and score resets to 0 |
| G-03 | Press Arrow Up or Space | Player jumps |
| G-04 | Press Arrow Left / Right | Player moves but remains in game bounds |
| G-05 | Use touch control buttons | Left, jump, and right actions work |
| G-06 | Let the obstacle pass safely | Score increases once for the pass |
| G-07 | Cause a collision | One game-over state appears and the loop stops |
| G-08 | Select Play Again | New session starts with score 0 |
| G-09 | Select Pause / Resume | Obstacle, loop, and background audio pause/resume |
| G-10 | Switch browser tab | Active game pauses; resume is manual |
| G-11 | Select Back to Start | Audio stops and title screen returns |
| G-12 | Enable reduced-motion preference | Static background and slower game motion are used |
| G-13 | Navigate with keyboard | Focus indicators remain visible and controls work |
| G-14 | Resize to narrow viewport | Controls remain usable and player stays in bounds |

## CI coverage

The GitHub Actions workflow runs source syntax checks, repository validation, unit tests, YAML parsing, and checks for non-empty Mermaid diagrams.

CI does not currently run Playwright, screenshots, cross-browser automation, audio playback tests, or accessibility conformance scans.

## Test reporting

Record commit SHA, browser/version, OS, viewport, steps, expected and actual results. Mark a test as passed only after running it. See [manual-test-report.md](templates/manual-test-report.md).
