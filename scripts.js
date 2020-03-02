/* *********************
 * Global variables
 * *********************/
// Create list
const taskList = {};

// Counter
let counter = 0;

/* *********************
 * "Main" program
 * *********************/
// Test functions
while (counter < 3) {
  addButton();
}

removeButton(0);

// Print list
console.log(taskList);

/* *********************
 * Functions
 * *********************/
function addButton() {
  // Prompt for a list item
  let item = prompt("Please enter an item");

  // Check for empty response
  while (!item) {
    item = prompt("Please add at least one character.");
  }

  // Add item to list
  taskList[counter] = item;

  // Increment
  counter++;
}

function removeButton(s) {
  alert(`"${taskList[s]}" was removed.`);
  delete taskList[s];
}
