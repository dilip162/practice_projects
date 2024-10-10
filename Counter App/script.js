const addBtn = document.querySelector("#add");
const subtractBtn = document.querySelector("#substract");
const result = document.querySelector("#result");
const reset = document.querySelector("#reset");
const input = document.querySelector("#input");

addBtn.addEventListener("click", () => {
  result.innerText = parseInt(result.innerText) + parseInt(input.value);
});

subtractBtn.addEventListener("click", () => {
  result.innerText = parseInt(result.innerText) - parseInt(input.value);
});

reset.addEventListener("click", () => {
  result.innerText = 0;
});
