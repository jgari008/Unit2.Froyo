// The user is prompted for froyo flavors upon entering the website.
let userInputFlavors = prompt("Choose your flavors:");

// The user's input string is split into an array of strings.
const flavorsArray = userInputFlavors.split(",");

console.log(flavorsArray);

// A loop is used to iterate through the array of flavors.
let countVanilla = 0;
let countStrawberry = 0;
let countCoffee = 0;
for (let i = 0; i < flavorsArray.length; i++) {
  if (flavorsArray[i] === "vanilla") {
    countVanilla++;
  }
  if (flavorsArray[i] === "strawberry") {
    countStrawberry++;
  }
  if (flavorsArray[i] === "coffee") {
    countCoffee++;
  }
}

console.log(countVanilla);
console.log(countStrawberry);
console.log(countCoffee);

// An object is used to keep count of how many orders there are of each flavor.
const flavorsObj = {};
flavorsObj.flavor = flavorsArray;
flavorsObj.vanilla = countVanilla;
flavorsObj.strawberry = countStrawberry;
flavorsObj.coffee = countCoffee;

console.log(flavorsObj);
console.table(flavorsObj);
