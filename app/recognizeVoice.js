function convertWordToNumber(word) {
  const numbersInEnglish = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  const number = numbersInEnglish[word.toLowerCase()];
  return number !== undefined ? number : word;
}

function convertWordToNumberPt(word) {
  const numbersInPortuguese = {
    um: 1,
    dois: 2,
    três: 3,
    quatro: 4,
    cinco: 5,
    seis: 6,
    sete: 7,
    oito: 8,
    nove: 9,
  };

  const number = numbersInPortuguese[word.toLowerCase()];
  return number !== undefined ? number : word;
}

const elementGuess = document.getElementById("guess");

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = "en-US";
recognition.start();

recognition.onresult = (e) => {
  guess = e.results[0][0].transcript;
  if (document.querySelector("html").getAttribute("lang") === "pt" &&  convertWordToNumberPt(guess) !== guess){
    showNumberOnScreen(convertWordToNumberPt(guess));
    verifyValidNumber(convertWordToNumberPt(guess));
  } else if (convertWordToNumber(guess) !== guess) {
    showNumberOnScreen(convertWordToNumber(guess));
    verifyValidNumber(convertWordToNumber(guess));
  } else {
    showNumberOnScreen(guess);
    verifyValidNumber(guess);
  }
};

function showNumberOnScreen(guess) {
  elementGuess.innerHTML = `<div>You said:</div>
      <span class="box">${guess}</span>
      `;
}

recognition.addEventListener("end", () => {
  if (document.querySelector("html").getAttribute("lang") === "pt") {
    recognition.lang = "pt-Br";
  }
  if (document.querySelector("html").getAttribute("lang") === "auto") {
    recognition.lang = "en-US";
  }
  recognition.start();
});
