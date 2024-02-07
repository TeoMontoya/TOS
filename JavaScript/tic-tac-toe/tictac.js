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
    const makeMove = (row, column, playerToken) => {
        if (board[row] && board[row][column] && board[row][column].getValue() === 0) {
            board[row][column].addToken(playerToken);
            return true;
        }
        return false;
    };

    // This method will be used to print
    // the board to the console
    const printBoard = () => {
        const boardWithCellValues = board.map(row => row.map((cell) => cell.getValue()))
        console.log(boardWithCellValues)
    }

    return {getBoard, makeMove, printBoard}
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

    const checkWinCondition = () => {
        const b = board.getBoard(); // Get the current state of the board
        // Check rows, columns, and diagonals for a win
        for (let i = 0; i < 3; i++) {
            if (b[i][0].getValue() === b[i][1].getValue() && b[i][1].getValue() === b[i][2].getValue() && b[i][0].getValue() !== 0) return true;
            if (b[0][i].getValue() === b[1][i].getValue() && b[1][i].getValue() === b[2][i].getValue() && b[0][i].getValue() !== 0) return true;
        }
        if (b[0][0].getValue() === b[1][1].getValue() && b[1][1].getValue() === b[2][2].getValue() && b[0][0].getValue() !== 0) return true;
        if (b[0][2].getValue() === b[1][1].getValue() && b[1][1].getValue() === b[2][0].getValue() && b[0][2].getValue() !== 0) return true;
        return false;
    };

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

    const playRound = (row, column) => {
        if (board.makeMove(row, column, activePlayer.token)) {
            if (checkWinCondition()) {
                console.log(`${activePlayer.name} wins!`);
                return;
            }
            switchPlayerTurn();
        } else {
            console.log("Invalid move, try again.");
        }
        printNewRound();
    };

    printNewRound();

    return {playRound, getActivePlayer}
}

const game = gameController();