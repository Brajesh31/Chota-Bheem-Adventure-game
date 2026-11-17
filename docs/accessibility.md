# ♿ Accessibility Notes

## Current state

This page is a visual keyboard-controlled game. The start action is a semantic button, and the game controls use arrow keys. The current implementation is not a complete accessible game experience.

Known limitations: gameplay instructions are not persistently visible; score and game-over changes are not explicitly announced as live regions; character and bull are background images; there is no touch or alternative input; CSS animation has no reduced-motion handling; contrast and text scaling have not been audited; focus behavior after starting has not been deliberately managed.

## Recommended improvements

1. Add visible, concise control instructions.
2. Announce score and game-over updates through appropriately scoped live regions.
3. Add a pause/reduced-motion mode and respect `prefers-reduced-motion`.
4. Provide on-screen touch controls without removing keyboard support.
5. Test focus visibility, zoom, contrast, and screen-reader announcements.
6. Avoid conveying game state through color alone.

## Verification

Test with keyboard-only navigation, browser zoom, reduced-motion preference, and at least one screen reader. Record actual browser and assistive technology versions. Do not claim WCAG conformance without a scoped audit.
