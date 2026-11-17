# ♿ Accessibility Notes

## Improvements in the current implementation

- Start, pause, resume, restart, return-to-title, and touch controls are semantic buttons.
- Keyboard focus uses a visible focus indicator.
- The score and game status are announced through live regions.
- The player and obstacle have accessible labels.
- On-screen movement and jump controls are available on narrow/touch screens.
- The page observes the `prefers-reduced-motion` setting by switching to the static jungle background and reducing motion.

## Remaining limitations

- No formal WCAG conformance audit has been completed.
- The player artwork is still visually represented by a CSS background image.
- Hitbox feedback and obstacle state are not fully narrated for screen-reader users.
- The game remains a visually demanding reaction game and does not provide an alternative nonvisual game mode.
- Color contrast and zoom behavior still require manual validation on target devices.

## Verification

Test keyboard-only navigation, focus visibility, browser zoom, reduced-motion preference, touch target size, and at least one screen reader. Record browser and assistive technology versions. Do not claim WCAG conformance without a scoped audit.
