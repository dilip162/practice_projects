const input = document.querySelector("#teleInput");
const content = document.querySelector("#content");

let prevVal = "";
input.addEventListener("input", (e) => {
  let inputVal = e.target.value;

  if (/\d+$/g.test(inputVal)) {
    input.value = inputVal;
  } else {
    input.value = inputVal.substring(0, inputVal.length - 1);
  }

  if (inputVal.length === 4 && prevVal.length < inputVal.length) {
    input.value = `+(${inputVal.substring(0, 3)}) - ${
      inputVal[inputVal.length - 1]
    }`;
  } else if (inputVal.length === 9 && prevVal.length > inputVal.length) {
    input.value = inputVal.substring(2, 5);
  }

  prevVal = inputVal;
});
