// Initial game state
let cells = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let result = document.querySelector('.result');
let btns = document.querySelectorAll('.btn');
let conditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Function to handle player moves
const ticTacToe = (element, index) => {
    // Your game logic here
    if (cells[index] !== '') return;

    // Update the game state
    cells[index] = currentPlayer;
    element.textContent = currentPlayer;
    /*
    **Part 1: Winning Conditions (Add your code here)**

    1. Implement the logic to check for winning conditions using the 'conditions' array.
    2. Display a winning message in the 'result' element when a player wins.
    3. Disable all buttons after a win.
    */
   
    for (const condition of conditions) {
        const [a, b, c] = condition;
        if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
            // Your code to update the game state and check for a win
            // ...
            result.textContent = `${currentPlayer} wins!`;

            // Your code to display the current player's turn
            // ...
            btns.forEach(btn => btn.disabled = true);
            return; // Exit the function to prevent further moves
        }
    }

    // Your code to handle button and cell interactions
    // ...
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    result.textContent = `Current Player: ${currentPlayer}`;
};

// Function to reset the game
const resetGame = () => {
    // Your code to reset the game state
    // ...
    cells = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';

    // Your code to update the 'result' element
    // ... 
    btns.forEach((btn, i) => {
        btn.textContent = '';
        btn.disabled = false;
    });

    // Your code to re-enable buttons
    // ...
    result.textContent = 'Current Player: X'
};

btns.forEach((btn, i) => {
    btn.addEventListener('click', () => ticTacToe(btn, i));
});

document.querySelector('#reset').addEventListener('click', resetGame);