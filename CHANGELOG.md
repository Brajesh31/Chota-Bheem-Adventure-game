# Changelog

Earlier application history remains available in Git commits. This changelog records repository maintenance after the handbook baseline.

## Unreleased

### Added
- Responsive start and game layouts with keyboard and on-screen touch controls.
- Pause, resume, restart, and return-to-title actions.
- Explicit game-session state and a single requestAnimationFrame loop.
- Collision detection using inset rectangles and once-per-pass scoring.
- Difficulty progression with a minimum obstacle animation duration.
- Audio playback failure handling and visibility-based pause behavior.
- Reduced-motion handling and accessible status/focus improvements.
- `game-logic.js` pure helpers and Node.js built-in unit tests.
- A repository validator for required files, Markdown links, and local runtime assets.
- An original SVG favicon and game-session flow illustration.

### Changed
- Reworked the browser interface and responsive styling.
- Removed the external Google Fonts stylesheet; the game now uses system fonts.
- Updated README, architecture, gameplay, setup, security, testing, and runbooks to describe the current implementation.
- Expanded CI to run Node syntax checks, unit tests, repository validation, YAML parsing, and Mermaid checks.

### Preserved
- Existing bundled PNG, GIF, and MP3 assets.
- The existing single MIT license and its exclusion of branded media assets.
- Static-browser architecture with no runtime npm dependencies, backend, or database.

### Verification boundary
Automated unit and repository checks do not replace manual browser, audio, touch-device, or screen-reader testing.
