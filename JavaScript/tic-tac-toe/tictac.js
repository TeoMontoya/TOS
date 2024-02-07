function Gameboard() {
    const rows = 3;
    const columns = 3;
    const board = [];

    //now I create a 2d Array that will 
    //represent the state of the game board
    for (let i = 0; i < rows; i++){
        board[i] = [];
        for (let j = 0; j < columns; j++){
            board[i].push(cell());
        }
    }

    // This will be the method of getting the board
    // that our UI will need
    const getBoard = () => board;

    //this will be the method for when someone 
    // clicks a square
    const placeholderMethod = () => null;

    // This method will be used to print
    // the board to the console
    const printBoard = () => {
        const boardWithCellValues = board.map(row => row.map((cell) => cell.getValue()))
        console.log(boardWithCellValues)
    }

    return {getBoard, placeholderMethod, printBoard}
}

/*
** A Cell represents one "square" on the board and can have one of
** 0: no token is in the square,
** 1: Player One's token,
** 2: Player 2's token
*/
function cell() {
    let value = 0;

    // Accept a player's token to change the value of the cell
    const addToken = (player) => {
        value = player;
    };

    //How we will retrieve the current value of this cell through closure
    const getValue = () => value;

    return {addToken, getValue};
}

// The gameController will be responsible
// for controlling the flow and state of the game's
// turn

function gameController (
    playerOneName = 'Player One',
    playerTwoName = 'Player Two'
) {
    const board = Gameboard();

    const players = [
        {
            name: playerOneName,
            token: 1
        },
        {
            name: playerTwoName,
            token: 2
        }
    ];

    let activePlayer = players[0];

    const switchPlayerTurn = () => {
        activePlayer = activePlayer === players[0] ? players[1] : players[0];
    };

    const getActivePlayer = () => activePlayer;


    const  printNewRound = () => {
        board.printBoard();
        console.log(`${getActivePlayer().name}'s turn`);
    };

    const playRound = () => {

        //logic for playing the game
        
        switchPlayerTurn();
        printNewRound();
    }

    printNewRound();

    return {playRound, getActivePlayer}
}

const game = gameController();