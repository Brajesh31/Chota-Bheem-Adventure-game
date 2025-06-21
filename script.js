document.addEventListener("DOMContentLoaded", function () {
  // DOM elements
  const startPage = document.getElementById("startPage");
  const gamePage = document.getElementById("gamePage");
  const startButton = document.getElementById("startButton");

  // Start button click event listener
  startButton.addEventListener("click", function () {
    startPage.style.display = "none";
    gamePage.style.display = "block";
    startGame();
  });

  // Function to start the game
  function startGame() {
    let score = 0;
    let cross = true;

    let audio = new Audio("Chota Bheem - BGM.mp3");
    audio.loop = true; // Set the loop property to true for continuous playback
    audio.play();

    let audiogo = new Audio("gameover.mp3");

    // Keyboard input event listener
    document.addEventListener("keydown", function (e) {
      console.log("Key is: ", e.key);
      if (e.key === "ArrowUp") {
        // Up arrow key
        bheem = document.querySelector(".bheem");
        bheem.classList.add("animateBheem");
        setTimeout(() => {
          bheem.classList.remove("animateBheem");
        }, 700);
      }
      if (e.key === "ArrowRight") {
        // Right arrow key
        bheem = document.querySelector(".bheem");
        bheemX = parseInt(
          window.getComputedStyle(bheem, null).getPropertyValue("left")
        );
        bheem.style.left = bheemX + 112 + "px";
      }
      if (e.key === "ArrowLeft") {
        // Left arrow key
        bheem = document.querySelector(".bheem");
        bheemX = parseInt(
          window.getComputedStyle(bheem, null).getPropertyValue("left")
        );
        bheem.style.left = bheemX - 112 + "px";
      }
    });

    // Game logic interval
    setInterval(() => {
      bheem = document.querySelector(".bheem");
      gameOver = document.querySelector(".gameOver");
      bull = document.querySelector(".bull");

      dx = parseInt(
        window.getComputedStyle(bheem, null).getPropertyValue("left")
      );
      dy = parseInt(
        window.getComputedStyle(bheem, null).getPropertyValue("bottom")
      );

      ox = parseInt(
        window.getComputedStyle(bull, null).getPropertyValue("left")
      );
      oy = parseInt(
        window.getComputedStyle(bull, null).getPropertyValue("bottom")
      );

      offsetX = Math.abs(dx - ox);
      offsetY = Math.abs(dy - oy);

      if (offsetX < 50 && offsetY < 40) {
        // Collision detected
        audiogo.play();
        gameOver.innerHTML = "Game Over - Reload to Play Again";
        
        bull.classList.remove("bullAni");
        setTimeout(() => {
          audio.pause();
        }, 1000);
      } else if (offsetX < 145 && cross) {
        // Successful cross without collision
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
          cross = true;
        }, 1000);
        setTimeout(() => {
          aniDur = parseFloat(
            window
              .getComputedStyle(bull, null)
              .getPropertyValue("animation-duration")
          );
          newDur = aniDur - 0.1;
          bull.style.animationDuration = newDur + "s";
          console.log("New animation duration: ", newDur);
        }, 500);
      }
    }, 10);

    // Function to update the score display
    function updateScore(score) {
      scoreCount.innerHTML = "Your Score: " + score;
    }
  }
});
