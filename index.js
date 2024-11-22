/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string
let tongueTwister =
  s1 +
  " " +
  s2 +
  " " +
  s3 +
  " " +
  s4 +
  " " +
  s5 +
  " " +
  s3 +
  " " +
  s2 +
  " " +
  s1 +
  " " +
  s4;

// Print out the concatenated string
console.log(tongueTwister);

/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings

let part1Slice = part1.slice(-1);
let part2Slice = part2.slice(-1);
let part1Slice2 = `jav${part1Slice.toUpperCase()}`;
let part2Slice2 = `scrip${part2Slice.toUpperCase()}`;
let result = `${part1Slice2} ${part2Slice2}`;
console.log(result);

// Print the cameLtaiL-formatted string

/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;
const tip = 15;

// Calculate the tip (15% of the bill total)
function getTip() {
  let tipAmount = (billTotal * tip) / 100;
  return tipAmount;
}
// Print out the tipAmount
console.log(getTip(billTotal, tip));
/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// Generate a random integer between 1 and 10 (inclusive)
let max = 11;
// Print the generated random number
console.log(getRandomInt(max));
/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b; // false

const expression2 = a || b; // true

const expression3 = !a && b; // false

const expression4 = !(a && b); // true

const expression5 = !a || !b; // true

const expression6 = !(a || b); // false

const expression7 = a && a; // true

console.log(expression1);
console.log(expression2);
console.log(expression3);
console.log(expression4);
console.log(expression5);
console.log(expression6);
console.log(expression7);
