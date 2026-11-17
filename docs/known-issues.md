# 🐛 Known Issues and Technical Debt

This document reflects the current committed source, not hypothetical future design.

| Area | Observation | Impact |
|---|---|---|
| Variable scope | Several identifiers in `script.js` are assigned without declarations | Implicit globals and fragile maintenance |
| Session lifecycle | Collision interval is not cleared on game over | Repeated collision handling may continue |
| Event listeners | Keyboard handler is added inside `startGame` with no teardown | Repeated start could accumulate listeners if lifecycle changes |
| Collision behavior | Position thresholds use computed pixel values | May be inconsistent across viewport sizes |
| Player movement | Left/right movement has no boundary clamp | Character can leave visible play area |
| Difficulty | Animation duration is reduced without a lower bound | Obstacle speed may become impractical |
| Audio | `audio.play()` promises are not handled | Browser rejection may create console warnings |
| Restart | No in-page restart control | User must reload |
| Accessibility | No touch controls, live score announcement, or reduced-motion treatment | Excludes some input/assistive use |
| Overlay | Overlay HTML exists but current script never activates it | Unused interface markup |
| Documentation | Several bundled media files are unused by current source | Easy to misstate actual game content |

## Prioritization suggestion

1. Make game-over a one-time transition and clear the collision interval.
2. Declare all variables locally and avoid implicit globals.
3. Clamp player movement and make controls responsive.
4. Handle audio playback rejection and reset audio state.
5. Add restart, pause, and touch controls.
6. Add accessible status announcements and reduced-motion behavior.

No issue in this table has been fixed by the handbook-only update. Use [ROADMAP.md](../ROADMAP.md) to propose changes.
