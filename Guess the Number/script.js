const form = document.querySelector("form");
const input = document.querySelector("#input");
const hintMsg = document.querySelector("#hint");
const allGuess = document.querySelector("#allGuess");
const gameStartBtn = document.querySelector("#gameStart");
const submitBtn = document.querySelector("#submitBtn");
const attempts = document.querySelector("#attempts");

(function () {
  let luckyNum = Math.round(Math.random() * 100);
  const guesses = [];

  function resetInput() {
    input.value = "";
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputVal = parseInt(input.value);

    if (inputVal) {
      if (inputVal > luckyNum) {
        hintMsg.innerText = "Too high!";
      } else if (inputVal < luckyNum) {
        hintMsg.innerText = "Too low!";
      } else {
        hintMsg.innerText = "You Win!!";
        submitBtn.disabled = true;
        gameStartBtn.disabled = false;
      }

      guesses.push(inputVal);

      if (guesses.length > 0) {
        gameStartBtn.disabled = false;
        allGuess.innerText = "Your guesses : " + guesses.join(", ");
        attempts.innerText = "Number of attempts : " + guesses.length;
      }
    } else {
      hintMsg.innerText = "Please enter any number";
    }

    resetInput();
  });

  gameStartBtn.addEventListener("click", () => {
    guesses.length = 0;
    hintMsg.innerText = "";
    allGuess.innerText = "";
    attempts.innerText = "";
    gameStartBtn.disabled = true;
    submitBtn.disabled = false;
    luckyNum = Math.round(Math.random() * 100);
  });
})();
