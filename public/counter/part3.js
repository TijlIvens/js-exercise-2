const plusButton = document.getElementById("plusButton");
const minusButton = document.getElementById("minusButton");
const resetButton = document.getElementById("resetButton");
const counterText = document.getElementById("counterText");
const counterInput = document.getElementById("input");
const setButton = document.getElementById("formButton");
const alertText = document.getElementById("alertText");

let currentCount = 0;

let inputText = "";

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

counterInput.addEventListener("input", (event) => {
  inputText = event.target.value;
});

const clearInput = () => {
  inputText = "";
  counterInput.value = "";
  alertText.innerText = "";
};

setButton.addEventListener("click", () => {
  if (inputText === "" || isNaN(inputText)) {
    alertText.innerText = "Enter a number!";

    return;
  }

  currentCount = parseInt(inputText);
  counterText.innerText = currentCount;

  clearInput();

  saveCount(currentCount);
});

const setInitialCount = () => {
  const storedCountString = localStorage.getItem("count") ?? 0;
  const storedCount = parseInt(storedCountString);

  currentCount = storedCount;

  setCount(currentCount);
};

setInitialCount();
