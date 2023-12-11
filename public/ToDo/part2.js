const addButton = document.getElementById("formButton");
const todoInput = document.getElementById("input");
const todoList = document.getElementById("list");

const SPLIT_CHAR = "-";

let inputText = "";

const addTodoItemToDom = (text) => {
  const todoBox = document.createElement("div");
  const todoItem = document.createElement("p");
  const todoButton = document.createElement("button");

  todoBox.className = "todoBox";
  todoItem.innerText = text;
  todoButton.innerText = "X";

  todoBox.appendChild(todoItem);
  todoBox.appendChild(todoButton);
  todoList.appendChild(todoBox);
};

const saveItem = (itemText) => {
  const previousListItem = localStorage.getItem("listItems");

  const newSaveText = previousListItem
    ? previousListItem + SPLIT_CHAR + itemText
    : itemText;

  localStorage.setItem("listItems", newSaveText);
};

const clearInput = () => {
  todoInput.value = "";
};

addButton.addEventListener("click", () => {
  addTodoItemToDom(inputText);
  saveItem(inputText);
  clearInput();
});

todoInput.addEventListener("input", (event) => {
  inputText = event.target.value;
});
