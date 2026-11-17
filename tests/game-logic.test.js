import test from "node:test";
import assert from "node:assert/strict";
import {
  clampPosition,
  hasPassedObstacle,
  insetRectangle,
  obstacleDurationForScore,
  rectanglesOverlap,
} from "../game-logic.js";

test("rectanglesOverlap detects intersecting rectangles", () => {
  assert.equal(
    rectanglesOverlap(
      { left: 0, right: 20, top: 0, bottom: 20 },
      { left: 10, right: 30, top: 10, bottom: 30 },
    ),
    true,
  );
});

test("rectanglesOverlap rejects separated rectangles", () => {
  assert.equal(
    rectanglesOverlap(
      { left: 0, right: 10, top: 0, bottom: 10 },
      { left: 12, right: 20, top: 0, bottom: 10 },
    ),
    false,
  );
});

test("hasPassedObstacle becomes true only after the obstacle clears the player", () => {
  const player = { left: 100 };
  assert.equal(hasPassedObstacle(player, { right: 101 }), false);
  assert.equal(hasPassedObstacle(player, { right: 99 }), true);
  assert.equal(hasPassedObstacle(null, { right: 10 }), false);
});

test("clampPosition keeps horizontal movement inside the allowed range", () => {
  assert.equal(clampPosition(-50, 8, 300), 8);
  assert.equal(clampPosition(125, 8, 300), 125);
  assert.equal(clampPosition(500, 8, 300), 300);
  assert.equal(clampPosition(5, 8, 4), 8);
});

test("obstacle duration increases difficulty but respects minimum speed limit", () => {
  assert.equal(obstacleDurationForScore(0), 5);
  assert.equal(obstacleDurationForScore(10), 3.8);
  assert.equal(obstacleDurationForScore(100), 2.2);
  assert.equal(obstacleDurationForScore(-1), 5);
});

test("insetRectangle reduces hitbox equally on each side", () => {
  assert.deepEqual(
    insetRectangle({ left: 0, right: 100, top: 0, bottom: 50, width: 100, height: 50 }, 0.1),
    { left: 10, right: 90, top: 5, bottom: 45 },
  );
});
