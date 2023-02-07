const arg_a = document.getElementById("argument_a");
const arg_b = document.getElementById("argument_b");
const math_op = document.getElementById("math_operation");
const result = document.getElementById("example_result");
const corAnsw = document.getElementById("correct_answer");
const attempts = document.getElementById("attempts_counter");
const modalWindow = document.getElementById("modal_window");
const closeButton = document.querySelector(".modal_btn");
const modalWindOverlay = document.querySelector("modal_overlay");
const titleModal = document.getElementById("modal_title");
const imgModal = document.getElementById("modal_image");

closeButton.addEventListener("click", () => {
  modalWindow.classList.remove("is-open");
});

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

let attemptsCounter = 0;
let correctAnswers = 0;

function checkExample() {
  attemptsCounter++;
  const res = check();
  showResultAnswer(res);
  if (res) {
    correctAnswers++;
    result.value = null;
    generateExample();
  }
  corAnsw.textContent = correctAnswers;
  attempts.textContent = attemptsCounter;
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
  } else if (math_op.textContent == "-") {
    let b = getRand(100, 1000);
    if (b > a) {
      [a, b] = [b, a];
    }
    arg_b.textContent = b;
  } else if (math_op.textContent == "+") {
    arg_b.textContent = getRand(100, 1000);
  } else {
    arg_b.textContent = getRand(0, 10);
  }
  arg_a.textContent = a;
}

function showResultAnswer(result) {
  console.log(`img.src: ${imgModal.src}`);
  if (result) {
    titleModal.textContent = "Молодец! Правильный ответ!";
    imgModal.src = "./images/super.gif";
    closeButton.textContent = "Следуйщий пример";
  } else {
    titleModal.textContent = "Неправильный ответ. Подумай ещё!";
    imgModal.src = "./images/sad.gif";
    closeButton.textContent = "Вернуться к примеру";
  }
  modalWindow.classList.add("is-open");
}

generateExample();
