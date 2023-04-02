let firstNumber = null;
let operator = null;
let result = null;

function addNumber(number) {
  const resultElement = document.getElementById("result");
  if (result === null) {
    result = number;
  } else {
    result += number;
  }
  resultElement.value = result;
}

function addOperator(newOperator) {
  firstNumber = parseFloat(result);
  operator = newOperator;
  result = null;
}

function calculate() {
  const secondNumber = parseFloat(result);
  let output = null;

  switch (operator) {
    case "+":
      output = firstNumber + secondNumber;
      break;
    case "-":
      output = firstNumber - secondNumber;
      break;
    case "*":
      output = firstNumber * secondNumber;
      break;
    case "/":
      output = firstNumber / secondNumber;
      break;
  }

  result = output.toString();
  firstNumber = null;
  operator = null;

  const resultElement = document.getElementById("result");
  resultElement.value = result;
}

function clearDisplay() {
  firstNumber = null;
  operator = null;
  result = null;

  const resultElement = document.getElementById("result");
  resultElement.value = "";
}
