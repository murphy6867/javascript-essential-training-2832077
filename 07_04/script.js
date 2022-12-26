/**
 * Challenge: Build and modify an array
 * - Build an array with 8 items
 * - Remove the last item
 * - Add the last item as the first item on the array
 * - Sort the items by alphabetical order
 * - Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 */
function printArray(arr) {
  for (let i = 0; i < 8; i++) {
    console.log(`sport ${i + 1} : ${arr[i]}`);
  }
}
// Build an array with 8 items
const sport = [
  "basketball",
  "football",
  "swimming",
  "americanfootball",
  "hooky",
  "baseball",
  "vallyball",
  "batminton",
];
console.log("Before use method: ");
console.log(printArray(sport));

// Remove the last item
const removeLastItem = sport.pop();
console.log(`Remove the last item : ${removeLastItem}`);
console.log(printArray(sport));

// Add the last item as the first item on the array
const addLastItem = sport.unshift(removeLastItem);
console.log(`Add last item to first : ${removeLastItem}`);
console.log(printArray(sport));

// Sort the items by alphabetical order
const sortItems = sport.sort();
console.log(`Sorted items by Alphabetical: ${sortItems}`);

// Use the find() method to find a specific item in the array
const findSomething = sport.find((item) => item[0] === "h");
console.log(`Sport that have "H" : ${findSomething}`);

//Remove the item you found using the find method from the array.
const findIndex = sport.findIndex((item) => item[0] === "h");
const removeTofind = sport.splice(findIndex, 1);
console.log(`Remove sport to find ${removeTofind}`);
console.log(printArray(sport));
