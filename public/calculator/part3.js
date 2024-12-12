const numberInput1 = document.getElementById("numberInput1");
const numberInput2 = document.getElementById("numberInput2");
const clearButton1 = document.getElementById("clearButton1");
const clearButton2 = document.getElementById("clearButton2");
const addButton = document.getElementById("addButton");
const subtractButton = document.getElementById("subtractButton");
const multiplyButton = document.getElementById("multiplyButton");
const divideButton = document.getElementById("divideButton");
const resultOutput = document.getElementById("resultOutput");
const historyList = document.getElementById("historyList");
const resetButton = document.getElementById("resetButton");

const SPLIT_CHAR = "-";

clearButton1.addEventListener("click", () => {
  numberInput1.value = "";
});

clearButton2.addEventListener("click", () => {
  numberInput2.value = "";
});

const add = (num1, num2) => {
  return num1 + num2;
};

const subtract = (num1, num2) => {
  return num1 - num2;
};

const multiply = (num1, num2) => {
  return num1 * num2;
};

const divide = (num1, num2) => {
  return num1 / num2;
};

const saveResult = (result) => {
  const previousHistoryString = localStorage.getItem("history");

  const newHistoryList = previousHistoryString
    ? previousHistoryString + SPLIT_CHAR + result
    : result;

  localStorage.setItem("history", newHistoryList);
};

const showInHistory = (result) => {
  const historyItem = document.createElement("p");
  historyItem.innerText = result;
  historyList.appendChild(historyItem);
};

const handleResult = (result) => {
  const roundedResult = Math.round(result * 100) / 100;

  resultOutput.innerText = roundedResult;
  showInHistory(roundedResult);
  saveResult(roundedResult);
};
