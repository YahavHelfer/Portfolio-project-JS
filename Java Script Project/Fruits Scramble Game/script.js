const words = ["apple", "banana", "melon", "mango", "grape", "avocado", "cherry", "guava", "nectarine", "orange", "pineapple", "strawberry"];

let scrambledWord, currentWord;

function initGame() {
    currentWord = words[Math.floor(Math.random() * words.length)];
    scrambledWord = scrambleWord(currentWord);
    document.getElementById('scrambled-word').textContent = scrambledWord;
    document.getElementById('guess-input').value = '';
    document.getElementById('message').textContent = '';
}

function scrambleWord(word) {
    let scrambled = word.split('').sort(function () { return 0.5 - Math.random() }).join('');
    if (scrambled === word) {
        return scrambleWord(word); // ensure word is scrambled
    }
    return scrambled;
}

function checkGuess() {
    let guess = document.getElementById('guess-input').value.trim().toLowerCase();
    if (guess === currentWord) {
        document.getElementById('message').textContent = "Correct!";
        setTimeout(initGame, 1000); // display the next word after 1 second
    } else {
        document.getElementById('message').textContent = "Try again!";
    }
}

function resetGame() {
    initGame();
}

document.getElementById('submit-btn').addEventListener('click', checkGuess);
document.getElementById('reset-btn').addEventListener('click', resetGame);

initGame();
