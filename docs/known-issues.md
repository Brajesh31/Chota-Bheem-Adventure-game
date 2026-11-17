# 🐛 Known Issues and Remaining Limitations

This page lists gaps that remain after the game lifecycle improvements. It does not claim a full product or browser QA audit.

| Area | Current limitation | Practical impact |
|---|---|---|
| Character artwork | Existing character art and media rights are not established in repository metadata | Do not assume the files can be redistributed under MIT |
| Collision model | Inset axis-aligned rectangles approximate visible artwork | Edge collisions may still feel imperfect |
| Animation timing | Obstacle travel is CSS animation driven | Frame scheduling and browser rendering can affect perceived timing |
| Game balance | Jump height and obstacle speed are fixed formulas | Difficulty may need tuning after real playtesting |
| Audio | Browser playback can be blocked by site/tab policies | Gameplay continues without sound |
| Touch | On-screen buttons trigger discrete movement, not continuous press-and-hold movement | Fine-grained movement is limited |
| Accessibility | Live status and focus handling exist, but no formal screen-reader or WCAG audit has been completed | Accessibility claims must remain limited |
| Persistence | Score is session-only | No saved high score or leaderboard |
| Test coverage | Unit tests cover pure geometry and difficulty helpers only | Browser integration, real audio, and visual layout require manual checks |
| Browser coverage | CI does not automate Chromium, Firefox, or Safari gameplay | Compatibility should be verified on target browsers |

## Recommended next steps

1. Confirm rights or replace all third-party media with rights-cleared assets.
2. Conduct a manual playtest on desktop and touch devices and tune hitboxes.
3. Add browser automation after deciding which browser versions to support.
4. Run a screen-reader and keyboard accessibility review.
5. Consider session high scores only with a documented storage and reset design.

The previous unbounded interval, repeat game-over processing, movement overflow, and missing restart flow have been addressed in the current implementation.
