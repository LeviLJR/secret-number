function verifyValidNumber(guess) {
  const number = +guess;
  if (number === secretNumber) {
    document.body.innerHTML = `
    <h2>You gotcha!</h2>
    <h3>The secret number was ${secretNumber}!</h3>
    <span>You guess in ${count + 1}</span>
    <button id='reload'>Restart Game</button>
    `;
    document.getElementById("reload").addEventListener("click", () => {
      window.location.reload(true);
    });
    recognition.addEventListener("end", () => {
      recognition.stop();
    });
  } else if (number < secretNumber) {
    count++;
    elementGuess.innerHTML += ` <div>The secret number is bigger <i class="fa-solid fa-arrow-up"></i></div>`;
  } else if (number > secretNumber) {
    count++;
    elementGuess.innerHTML += ` <div>The secret number is smaller <i class="fa-solid fa-arrow-down"></i></div>`;
  }

  if (count > 0) {
    elementGuess.innerHTML += `<div>Try: ${count}</div> <br>
    <span>Do you want to give up, say: "Game Over"</span>`;
  }

  if (guessInvalid(number)) {
    elementGuess.innerHTML += `<div>Invalid value: Speak a number</div>`;
    if (guess.toUpperCase() === "GAME OVER") {
      document.body.innerHTML = `
          <h2>Game Over!!!</h2>
          <h3>The number was ${secretNumber}. Press the button to play again!</h3>
          <button id='reload'>Restart Game</button>
          `;
      document.body.style.backgroundColor = "black";
      document.getElementById("reload").addEventListener("click", () => {
        window.location.reload(true);
      });
      recognition.addEventListener("end", () => {
        recognition.stop();
      });
    }
  } else if (numberGreaterOrLessThanValue(number)) {
    elementGuess.innerHTML += `<div>Invalid value:<br>The secret number must be between ${lowerValue} and ${highestValue}</div>
    `;
  } else {
    return true;
  }
}

function guessInvalid(number) {
  return Number.isNaN(number);
}

function numberGreaterOrLessThanValue(number) {
  return number > highestValue || number < lowerValue;
}
