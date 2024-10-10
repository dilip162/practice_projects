const input = document.querySelector("#input");
const lower = document.querySelector(".lower");
const upper = document.querySelector(".upper");
const camel = document.querySelector(".camel");
const pascal = document.querySelector(".pascal");
const snake = document.querySelector(".snake");
const kebab = document.querySelector(".kebab");
const trim = document.querySelector(".trim");

function capatilize(str) {
  if (str !== "") {
    return str[0].toUpperCase() + str.slice(1, str.length);
  }
}

function camelCase(str) {
  let lowerStr = str.toLowerCase();
  let strArr = lowerStr.split(" ");

  let ansStr = strArr.map((item, i) => {
    if (i == 0) return item;
    return capatilize(item);
  });
  return ansStr.join("");
}

function pascalCase(str) {
  const strArr = str.toLowerCase().split(" ");
  const and = strArr.map((item) => {
    if (item !== "") {
      return item[0].toUpperCase() + item.slice(1, item.length);
    }
  });
  return and.join("");
}

let inputVal;
input.addEventListener("keyup", (e) => {
  inputVal = e.target.value;

  lower.innerText = inputVal.toLowerCase();
  upper.innerText = inputVal.toUpperCase();
  camel.innerText = camelCase(inputVal);
  pascal.innerText = pascalCase(inputVal);

  snake.innerText = inputVal.split(" ").join("_");
  kebab.innerText = inputVal.split(" ").join("-");

  trim.innerText = inputVal.split(" ").join("");
});

pascalCase("Hello I am going For the Vacation");
