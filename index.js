const arg_a = document.getElementById("argument_a");
const arg_b = document.getElementById("argument_b");
const math_op = document.getElementById("math_operation");
const result = document.getElementById("example_result");

function calculate(operator, a, b) {
  if (operator == "+") {
    return a + b;
  }
  if (operator == "-") {
    return a - b;
  }
  if (operator == "*") {
    return a * b;
  }
  if (operator == "/") {
    return a / b;
  }
}

function checkExample() {
  if (check()) {
    alert("Верно");
    result.value = null;
    generateExample();
  } else {
    alert("Неверно");
  }
}

function check() {
  const a = parseInt(arg_a.textContent);
  const b = parseInt(arg_b.textContent);
  const op = math_op.textContent;

  console.log(`calculate: ${calculate(op, a, b)}`);

  return calculate(op, a, b) === parseInt(result.value);
}

function getRand(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getRandomOperator() {
  const operators = ["+", "-", "/", "*"];
  return operators[getRand(0, operators.length)];
}

function generateExample() {
  let a = getRand(100, 1000);
  math_op.textContent = getRandomOperator();
  if (math_op.textContent == "/") {
    let b = getRand(1, 10);
    a -= a % b;
    arg_b.textContent = b;
  } else if (math_op.textContent == "+" || math_op.textContent == "-") {
    arg_b.textContent = getRand(100, 1000);
  } else {
    arg_b.textContent = getRand(0, 10);
  }
  arg_a.textContent = a;
}

generateExample();
