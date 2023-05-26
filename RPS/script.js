// Define constants
const MAX_WINS = 3;

// DOM elements
const elements = {
  attackButtons: document.querySelectorAll(".attack"),
  infoText: document.querySelector('.infoText'),
  battleText: document.querySelector('.battleText'),
  playerChoiceLabel: document.querySelector('.playerChoiceLabel'),
  pcChoiceLabel: document.querySelector('.pcChoiceLabel'),
  playerWeapon: document.querySelector('.playerChoice'),
  pcWeapon: document.querySelector('.pcChoice'),
  winCounter: document.querySelector('.winCounter'),
  loseCounter: document.querySelector('.loseCounter'),
  outcome: document.getElementById('outcome'),
  gameOverModal: document.getElementById('gameOverModal'),
  restartButton: document.getElementById('restartButton')
};

// Game state
let playerWins = 0;
let pcWins = 0;

// Emojis mapping
const emojis = {
  Rock: "👊",
  Paper: "✋",
  Scissors: "✌️"
};

// Event listeners for attack buttons
elements.attackButtons.forEach(button => {
  button.addEventListener("click", () => {
    const playerChoice = button.id;
    playGame(playerChoice);
  });
});

// Function to play the game
function playGame(playerChoice) {
  const choices = ["Rock", "Paper", "Scissors"];
  const pcChoice = choices[Math.floor(Math.random() * choices.length)];

  elements.playerChoiceLabel.style.display = "block"; // Show the player choice label
  elements.pcChoiceLabel.style.display = "block"; // Show the PC choice label

  elements.playerWeapon.textContent = emojis[playerChoice];
  elements.pcWeapon.textContent = emojis[pcChoice];

  const outcomes = {
    Rock: { beats: "Scissors" },
    Paper: { beats: "Rock" },
    Scissors: { beats: "Paper" }
  };

  if (playerChoice === pcChoice) {
    elements.infoText.innerHTML = 'EVEN MATCH';
    elements.battleText.innerHTML = 'We\'ve got a tie!';
  } else if (outcomes[playerChoice].beats === pcChoice) {
    playerWins++;
    elements.infoText.innerHTML = 'VICTORY!';
    elements.battleText.innerHTML = `${playerChoice} defeats ${outcomes[playerChoice].beats}!!!`;
    elements.winCounter.innerHTML = playerWins;
  } else {
    pcWins++;
    elements.infoText.innerHTML = 'DEFEAT.';
    elements.battleText.innerHTML = `${playerChoice} is defeated by ${outcomes[playerChoice].beats}.`;
    elements.loseCounter.innerHTML = pcWins;
  }

  if (playerWins === MAX_WINS || pcWins === MAX_WINS) {
    endGame();
  }
}

// Function to end the game
function endGame() {
  elements.restartButton.addEventListener('click', resetGame);

  if (playerWins === MAX_WINS) {
    elements.outcome.innerHTML = 'YOU ARE VICTORIOUS!';
  } else if (pcWins === MAX_WINS) {
    elements.outcome.innerHTML = 'YOU WERE DEFEATED.';
  }

  elements.gameOverModal.style.display = "block";
}

// Function to reset the game
function resetGame() {
  playerWins = 0;
  pcWins = 0;
  elements.winCounter.innerHTML = playerWins;
  elements.loseCounter.innerHTML = pcWins;
  elements.playerChoiceLabel.style.display = "none"; // Hide the player choice label
  elements.pcChoiceLabel.style.display = "none"; // Hide the PC choice label
  elements.playerWeapon.textContent = "?";
  elements.pcWeapon.textContent = "?";

  elements.gameOverModal.style.display = "none";
}
