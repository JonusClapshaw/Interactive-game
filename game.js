let score = 0;
let pointsPerClick = 1;
let upgradeDiv = document.getElementById("upgrades");
let coinDropArea = document.getElementById("coin-drop-area");
let upgrades = [
  { id: 1, name: "increase1", Cost: 5, Upgrade: 1 },
  { id: 2, name: "increase2", Cost: 25, Upgrade: 10 },
  { id: 3, name: "increase3", Cost: 500, Upgrade: 100 },
];
let clickBtn = document.getElementById("click-btn");

function updateDisplay() {
  document.getElementById("score-display").textContent = "Coins: " + score;
  document.getElementById("rate-display").textContent =
    "Coins Per Click: " + pointsPerClick;
}

function dropCoins() {
  //Limit the number of coins dropped
  const coinCount = Math.min(pointsPerClick, 8);

  for (let index = 0; index < coinCount; index += 1) {

    const coin = document.createElement("span");
    // puts the coin on the screen and subtract 24 cause the size of the coin is 24px
    coin.className = "coin";
    coin.style.left = Math.random() * (coinDropArea.clientWidth - 24) + "px";

    // coin drop area is the div where coins drop and we will remove coin from screen after animation ends
    coinDropArea.appendChild(coin);
    coin.addEventListener("animationend", () => coin.remove());
  }
}

clickBtn.addEventListener("click", function () {
  score += pointsPerClick;
  updateDisplay();
  renderUpgrades();
  dropCoins();
});

function renderUpgrades() {
  upgradeDiv.innerHTML = "";

  upgrades.forEach((upgrade) => {
    const div = document.createElement("div");
    div.textContent =
      "Upgrade Name: " +
      upgrade.name +
      ", Upgrade Cost: " +
      upgrade.Cost +
      ", Bonus: " +
      upgrade.Upgrade +
      " ";

    const button = document.createElement("button");
    button.textContent = "Buy";
    button.onclick = () => buyUpgrade(upgrade.id);
    button.disabled = score < upgrade.Cost;

    div.appendChild(button);
    upgradeDiv.appendChild(div);
  });
}

updateDisplay();
renderUpgrades();

function buyUpgrade(id) {
  const upgrade = upgrades.find((u) => u.id === id);

  if (score >= upgrade.Cost) {
    score -= upgrade.Cost;
    pointsPerClick += upgrade.Upgrade;
    updateDisplay();
    renderUpgrades();
  }
}