function showPage(pageId) {
    const pages = ['home', 'game', 'rules', 'about', 'contact', 'login'];
    pages.forEach(page => {
        document.getElementById(page).style.display = (page === pageId) ? 'block' : 'none';
    });
}

let currentPlayer = 'X';
const boardState = Array(9).fill(null);

function makeMove(cell, index) {
    if (!boardState[index]) {
        cell.innerText = currentPlayer;
        boardState[index] = currentPlayer;
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        checkWinner();
    }
}

function checkWinner() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
    winPatterns.forEach(pattern => {
        const [a, b, c] = pattern;
        if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
            alert(`${boardState[a]} wins!`);
            resetGame();
        }
    });
    if (!boardState.includes(null)) {
        alert("It's a draw!");
        resetGame();
    }
}

function resetGame() {
    boardState.fill(null);
    currentPlayer = 'X';
    document.querySelectorAll('.cell').forEach(cell => {
        cell.innerText = '';
    });
}

function login(event) {
    event.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Here you would add actual login logic (e.g., checking credentials)
    if (email && password) {
        alert('Login successful');
        showPage('home');
    } else {
        alert('Login failed');
    }
}
