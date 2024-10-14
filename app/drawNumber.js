const lowerValue = 1;
const highestValue = 100;
let count = 0;
const secretNumber = generateNumber();

const elementLowerValue = document.getElementById("lower-value");
const elementHighestValue = document.getElementById("highest-value");

function generateNumber() {
  return parseInt(Math.random() * highestValue + 1);
}

console.log("Secret Number: " + secretNumber);
elementHighestValue.innerHTML = highestValue;
elementLowerValue.innerHTML = lowerValue;
