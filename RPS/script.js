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
  let winMessage = `${playerChoice} beats ${pcChoice}, You win!`;
  let tieMessage = 'Oh! Looks like we have a tie.';
  let loseMessage = `${playerChoice} loses against ${pcChoice}, You lose.`;

  let outcomes = {
    Rock: { beats: "Scissors"},
    Paper: { beats: "Rock"},
    Scissors: { beats: "Paper"}
  };

  // THIS ONE is the game, it compares who is the one winning or losing.

  if (playerChoice === pcChoice) {
    console.log(tieMessage)
  } else if (outcomes[playerChoice].beats === pcChoice) {
    console.log(winMessage)
  } else {
    console.log(loseMessage)
  }
}

/* NEXT STEPS

FIRST
I need to make it so, everytime theres a win or a lose, I add to the WINS/LOSES scoreboard

SECOND
after a 'weapon' is chosen
  'choose your weapon'  to ==> Victory/Defeat
  'first to 5 wins is victorious'  to ==> battle text

      'battle text' => ${playerSelection} defeat/isDefeated ${pcSelection}

THIRD
the 'playerWeapon' icon or text should change tyo match those of the attack being used.
'pcWeapon' might as well

FOURTH
the game ends as soon as the scoreboard reaches 5 on any way
*/
