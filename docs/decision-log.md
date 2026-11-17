# 🧠 Decision Log

This log captures current architectural choices and constraints visible in the repository. It is not a record of formal stakeholder approvals.

## DEC-001: Static browser implementation

**Status:** Current

The game is implemented with HTML, CSS, and classic JavaScript. No framework, server, build tool, database, or package manager is required. This keeps local setup simple.

**Trade-off:** State, lifecycle, testing, and input behavior are directly managed in the browser and currently lack formal abstractions.

## DEC-002: CSS-driven character and obstacle animation

**Status:** Current

The player jump and bull movement use CSS keyframe animations. JavaScript reads computed style positions for collision detection.

**Trade-off:** Collision behavior is coupled to CSS pixels and animation timing.

## DEC-003: Separate media files

**Status:** Current

Images, GIFs, and MP3 files are stored in the repository and referenced through relative paths.

**Trade-off:** Asset rights, file size, and browser decoding need independent review. The MIT grant excludes uncertain third-party media.

## DEC-004: Manual browser verification

**Status:** Current

There is no test framework. Manual checks are documented in [testing.md](testing.md).

**Trade-off:** Regression confidence depends on the tester and browser coverage.
