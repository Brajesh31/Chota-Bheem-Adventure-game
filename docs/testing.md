# 🧪 Testing and Verification

## Current test capability

There is no automated test framework, browser automation, unit test suite, or CI test runner in the current application. The game is verified manually in a browser. Do not advertise automated tests as passing unless a real test suite is introduced and executed.

## Manual smoke test

| ID | Check | Expected observation |
|---|---|---|
| G-01 | Open `index.html` | Start page appears |
| G-02 | Select start button | Start page hides and game page appears |
| G-03 | Press Arrow Up | Character jump animation is applied |
| G-04 | Press Arrow Left | Character shifts left |
| G-05 | Press Arrow Right | Character shifts right |
| G-06 | Let the obstacle pass | Score may increment once per crossing |
| G-07 | Allow a collision | Game-over text appears and bull animation stops |
| G-08 | Reload after game over | Start page is available again |
| G-09 | Inspect console/network | No unexpected errors or missing local assets |
| G-10 | Resize viewport | Layout remains usable; record any clipping |

## Regression checklist for code changes

- [ ] Start flow still works.
- [ ] Keyboard controls remain documented and functional.
- [ ] Collision and score behavior are checked.
- [ ] Audio starts only after a user gesture and does not create unhandled promise rejections.
- [ ] Game-over timers/listeners stop as expected.
- [ ] Local asset paths work on a case-sensitive host.
- [ ] Narrow and wide viewport behavior is observed.
- [ ] README and relevant docs reflect changed behavior.

## Reporting results

A useful report includes browser/version, operating system, viewport size, exact input sequence, expected result, actual result, and console errors. Distinguish checks you ran from checks you recommend.

## Future automation

A future test harness could isolate scoring/collision calculations into pure functions and use a browser automation runner for DOM and CSS integration. This is a proposal, not existing infrastructure.
