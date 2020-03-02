// Create object
const taskList = {};

// Counter
let counter = 0;

// Prompt for a list item
let item = prompt("Please enter an item");

// Check for empty response
while (!item) {
  item = prompt("Please add at least one character.");
}

// Increment
counter++;

// Add item to object
taskList["counter"] = item;

// TODO: Add a function to repeat the code. addButton()
