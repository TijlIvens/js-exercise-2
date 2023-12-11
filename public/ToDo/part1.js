const addButton = document.getElementById("formButton");
const todoInput = document.getElementById("input");
const todoList = document.getElementById("list");

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

addButton.addEventListener("click", () => {
  addTodoItemToDom(inputText);
});

todoInput.addEventListener("input", (event) => {
  inputText = event.target.value;
});
