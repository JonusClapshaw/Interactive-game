let score = 0;
let pointsPerClick = 1;
let clickBtn = document.getElementById("click-btn");

function updateDisplay() {
  document.getElementById("score-display").textContent = "Score: " + score;
  document.getElementById("rate-display").textContent =
    "Points Per Click: " + pointsPerClick;
}

clickBtn.addEventListener("click", function () {
  score += pointsPerClick;
  updateDisplay();
});
