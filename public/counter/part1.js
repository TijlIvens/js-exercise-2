const plusButton = document.getElementById("plusButton");
const minusButton = document.getElementById("minusButton");
const resetButton = document.getElementById("resetButton");
const counterText = document.getElementById("counterText");

let currentCount = 0;

const setCount = (count) => {
  counterText.innerText = count;

  saveCount(count);
};

const saveCount = (count) => {
  localStorage.setItem("count", count);
};

plusButton.addEventListener("click", () => {
  count++;

  setCount(count);
});

minusButton.addEventListener("click", () => {
  count--;

  setCount(count);
});

resetButton.addEventListener("click", () => {
  count = 0;

  setCount(count);
});
