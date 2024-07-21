const gameOptions = document.getElementById('game-options');
const modeSelect = document.getElementById('mode');
const startButton = document.getElementById('start');
const board = document.querySelector('.board');
const squares = document.querySelectorAll('.square');
const message = document.getElementById('message');
const resetButton = document.getElementById('reset');
const backButton = document.getElementById('back');

let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let vsComputer = false;
let playerXName = '';
let playerOName = '';

startButton.addEventListener('click', () => startGame());

const startGame = () => {
    const mode = modeSelect.value;
    vsComputer = (mode === 'computer');

    if (!vsComputer) {
        playerXName = prompt("Enter the name for Player X:") || 'Player X';
        playerOName = prompt("Enter the name for Player O:") || 'Player O';
    }

    gameOptions.style.display = 'none';
    board.style.display = 'flex';
    resetButton.style.display = 'block';
    backButton.style.display = 'block';
    resetGame();
};

const checkWin = () => {
    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];
        if (gameBoard[a] === currentPlayer && gameBoard[b] === currentPlayer && gameBoard[c] === currentPlayer) {
            return currentPlayer;
        }
    }

    return null;
};

const handleClick = (event) => {
    const cell = parseInt(event.target.dataset.cell);

    if (gameBoard[cell] !== '') {
        return;
    }

    gameBoard[cell] = currentPlayer;
    event.target.textContent = currentPlayer;

    event.target.className = currentPlayer === 'X' ? 'square playerX' : 'square playerO';

    const winner = checkWin();
    if (winner) {
        const winnerName = winner === 'X' ? playerXName : playerOName;
        message.textContent = `${winnerName} wins!`;
        squares.forEach(square => square.removeEventListener('click', handleClick));
        return;
    }

    if (gameBoard.every(cell => cell !== '')) {
        message.textContent = 'It\'s a draw!';
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

    if (vsComputer && currentPlayer === 'O') {
        makeComputerMove();
    }
};

const makeComputerMove = () => {
    // Disable click event listeners on squares
    squares.forEach(square => square.removeEventListener('click', handleClick));

    const emptyCells = gameBoard.map((cell, index) => cell === '' ? index : null).filter(index => index !== null);
    const randomIndex = Math.floor(Math.random() * emptyCells.length);
    const cell = emptyCells[randomIndex];

    setTimeout(() => {
        gameBoard[cell] = currentPlayer;
        squares[cell].textContent = currentPlayer;
        squares[cell].classList.add('playerO');

        const winner = checkWin();
        if (winner) {
            message.textContent = `Computer wins!`;
            return;
        }

        if (gameBoard.every(cell => cell !== '')) {
            message.textContent = 'It\'s a draw!';
            return;
        }

        currentPlayer = 'X';

        // Re-enable click event listeners on squares
        squares.forEach(square => {
            if (gameBoard[square.dataset.cell] === '') {
                square.addEventListener('click', handleClick);
            }
        });
    }, 1000);
};


const resetGame = () => {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    message.textContent = '';
    squares.forEach(square => {
        square.textContent = '';
        square.classList.remove('playerX', 'playerO');
        square.addEventListener('click', handleClick);
    });

    if (vsComputer && currentPlayer === 'O') {
        makeComputerMove();
    }
};

squares.forEach(square => square.addEventListener('click', handleClick));
resetButton.addEventListener('click', resetGame);
backButton.addEventListener('click', () => {
    gameOptions.style.display = 'flex';
    board.style.display = 'none';
    resetButton.style.display = 'none';
    backButton.style.display = 'none';
    message.textContent = '';
});
