const attackButtons = document.querySelectorAll(".attack");
const elements = {
  infoText: document.querySelector('.infoText'),
  battleText: document.querySelector('.battleText'),
  playerWeapon: document.querySelector('.playerWeapon'),
  pcWeapon: document.querySelector('.pcWeapon'),
  winCounter: document.querySelector('.winCounter'),
  loseCounter: document.querySelector('.loseCounter'),
};
const outcome = document.getElementById('outcome');

const emojis = {
  Rock: "👊",
  Paper: "✋",
  Scissors: "✌️"
};

const maxWins = 3;
let playerWins = 0;
let pcWins = 0;

attackButtons.forEach(button => {
  button.addEventListener("click", () => {
    playGame(button.id);
  });
});

function playGame(playerChoice) {
  const choices = ["Rock", "Paper", "Scissors"];
  const pcChoice = choices[Math.floor(Math.random() * choices.length)];

  elements.playerWeapon.textContent = emojis[playerChoice];
  elements.pcWeapon.textContent = emojis[pcChoice];

  const winMessage = `${playerChoice} beats ${pcChoice}, You win!`;
  const tieMessage = "Oh! Looks like we have a tie.";
  const loseMessage = `${playerChoice} loses against ${pcChoice}, You lose.`;

  const outcomes = {
    Rock: { beats: "Scissors" },
    Paper: { beats: "Rock" },
    Scissors: { beats: "Paper" },
  };

  if (playerChoice === pcChoice) {
    elements.infoText.textContent = 'EVEN MATCH';
    elements.battleText.textContent = `We've got a tie!`;
    console.log(tieMessage);
  } else if (outcomes[playerChoice].beats === pcChoice) {
    playerWins++;
    elements.infoText.textContent = 'VICTORY!';
    elements.battleText.textContent = `${playerChoice} defeats ${outcomes[playerChoice].beats}!!!`;
    elements.winCounter.textContent = playerWins;
    console.log(winMessage);
  } else {
    pcWins++;
    elements.infoText.textContent = 'DEFEAT.';
    elements.battleText.textContent = `${playerChoice} is defeated by ${outcomes[playerChoice].beats}.`;
    elements.loseCounter.textContent = pcWins;
    console.log(loseMessage);
  }

  if (playerWins === maxWins || pcWins === maxWins) {
    endGame();
  }
}

function endGame() {
  const gameOverModal = document.getElementById('gameOverModal');
  const restartButton = document.getElementById('restartButton');

  restartButton.addEventListener('click', resetGame);
  outcome.textContent = playerWins === maxWins ? 'YOU ARE VICTORIOUS!' : 'YOU WERE DEFEATED.';

  gameOverModal.style.display = "block";
}

function resetGame() {
  playerWins = 0;
  pcWins = 0;
  elements.winCounter.textContent = playerWins;
  elements.loseCounter.textContent = pcWins;
  elements.playerWeapon.textContent = "?";
  elements.pcWeapon.textContent = "?";

  const gameOverModal = document.getElementById('gameOverModal');
  gameOverModal.style.display = "none";
}