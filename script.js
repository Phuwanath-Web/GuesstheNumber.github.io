let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function playGame() {
    const guessInput = document.getElementById('guess-input');
    const message = document.getElementById('message');
    const attemptsDisplay = document.getElementById('attempts');
    const userGuess = parseInt(guessInput.value, 10);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = 'Please enter a valid number between 1 and 100.';
        return;
    }

    attempts++;

    if (userGuess === randomNumber) {
        message.textContent = `Congratulations! You guessed it right in ${attempts} attempts.`;
        message.style.color = 'green';
        guessInput.disabled = true;
        document.getElementById('submit-btn').disabled = true;
    } else if (userGuess < randomNumber) {
        message.textContent = 'Too low! Try again.';
        message.style.color = 'red';
    } else {
        message.textContent = 'Too high! Try again.';
        message.style.color = 'red';
    }

    attemptsDisplay.textContent = `Attempts: ${attempts}`;
    guessInput.value = '';
}

document.getElementById('submit-btn').addEventListener('click', playGame);
document.getElementById('guess-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        playGame();
    }
});
