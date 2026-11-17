import {
  clampPosition,
  hasPassedObstacle,
  insetRectangle,
  obstacleDurationForScore,
  rectanglesOverlap,
} from "./game-logic.js";

document.addEventListener("DOMContentLoaded", () => {
  const startPage = document.getElementById("startPage");
  const gamePage = document.getElementById("gamePage");
  const startButton = document.getElementById("startButton");
  const restartButton = document.getElementById("restartButton");
  const backButton = document.getElementById("backButton");
  const pauseButton = document.getElementById("pauseButton");
  const gameContainer = document.getElementById("gameContainer");
  const player = document.querySelector(".bheem");
  const obstacle = document.querySelector(".bull");
  const scoreCount = document.getElementById("scoreCount");
  const gameStatus = document.getElementById("gameStatus");
  const gameOverPanel = document.getElementById("gameOverPanel");
  const finalScore = document.getElementById("finalScore");
  const audioStatus = document.getElementById("audioStatus");
  const controlButtons = document.querySelectorAll("[data-action]");

  const backgroundAudio = new Audio("./Chota Bheem - BGM.mp3");
  const gameOverAudio = new Audio("./gameover.mp3");
  backgroundAudio.loop = true;
  backgroundAudio.volume = 0.35;

  const state = {
    running: false,
    paused: false,
    score: 0,
    scoredThisPass: false,
    animationFrame: 0,
    jumpTimeout: 0,
  };

  function updateScore() {
    scoreCount.textContent = `Score: ${state.score}`;
  }

  function setStatus(message) {
    gameStatus.textContent = message;
  }

  async function playAudio(audio) {
    try {
      await audio.play();
      if (audioStatus) audioStatus.textContent = "";
    } catch {
      if (audioStatus) {
        audioStatus.textContent =
          "Audio is unavailable. Check browser site and tab sound settings.";
      }
    }
  }

  function stopAudio() {
    backgroundAudio.pause();
    backgroundAudio.currentTime = 0;
  }

  function getPlayerBounds() {
    return insetRectangle(player.getBoundingClientRect(), 0.18);
  }

  function getObstacleBounds() {
    return insetRectangle(obstacle.getBoundingClientRect(), 0.18);
  }

  function movePlayer(delta) {
    if (!state.running || state.paused) return;

    const maxLeft = gameContainer.clientWidth - player.offsetWidth - 8;
    const nextLeft = clampPosition(player.offsetLeft + delta, 8, maxLeft);
    player.style.left = `${nextLeft}px`;
  }

  function jump() {
    if (!state.running || state.paused) return;

    player.classList.remove("animateBheem");
    window.clearTimeout(state.jumpTimeout);
    void player.offsetWidth;
    player.classList.add("animateBheem");
    state.jumpTimeout = window.setTimeout(() => {
      player.classList.remove("animateBheem");
    }, 720);
  }

  function handleAction(action) {
    if (action === "left") movePlayer(-72);
    if (action === "right") movePlayer(72);
    if (action === "jump") jump();
  }

  function handleKeydown(event) {
    if (!state.running || state.paused) return;

    const actions = {
      ArrowLeft: "left",
      ArrowRight: "right",
      ArrowUp: "jump",
      " ": "jump",
      Spacebar: "jump",
    };
    const action = actions[event.key];
    if (!action) return;

    event.preventDefault();
    if (action !== "jump" || !event.repeat) handleAction(action);
  }

  function stopGameLoop() {
    if (state.animationFrame) {
      window.cancelAnimationFrame(state.animationFrame);
      state.animationFrame = 0;
    }
  }

  function endGame() {
    if (!state.running) return;

    state.running = false;
    state.paused = false;
    stopGameLoop();
    window.clearTimeout(state.jumpTimeout);
    player.classList.remove("animateBheem");
    obstacle.style.animationPlayState = "paused";
    pauseButton.disabled = true;
    pauseButton.textContent = "Pause";
    gameOverPanel.hidden = false;
    finalScore.textContent = `Your score: ${state.score}`;
    setStatus("Game over. You can play again or return to the start screen.");
    backgroundAudio.pause();
    gameOverAudio.currentTime = 0;
    void playAudio(gameOverAudio);
    restartButton.focus();
  }

  function gameLoop() {
    if (!state.running || state.paused) return;

    const playerBounds = getPlayerBounds();
    const obstacleBounds = getObstacleBounds();
    const gameBounds = gameContainer.getBoundingClientRect();

    if (rectanglesOverlap(playerBounds, obstacleBounds)) {
      endGame();
      return;
    }

    if (hasPassedObstacle(playerBounds, obstacleBounds) && !state.scoredThisPass) {
      state.score += 1;
      state.scoredThisPass = true;
      updateScore();
      obstacle.style.animationDuration = `${obstacleDurationForScore(state.score)}s`;
    }

    if (obstacleBounds.left > gameBounds.right - 12) {
      state.scoredThisPass = false;
    }

    state.animationFrame = window.requestAnimationFrame(gameLoop);
  }

  function startGame() {
    state.running = true;
    state.paused = false;
    state.score = 0;
    state.scoredThisPass = false;

    window.clearTimeout(state.jumpTimeout);
    player.classList.remove("animateBheem");
    player.style.left = "clamp(12px, 6vw, 64px)";
    updateScore();

    gameOverPanel.hidden = true;
    audioStatus.textContent = "";
    setStatus("Avoid the bull. Use the arrow keys, Space, or the on-screen controls.");
    pauseButton.disabled = false;
    pauseButton.textContent = "Pause";

    obstacle.classList.remove("bullAni");
    obstacle.style.animationDuration = "5s";
    obstacle.style.animationPlayState = "running";
    void obstacle.offsetWidth;
    obstacle.classList.add("bullAni");

    gamePage.hidden = false;
    startPage.hidden = true;
    void playAudio(backgroundAudio);
    stopGameLoop();
    state.animationFrame = window.requestAnimationFrame(gameLoop);
  }

  function togglePause() {
    if (!state.running) return;

    state.paused = !state.paused;
    if (state.paused) {
      stopGameLoop();
      obstacle.style.animationPlayState = "paused";
      backgroundAudio.pause();
      pauseButton.textContent = "Resume";
      setStatus("Game paused. Select Resume to continue.");
    } else {
      obstacle.style.animationPlayState = "running";
      pauseButton.textContent = "Pause";
      setStatus("Game resumed. Avoid the bull!");
      void playAudio(backgroundAudio);
      state.animationFrame = window.requestAnimationFrame(gameLoop);
    }
  }

  function returnToStart() {
    state.running = false;
    state.paused = false;
    stopGameLoop();
    window.clearTimeout(state.jumpTimeout);
    stopAudio();
    gameOverAudio.pause();
    gameOverAudio.currentTime = 0;
    obstacle.style.animationPlayState = "paused";
    gamePage.hidden = true;
    startPage.hidden = false;
    startButton.focus();
  }

  startButton.addEventListener("click", startGame);
  restartButton.addEventListener("click", startGame);
  backButton.addEventListener("click", returnToStart);
  pauseButton.addEventListener("click", togglePause);
  document.addEventListener("keydown", handleKeydown);

  controlButtons.forEach((button) => {
    button.addEventListener("click", () => handleAction(button.dataset.action));
  });

  document.addEventListener("visibilitychange", () => {
    if (document.hidden && state.running && !state.paused) togglePause();
  });

  window.addEventListener("resize", () => {
    if (!state.running) return;
    const maxLeft = gameContainer.clientWidth - player.offsetWidth - 8;
    player.style.left = `${clampPosition(player.offsetLeft, 8, maxLeft)}px`;
  });

  pauseButton.disabled = true;
});
