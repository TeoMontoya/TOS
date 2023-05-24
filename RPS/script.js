// FIRST, bring the buttons to js
let attackButtons = document.querySelectorAll(".attack");

// SECOND, add functionality each time a button is clicked
attackButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    let playerChoice = button.id;
    playGame(playerChoice);
  });
});

// THIRD, this is the part I dont understand, the callbacks.
// But this function will be called when a button is clicked after the 'button.id'

function playGame(playerChoice) {
  // Create the array of possible choices the pc can take
  let choices = ["Rock", "Paper", "Scissors"];
  // Randomly Create a selection for the computer to play with.
  let pcChoice = choices[Math.floor(Math.random() * choices.length)];
  console.log(`You selected ${playerChoice}, and your opponent choose ${pcChoice}`);

  // NOW NOW NOW
  // I GOTTA CREATE THE LOGIC THAT SETS THE GAME

  // WITH this structure I created, called 'a dictionary' I can create Key Value pairs that will facilitate
  // the reading of the code and dodges the need of a long list of 'ifs'.
  // also makes the code more readable
  let winMessage = "You win!";
  let tieMessage = 'Oh! Looks like we have a tie.';
  let loseMessage = `${playerChoice} loses against ${pcChoice}, You lose.`;

  let outcomes = {
    Rock: { beats: "Scissors", message: `Rock beats Scissors, ${winMessage}` },
    Paper: { beats: "Rock", message: `Paper beats Rock, ${winMessage}` },
    Scissors: { beats: "Paper", message: `Scissors beats Paper, ${winMessage}` }
  };

  if (playerChoice === pcChoice) {
    console.log(tieMessage)
  } else if (outcomes[playerChoice].beats === pcChoice) {
    console.log(outcomes[playerChoice].message)
  } else {
    console.log(loseMessage)
  }
}
