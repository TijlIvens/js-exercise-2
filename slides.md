---
theme: seriph

background: https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2

class: "text-center"
highlighter: shiki
lineNumbers: false
info: |
  ## JavaScript course
  Starter course for JavaScript

  Exercises
drawings:
  persist: false
favicon: '/favicon.ico'
css: unocss
---

# Interactive webapps

## A guide to JavaScript

<p class="color-stone-400">Exercises</p>

---

# Exercise: Counter app

- Open the [start project](/counter/SetupCounter.zip)
- Run `npm install` in the root of the project
- Run `npm run start` in the root of the project to spin up the server
- The html, css is already written for this project
- Complete the index.js file to make it a functioning Counter app


---

# Overview of the app

- A user sees a counter 
- The value can be changed by clicking + or -
- The user can set a value by entering it in the input
- The value will be stored in local storage

---

# Counter: Part 1

- Store the current count in a global variable
- Add a function: `saveCount` with input parameter: count
- This function saves the count in localStorage
- Add a function: `setCount` with input parameter: count
- This function will update the counter on screen to have the value of it's input
- After that is calls `saveCount` with the count value
- When the + button is clicked the global count will be increased by 1 then the `setCount` function will be called
- Implement the - button the same way
- The reset button is similar but there the count will be set to 0

[Solution](/counter/part1.js)

---

# Counter: Part 2

- Save the input in a global variable every time it changes
- Add a function: `clearInput`
- This function will clear the input text, the global variable of the input text and the alert text
- When the set button is clicked the following happens: 
- Check if the input was a number
- If the input was not a number, the alertText should show: `Enter a number!`
- If it was a number the number can be stored in the global counter (make sure the count is an integer)
- Call the `clearInput` function
- Call `setCount`

[Solution](/counter/part2.js)

---

# Counter: Part 3

- Add a function `setInitialCount`
- Implement it so it sets the counter from localStorage
- Call it on startup
- Make sure it also works when localStorage is empty

[Solution](/counter/part3.js)

---

# Exercise: ToDo app

- Open the [start project](/ToDo/ToDoStart.zip)
- Run `npm install` in the root of the project
- Run `npm run start` in the root of the project to spin up the server
- The html, css is already written for this project
- Complete the index.js file to make it a functioning ToDo app

---

# Overview of the app

- A user inputs the todo text in the input
- When clicked on the Add button: 
  - The Text will be added to the list in its own element
  - The input of the user will be cleared
  - The input will be stored in localStorage
- After each item in the list there will be an X button to remove the item from the list and from the local storage
- When the app loads in, the items will be fetched from localStorage and added to the list on the screen

---

# ToDo: Part 1

- Store the input of the user in a global variable everytime it changes
- Add a function: `addTodoItemToDom` this function gets text as an input parameter
- The function will create 3 elements: `div`, `p`, `button`
- The div gets the className: `todoBox`,
- The p element displays the text parameter
- The button has X as text to display
- The p and button element will be inside the div element
- The div element will be added to the list, so the user sees the list item
- The `addTodoItemToDom` will be called when the user clicks on the Add button

[Solution](/ToDo/part1.js)

---

# ToDo: Part 2

- Add a function: `saveItem` that gets the inputText as input parameter
- Add the item to localStorage
- Save all items under the `listItems` key
- Separate all items with `_`
- Call the `saveItem` function when the Add button is clicked
- Add a function: `clearInput`
- The function clears the input of the user
- That function will be called when the user clicks the Add button

[Solution](/ToDo/part2.js)

--- 

# ToDo: Part 3

- Add a function `loadSavedItems`
- The function gets the items from localStorage and adds them to the list
- Use the `addTodoItemToDom` to add the items

[Solution](/ToDo/part3.js)

---

# ToDo: Part 4

- Add a function: `handleRemove` with 3 input parameters: a remove button element, the item div element, item text
- The function adds a handler that triggers a new function when the remove button is clicked: `onRemoveItem`
- This function has2 input parameters: the item div element, item text
- It removes the div element form the screen
- It removes the item out of localStorage, by comparing the text with the texts in localStorage

[Solution](/ToDo/part4.js)

---

# Exercise: Calculator app

- Open the [start project](/calculator/CalculatorStart.zip)
- Run `npm install` in the root of the project
- Run `npm run start` in the root of the project to spin up the server
- The html, css is already written for this project
- Complete the index.js file to make it a functioning Calculator app

---

# Overview of the app

- A user can input 2 numbers
- When an operation is clicked the calculation will be done and shown in the history
- A history of all results will be shown and saved for when the page reloads
- With the reset button everything will be cleared

---

# Calculator: Part 1

- When the clear button is pressed the corresponding input should be cleared
- Create a function for each operation that gets the 2 inputs as parameters and returns the correct result

[Solution](/calculator/part1.js)

---

# Calculator: Part 2

- Create a function `saveResult` that gets a result as parameter and saves it in `localStorage`
- Separate the different items in storage by a `-`
- Make sure the code will still work when there is no data in `localStorage`

[Solution](/calculator/part2.js)

---

# Calculator: Part 3

- Create a function `showInHistory` that gets a result as parameter and shows the result in the history list
- Every history item is a `p` tag with the result as text
- Create a function `handleResult` that gets a result as parameter the function will round the result to show max 2 digits after the comma
- The `showInHistory` and `saveResult` functions should be called with the rounded result
- It should also show the result in the result text

[Solution](/calculator/part3.js)

---

# Calculator: Part 4

- Implement the 4 calculate buttons
- Every button should call the corresponding calculate function and then pass the result to `handleResult`
- When the rest button is clicked the localStorage should be cleared, the history list and result should be empty and both inputs should be cleared
- Make sure the history list is loaded from `localStorage` when the page reloads

[Solution](/calculator/part4.js)