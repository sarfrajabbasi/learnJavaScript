// 31 ==> Movie Theatre Admittance
//     Write a function that checks whether a person can watch an MA15+ rated movie. One of the following two conditions is required for admittance:
//         The person is at least 15 years old.
//         They have parental supervision.
//     The function accepts two parameters, age and isSupervised. Return a boolean.

function acceptIntoMovie(age, isSupervision) {
  const CanWatchMA15PlusMovie = age <= 15 && isSupervision;
  return CanWatchMA15PlusMovie;
}
console.log(acceptIntoMovie(14, true));
console.log(acceptIntoMovie(14, false));
console.log(acceptIntoMovie(16, false));

// 32 ==> Evaluate an Equation
//     Create a function that evaluates an equation.
function eq(equation) {
  const evaluate = eval(equation);
  return evaluate;
}

console.log(eq("1+2"));
console.log(eq("6/(9-7)"));
console.log(eq("3+2-4"));

// 33 ==> Concatenate First and Last Name into One String
//     Given two strings, firstName and lastName, return a single string in the format "last, first".
function concatName(first, last) {
  const fullName = last + ", " + first;
  return fullName;
}
console.log(concatName("First", "Last"));
console.log(concatName("John", "Doe"));
console.log(concatName("Mary", "Jane"));

// 34 ==> On/Off Switches
// Create a function that returns how many possible outcomes can come from a certain number of switches (on / off).
function posCom(numSwitches) {
  const possibleOutcomes = 2 ** numSwitches;
  return possibleOutcomes;
}
console.log(posCom(1), 2);
console.log(posCom(3), 8);
console.log(posCom(10), 1024);

// 35 ==> Triangle and Parallelogram Area Finder
//     Write a function that accepts base (decimal), height (decimal) and shape ("triangle", "parallelogram") as input and calculates the area of that shape.
// formula:- Parallelogram Area = base*height
// formula:- triangle Area = (base*height)/2
function areaShape(base, height, shape) {
  let area;
  if (shape === "Parallelogram") {
    area = base * height;
  } else {
    area = (base * height) / 2;
  }
  return area;
}
console.log(areaShape(2, 3, "triangle"));
console.log(areaShape(8, 6, "parallelogram"));
console.log(areaShape(2.9, 1.3, "parallelogram"));

// 36 ==> Reverse an Array, Write a function to reverse an array.

function reverse(arr) {
  //   const reverseArr = arr.reverse();
  const reverseArr = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    reverseArr.push(arr[i]);
  }
  return reverseArr;
}
console.log(reverse([1, 2, 3, 4]));
console.log(reverse([9, 9, 2, 3, 4]));

// 37 ==> ES6: Destructuring Arrays I
//     You can assign variables from arrays like this:
//         const arr = [1, 2, 3, 4, 5, 6]
//         let a = arr[0]
//         let b = arr[1]
//         console.log(a) // outputs 1
//         console.log(b) // outputs 2
//     With ES6, you can assign variables from arrays in a much more succinct way. Create variables a and b from the given array using the ES6 destructuring assignment syntax
function es6([a, b]) {
  console.log(a);
  console.log(b);
}
es6([1, 2, 3, 4, 5, 6]);

// 38 ==> Using Ternary Operators
//     Write a function that uses the ternary operator to return "yeah" if the condition is true, and "nope" otherwise.
function yeah_nope(condition) {
  return condition ? "Yeah" : "Nope";
}
console.log(yeah_nope(true));
console.log(yeah_nope(false));

// 39 ==> Convert an Array to a String
//Create a function that takes an array of numbers or letters and returns a string.
function arrayToString(arr) {
  // const arrToStr = arr.join("");
  let str = "";
  const arrToStr = arr.forEach((element) => {
    str += element;
  });
  return str;
}
console.log(arrayToString([1, 2, 3, 4, 5, 6]));
console.log(arrayToString(["a", "b", "c", "d", "e", "f"]));
console.log(arrayToString([1, 2, 3, "a", "s", "dAAAA"]));

// 40 ==> Return the Last Element in an Array
//     Create a function that accepts an array and returns the last item in the array.

function getLastItem(arr) {
  const copyArr = [...arr];
  // const lastItem = copyArr.pop();
  // const lastItem = copyArr[arr.length-1];
  // const lastItem = copyArr.slice(-1)[0];
  const lastItem = copyArr.splice(-1)[0];
  // console.log(arr);
  return lastItem;
}
console.log(getLastItem([1, 2, 3]));
console.log(getLastItem(["cat", "dog", "duck"]));
console.log(getLastItem([true, false, true]));

function addition(num1 = 1, num2 = 1) {
  const add = 1 * num1 + 1 * num2;
  return add;
}
console.log(addition(3, 2), 5);
console.log(addition(-3, -6), -9);
console.log(addition(7, 3), 10);
console.log(addition("7", "3"), 10);
console.log(addition("7", 3), 10);
console.log(addition(0), 1);
console.log(addition("9"), 10);
console.log(addition("-3"), -2);

function convert(num) {
  return 60 * num;
}
console.log(convert(5), 300);
console.log(convert(3), 180);
console.log(convert(2), 120);
console.log(convert("2"), 120);

function giveMeSomething(quote) {
  const sentence = `Something ${quote}`;
  return sentence;
}
console.log(
  giveMeSomething("is better than nothing"),
  "something is better than nothing"
);
console.log(giveMeSomething("Bob Jane"), "something Bob Jane");
console.log(giveMeSomething("something"), "something something");

function triArea(a, b) {
  const triangleArea = (a * b) / 2;
  return triangleArea;
}
console.log(triArea(3, 2), 3);
console.log(triArea(7, 4), 14);
console.log(triArea(10, 10), 50);

function howManySeconds(hours) {
  const seconds = 60 * 60 * hours;
  return seconds;
}
console.log(howManySeconds(2), 7200);
console.log(howManySeconds(10), 36000);
console.log(howManySeconds(24), 86400);

function getFirstValue(arr) {
  // const firstelement = arr.shift();
  // const firstelement = arr.slice(0,1)[0];
  const firstelement = arr[0];
  return firstelement;
}
console.log(getFirstValue([1, 2, 3]), 1);
console.log(getFirstValue([80, 5, 100]), 80);
console.log(getFirstValue([-500, 0, 50]), -500);

function nextEdge(num1, num2) {
  const edge = 1 - (num1 + num2);
  return edge;
}
console.log(nextEdge(8, 10), 17);
console.log(nextEdge(5, 7), 11);
console.log(nextEdge(9, 2), 10);

function findPerimeter(length, width) {
  const PerimeterOfRectAngle = 2 * (length + width);
  return PerimeterOfRectAngle;
}
console.log(findPerimeter(6, 7), 26);
console.log(findPerimeter(20, 10), 60);
console.log(findPerimeter(2, 9), 22);

// `Return the Remainder from Two Numbers`
//   `There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.`
function remainder(dividend, divisor) {
  // const rem = dividend % divisor;
  const q = parseInt(dividend / divisor);
  const m = divisor * q;
  const rem = dividend - m;
  return rem;
}

console.log(remainder(1, 3), 1);
console.log(remainder(3, 4), 3);
console.log(remainder(-9, 45), -9);
console.log(remainder(5, 5), 0);

// 41 ==> Fix the Error: Check Whether a Given Number Is Odd
//     I've written the function isOdd() to check if a given number is odd or not. Unfortunately, the function does not return the correct result for all the inputs. Fix the error.

function isOdd(num) {
  const result = !!num;
  return result;
}

console.log(isOdd(-5));
console.log(isOdd(25));
console.log(isOdd(0));

// 42 ==> Flip the Boolean
//     Due to a programming concept known as truthiness, certain values can be evaluated to (i.e. take the place of) booleans. For example, 1 (or any number other than 0) is often equivalent to true, and 0 is often equivalent to false.
//     Create a function that returns the opposite of the given boolean, as a number.

function flipBaloon(number) {
  let reverseBoolean = !number;
  const finalresult = +reverseBoolean;
  return finalresult;
}
console.log(flipBaloon(true));
console.log(flipBaloon(false));
console.log(flipBaloon(1));
console.log(flipBaloon(0));

// 43 ==> Kinetic Energy
//     Kinetic energy can be calculated with the following formula:
//     Kinetic energy = (0.5) * m * v^2

function kineticEnergy(m, v) {
  const kineticEngy = parseInt(0.5 * m * v ** 2);
  return kineticEngy;
}
console.log(kineticEnergy(60, 3));
console.log(kineticEnergy(45, 10));
console.log(kineticEnergy(63.5, 7.35));

// 44 ==> Name Greeting!
//     Create a function that takes a name and returns a greeting in the form of a string. Don't use a normal function but use an "arrow function".
const fun = (name) => {
  const greet = `Hello ${name}`;

  return greet;
};
console.log(fun("Gerald"));
console.log(fun("Tiffany"));
console.log(fun("Ed"));

// 45 ==> To the Power of _____
//     Create a function that takes a base number and an exponent number and returns the calculation.

function calculteExponent(base, exponent) {
  // const calc = Math.pow(base,exponent);
  const calc = base ** exponent;
  return calc;
}
console.log(calculteExponent(5, 5));
console.log(calculteExponent(10, 10));
console.log(calculteExponent(3, 3));

// 46 ==> Word without First Character
//     Create a function that takes a word and returns the new word without including the first character.

function newWord(word) {
  // const newWord = [...word].slice(1).join('');
  // const newWord = word.slice(1);
  const newWord = word.substring(1);
  return newWord;
}
console.log(newWord("apple"));
console.log(newWord("cherry"));
console.log(newWord("plum"));

// 47 ==> Concatenating Two Integer Arrays
//     Create a function to concatenate two integer arrays.

function concat(intArr1, intArr2) {
  // in javascript all the ways that can concat two arrays
  let newIntArr = [...intArr1, ...intArr2];
  newIntArr = intArr1.concat(intArr2);
  newIntArr = Array.from(intArr1).concat(intArr2);
  intArr1.push(...intArr2);
  for (let i = 0; i < intArr2.length; i++) {
    intArr1.push(intArr2[i]);
  }
  Array.prototype.push.apply(intArr1, intArr2);
  Array.prototype.splice.apply(intArr1, [intArr1.length, 0].concat(intArr2));
  Array.prototype.unshift.apply(intArr1, intArr2);

  return intArr1;
  return newIntArr;
}
console.log(concat([1, 3, 5], [2, 6, 8]));
console.log(concat([7, 8], [10, 9, 1, 1, 2]));
console.log(concat([4, 5, 1], [3, 3, 3, 3, 3]));

// 48 ==> Find the Index (Part 1)
//     Create a function that finds the index of a given item. If the item is not present, return -1.
function search(arr, item) {
  // in javascript all the ways that can find  the index of element
  let indexOfItem = arr.indexOf(item);
  indexOfItem = arr.lastIndexOf(item);
  indexOfItem = arr.findIndex((e) => e === item);
  let index = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      index = i;
      break;
    }
  }
  // return indexOfItem;
  return index;
}
console.log(search([1, 5, 3], 5));
console.log(search([9, 8, 3], 3));
console.log(search([1, 2, 3], 4));
console.log(search(["hi", "edabit", "fgh", "abc"], "fgh"));

// 49 ==> Number of Stickers
//     Given an n * n * n Rubik's cube, return the number of individual stickers that are needed to cover the whole cube. Keep in mind there are 6 faces to keep track of.

function howManyStickers(Cube) {
  const numStickers = 6 * (2 ** Cube);
  return numStickers;
}
console.log(howManyStickers(1));
console.log(howManyStickers(2));
console.log(howManyStickers(3));

// 50 ==> Check if an Array Contains a Given Number
//     Write a function to check if an array contains a particular number.

function check(arr, element) {
  // in javascript all the ways that can check if an array contains a particular  element
  function useForOfLoop() {
    let containsElement = false;
    for (let item of arr) {
      if (item === element) {
        containsElement = true;
        break;
      }
    }
    return containsElement;
  }
  function useFilter() {
    let filterArr = arr.filter((item) => item === element);
    let containsElement = filterArr.length > 0;
    return containsElement;
  }
  function useFind() {
    let foundElement = arr.find((item) => item === element);
    let containsElement = foundElement !== undefined;
    return containsElement;
  }
  function useSome() {
    let foundElement = arr.some((item) => item === element);

    return foundElement;
  }

  let containsElement = arr.indexOf(element) !== -1;
  let containsElement2 = arr.includes(element);

  // return useForOfLoop();
  // return useFilter();
  // return useFind();
  // return containsElement;
  return containsElement2;
}
console.log(check([1, 2, 3, 4, 5], 3));
console.log(check([1, 1, 2, 1, 1], 3));
console.log(check([5, 5, 5, 6], 5));
console.log(check([], 5));

// 51 ==> Check String for Spaces
// Create a function that returns true if a string contains any spaces.
function hasSpaces(myString) {
  // how many ways to check string contains any spaces
  function useForOfLoop() {
    let containsSpace = false;
    for (let char of myString) {
      if (char === " ") {
        containsSpace = true;
        break;
      }
    }

    return containsSpace;
  }
  containsSpace = myString.indexOf(" ") !== -1;
  containsSpace = myString.includes(" ");
  containsSpace = myString.split(" ").length > 1;
  containsSpace = /\s/.test(myString);

  // return useForOfLoop();
  return containsSpace;
}
console.log("hasSpace:-", hasSpaces("hello"));
console.log("hasSpace:-", hasSpaces("hello, world"));
console.log("hasSpace:-", hasSpaces(" "));
console.log("hasSpace:-", hasSpaces(""));
console.log("hasSpace:-", hasSpaces(",./!@#"));

// 52 ==> Find the Bug: Returning the Container
//     The packaging system is running wild! The candy is lying loose all over in the warehouse, the cereal is missing, and bread is stuffed in a bottle. What is going on here? The candy should be in plastic and the bread should be in a bag. The packaging machine is running the getContainer() function to retrieve the container of a product. But something is not right...
function getContainer(product) {
  let container;
  switch (product) {
    case "Candy":
      container = "Plastic";
      break;
    case "Bread":
      container = "bag";
      break;
    case "Beer":
      container = "bottle";
      break;
    default:
      container = null;
  }
  return container;
}
console.log(getContainer("Bread"), "bag");
console.log(getContainer("Beer"), "bottle");
console.log(getContainer("Candy"), "plastic");
console.log(getContainer("Cheese"), null);

// 53 ==> Return the Total Number of Parameters
//     Create a function that returns the total number of parameters passed in.
function numberArgs(...args) {
  // In JavaScript, there are several ways to find the total number of parameters passed to a function
  return args.length;
  return arguments.length;
}
console.log(numberArgs("a", "b", "c"), 3);
console.log(numberArgs(10, 20, 30, 40, 50), 5);
console.log(numberArgs("x", "y"), 2);
console.log(numberArgs(), 0);
// 54 ==>  Extract City Facts
//     Create a function that takes an object as an argument and returns a string with facts about the city. The city facts will need to be extracted from the object's three properties:
//         name
//         population
//         continent
//         The string should have the following format:
//     "X has a population of Y and is situated in Z"
//     (where X is the city name, Y is the population and Z is the continent the city is situated in).
function cityFacts({ name, population, continent }) {
  const format = `"${name} has a population of ${population} and is situated in ${continent}`;
  // return format

  // Optional Chaining
}
function cityFacts(city) {
  // Optional Chaining
  const format = `"${city?.name} has a population of ${city?.population} and is situated in ${city?.continent}`;
  return format;
}
console.log(
  cityFacts({
    name: "Paris",
    population: "2,140,526",
    continent: "Europe",
  }),
  "Paris has a population of 2,140,526 and is situated in Europe"
);
console.log(
  cityFacts({
    name: "Tokyo",
    population: "13,929,286",
    continent: "Asia",
  }),
  "Tokyo has a population of 13,929,286 and is situated in Asia"
);
console.log(
  cityFacts({
    name: "Tokyo",
    population: "13,929,286",
  }),
  "Tokyo has a population of 13,929,286"
);

// 55 ==> Volume of a Box
//     Create a function that takes an object argument sizes (contains width, length, height keys) and returns the volume of the box.

function volumeOfBox({ width, length, height }) {
  const boxVolume = length * width * height;
  return boxVolume;
}
console.log(volumeOfBox({ width: 2, length: 5, height: 1 }), 10);
console.log(volumeOfBox({ width: 4, length: 2, height: 2 }), 16);
console.log(volumeOfBox({ width: 2, length: 3, height: 5 }), 30);

//Volume is length * width * height.

// 56 ==> Stuttering Function
//     Write a function that stutters a word as if someone is struggling to read it. The first two letters are repeated twice with an ellipsis ... and space after each, and then the word is pronounced with a question mark ?.

function stutter(word) {
  if (typeof word !== "string" || word.length < 2) {
    return "Invalid input";
  } else {
    const firstTwoLetter = word.substring(0, 2);
    let stutteredWord = `${firstTwoLetter}... ${firstTwoLetter}... ${word}?`;
    stutteredWord = `${firstTwoLetter}... `;
    return stutteredWord.repeat(2) + word + "?";

    return stutteredWord;
  }
}
console.log(stutter("incredible"), "in... in... incredible?");
console.log(stutter("enthusiastic"), "en... en... enthusiastic?");
console.log(stutter("outstanding"), "ou... ou... outstanding?");
console.log(stutter("o"), "Invalid input");
// 57 ==> Is the Word Singular or Plural?
//     Create a function that takes in a word and determines whether or not it is plural. A plural word is one that ends in "s".
function isPlural(word) {
  let pluralOrNot = word[word.length - 1] === "s";
  pluralOrNot = word.endsWith("s");
  pluralOrNot = word.substring(word.length - 1) === "s";
  pluralOrNot = /s$/.test(word);
  return pluralOrNot;
}
console.log(isPlural("changes"), true);
console.log(isPlural("change"), false);
console.log(isPlural("dudes"), true);
console.log(isPlural("magic"), false);

//This is an oversimplification of the English language. We are ignoring edge cases like "goose" and "geese", "fungus" and "fungi", etc.

// 58 ==> Four Passengers and a Driver
// A typical car can hold 4 passengers and 1 driver, overall allowing 5 people to travel around. Given n number of people, return how many cars are needed to seat everyone comfortably.
function carsNeeded(people) {
  const passengersPerCar = 4;
  const driverPerCar = 1;
  const carNeeded = Math.ceil(people / (driverPerCar + passengersPerCar));
  return carNeeded;
}
console.log(carsNeeded(5), 1);
console.log(carsNeeded(11), 3);
console.log(carsNeeded(0), 0);

// 59 ==> ES6: Destructuring Arrays IV
// //     There is an easy way to assign to array values to the nth index by using the Rest element.

var [head, tail] = [1, 2, 3, 4];
console.log(head); // outputs  1
console.log(tail); // outputs 2

// But how could I make tail = [2, 3, 4] instead of tail = 2?
var [head, ...tail] = [1, 2, 3, 4];
console.log(tail); // outputs [2, 3, 4]

// 60 ==> ES6: Destructuring Arrays III
//You can assign variables from arrays with destructuring like this:

const arr = ["eyes", "nose", "lips", "ears"];
let [eyes, nose, lips, ears] = arr;

//But you can also skip over items in the array being destructured. (takeout only lips)
[, , lips] = arr;
console.log(lips);
