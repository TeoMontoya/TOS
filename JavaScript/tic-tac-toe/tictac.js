function Gameboard(){
    const rows = 3
    const columns = 3
    const board = [];

    for (let i = 0; i < rows; i ++){
        board[i] = [];
        for (let j = 0; j < columns; j++){
            board[i].push(cell());
        }
    }

    const getBoard = () => board;

    const clickCell = () => null;

    const printBoard = () => {
        const boardWithCellValues = board.map(row => row.map(cell => cell.getValue()));
        console.log(boardWithCellValues)
    }

    return {getBoard,clickCell, printBoard}
    
}

function cell(){
    let value = 0;

    const addToken = (player) => {
        value = player;
    }

    const getValue = () => value;

    return{addToken, getValue}
}

const game = GameController();