const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

document.getElementById('submit').addEventListener('click', () => {
  const userGuess = Number(document.getElementById('guess').value);
  attempts++;
  let feedback = '';

  if (userGuess === randomNumber) {
    feedback = `🎉 Correct! You guessed it in ${attempts} attempts.`;
  } else if (userGuess < randomNumber) {
    feedback = '🔼 Too low. Try again!';
  } else {
    feedback = '🔽 Too high. Try again!';
  }

  document.getElementById('feedback').textContent = feedback;
  document.getElementById('attempts').textContent = `Attempts: ${attempts}`;
});