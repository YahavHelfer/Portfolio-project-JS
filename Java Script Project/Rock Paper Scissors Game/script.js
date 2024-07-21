// script.js

function playGame(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = '';

    if (playerChoice === computerChoice) {
        result = `It's a tie! You both chose ${playerChoice}.`;
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'scissors' && computerChoice === 'paper') ||
        (playerChoice === 'paper' && computerChoice === 'rock')
    ) {
        result = `You win! ${playerChoice} beats ${computerChoice}.`;
    } else {
        result = `You lose! ${computerChoice} beats ${playerChoice}.`;
    }

    // Countdown
    let countdown = 3;
    document.getElementById('countdown').textContent = `Waiting for ${countdown}...`;
    const countdownInterval = setInterval(() => {
        countdown--;
        document.getElementById('countdown').textContent = `Waiting for ${countdown}...`;
        if (countdown === 0) {
            clearInterval(countdownInterval);
            document.getElementById('countdown').textContent = '';

            // Display choices and result
            document.getElementById('choices').innerHTML = `
                        <div class="choice">
                            <p>You chose:</p>
                            <img src="images/${playerChoice}.png" alt="${playerChoice}">
                        </div>
                        <div class="choice">
                            <p>Computer chose:</p>
                            <img src="images/${computerChoice}.png" alt="${computerChoice}">
                        </div>
                    `;
            document.getElementById('result').textContent = result;
        }
    }, 1000);
}
 