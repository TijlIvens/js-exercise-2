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
  currentCount++;

  setCount(currentCount);
});

minusButton.addEventListener("click", () => {
  currentCount--;

  setCount(currentCount);
});

resetButton.addEventListener("click", () => {
  currentCount = 0;

  setCount(currentCount);
});
