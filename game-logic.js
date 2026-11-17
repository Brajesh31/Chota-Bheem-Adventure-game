export function rectanglesOverlap(first, second) {
  if (!first || !second) return false;
  return (
    first.left < second.right &&
    first.right > second.left &&
    first.top < second.bottom &&
    first.bottom > second.top
  );
}

export function hasPassedObstacle(playerRect, obstacleRect) {
  return Boolean(playerRect && obstacleRect && obstacleRect.right < playerRect.left);
}

export function clampPosition(position, minimum, maximum) {
  const safeMaximum = Math.max(minimum, maximum);
  return Math.min(Math.max(position, minimum), safeMaximum);
}

export function obstacleDurationForScore(score, options = {}) {
  const base = Number.isFinite(options.base) ? options.base : 5;
  const minimum = Number.isFinite(options.minimum) ? options.minimum : 2.2;
  const increment = Number.isFinite(options.increment) ? options.increment : 0.12;
  const safeScore = Math.max(0, Number.isFinite(score) ? score : 0);
  return Math.max(minimum, base - safeScore * increment);
}

export function insetRectangle(rect, insetRatio = 0.16) {
  const horizontalInset = rect.width * insetRatio;
  const verticalInset = rect.height * insetRatio;
  return {
    left: rect.left + horizontalInset,
    right: rect.right - horizontalInset,
    top: rect.top + verticalInset,
    bottom: rect.bottom - verticalInset,
  };
}
