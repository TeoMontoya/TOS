// FIRST, bring the buttons to js
let attackButtons = document.querySelectorAll('.attack');

// SECOND, add functionality each time a button is clicked
attackButtons.forEach(function(button){
    button.addEventListener('click', function(){
        let playerChoice = button.id
        playGame(playerChoice)
        console.log(playerChoice)
    })
});

// THIRD, this is the part I dont understand, the callbacks.
// But this function will be called when a button is clicked after the 'button.id'

function playGame(playerChoice){
    // Create the array of possible choices the pc can take
    let choices = ['Rock', 'Paper', 'Scissors'];
    // Randomly Create a selection for the computer to play with. 
    let pcChoice = choices[Math.floor(Math.random() * choices.length)]
    console.log(pcChoice)


}

