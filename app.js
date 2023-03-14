const numberWindow = document.querySelector(".numberWindow");
const hint = document.querySelector(".hint");
const score = document.querySelector(".score");
const reset = document.querySelector(".reset");
const check = document.querySelector(".check");
const firework = document.querySelector(".background");

let realNum = Math.trunc(Math.random() * 30 + 1);
let scores = 20;

check.addEventListener("click", function () {
  const guess = Number(document.querySelector(".answer").value);

  console.log(realNum);

  if (!guess) {
    hint.innerHTML = "Hey, please type Number";
    hint.style.color = "red";
  } else if (guess > 30) {
    hint.innerHTML = "Number is not valid";
    hint.style.color = "red";
  } else if (guess < 0) {
    hint.innerHTML = "Number is not valid";
    hint.style.color = "red";
  } else if (guess === realNum) {
    hint.innerHTML = "You win!! ";
    numberWindow.textContent = realNum;
  } else if (guess > realNum) {
    if (scores > 1) {
      hint.innerHTML = "Too high";
      scores--;
      score.textContent = scores;
    } else {
      hint.innerHTML = "Oops, YOU LOST!!! ";
      score.textContent = "0";
    }
  } else if (guess < realNum) {
    if (scores > 1) {
      hint.innerHTML = "Too low";
      scores--;
      score.textContent = scores;
    } else {
      hint.innerHTML = "Oops, YOU LOST!!! ";
      score.textContent = "0";
    }
  }
});

reset.addEventListener("click", function () {
  realNum = Math.trunc(Math.random() * 30 + 1);
  scores = 20;
  score.textContent = scores;
  numberWindow.textContent = "?";
  hint.innerHTML = "Start guessing!";
  document.querySelector(".answer").value = "";
});
