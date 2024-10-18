const input = document.querySelector("#teleInput");
const content = document.querySelector("#content");

input.addEventListener("input", (e) => {
  let inputVal = e.target.value;

  if (true) {
    content.innerText = inputVal;
  }
});
