const sandbox = require("./sandbox");
const CalculatorUI = require("./calculatorUI");
const calculatorUI = new CalculatorUI();

const initCalculator = () => {
  const screen = document.querySelector(".screen");
  const allDigits = document.querySelectorAll(".digit");

  const updateDisplay = (toDisplay) => {
    screen.textContent = toDisplay;
  };

  const sendToCalculatorUI = (event) => {
    const clickedDigitDiv = event.target;
    const digitAsText = clickedDigitDiv.textContent;
    calculatorUI.digitClicked(Number(digitAsText));
  };

  calculatorUI.registerListener(updateDisplay);
  allDigits.forEach((numberDiv) =>
    numberDiv.addEventListener("click", sendToCalculatorUI)
  );
};
document.addEventListener("DOMContentLoaded", initCalculator);
document.addEventListener("DOMContentLoaded", sandbox.run);
