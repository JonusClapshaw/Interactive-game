let score = 0;
let pointsPerClick = 1;
let upgradeDiv = document.getElementById("upgrades");
let upgrades = [
  { id: 1, name: "increase1", Cost: 5, Upgrade: 1 },
  { id: 2, name: "increase2", Cost: 25, Upgrade: 10 },
  { id: 3, name: "increase3", Cost: 500, Upgrade: 100 },
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

function renderUpgrades() {
  upgrades.forEach((upgrade) => {
    upgradeDiv.innerHTML +=
      "<div>" +
      "Upgrade Name: " +
      upgrade.name +
      ", " +
      "Upgrade Cost: " +
      upgrade.Cost +
      ", " +
      "Bonus: " +
      upgrade.Upgrade +
      ", " +
      "<button>Buy Button</button>" +
      "</div>";
  });
}

renderUpgrades();
