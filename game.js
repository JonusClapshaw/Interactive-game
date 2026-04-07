let score = 0;
let pointsPerClick = 1;
let upgrades = [
    { id: 1, Name: increase, Cost: 5, Upgrade: 1 },
    { id: 2, Name: increase, Cost: 25, Upgrade: 10 },
    { id: 3, Name: increase, Cost: 500, Upgrade: 100 }
];
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
