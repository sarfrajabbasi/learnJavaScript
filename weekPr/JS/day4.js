// 61 ==> ES6: Destructuring Objects III
const obj = { two: 2 };
var { one = 1, two } = obj;

console.log(one); // outputs undefined
//     Sometimes an object will be missing properties we are expecting. We can avoid undefined errors by using default values. Use ES6 object destructuring to add a default value of 1 to the one variable. Ignore the .toString() function (used for validation).

// 62 ==> Default Mood
//     Create a function that takes in a current mood and return a sentence in the following format: "Today, I am feeling {mood}". However, if no argument is passed, return "Today, I am feeling neutral".
function moodToday(mood = "neutral") {
  let sentence = `Today, I am feeling ${mood}`;
  sentence =
    mood === undefined
      ? `Today, I am feeling neutral`
      : `Today, I am feeling ${mood}`;
  return sentence;
}
console.log(moodToday("happy"), "Today, I am feeling happy");
console.log(moodToday("sad"), "Today, I am feeling sad");
console.log(moodToday(), "Today, I am feeling neutral");

// 63) ==> Similar Bread
//     Given two arrays, which represent two sandwiches, return whether both sandwiches use the same type of bread. The bread will always be found at the start and end of the array.
//     The lists will always be three elements long. The first piece of bread on one sandwich must be the same as the first piece of bread on the other sandwich. The same goes for the last piece of bread.

function hasSameBread(sandwich1, sandwich2) {
  const checkBothUseSameBread =
    sandwich1.length === 3 &&
    sandwich2.length === 3 &&
    sandwich1[0] === sandwich2[0] &&
    sandwich1[sandwich1.length - 1] === sandwich2[sandwich1.length - 1];
  return checkBothUseSameBread;
}
console.log(
  hasSameBread(
    ["white bread", "lettuce", "white bread"],
    ["white bread", "tomato", "white bread"]
  ),
  true
);
console.log(
  hasSameBread(
    ["brown bread", "chicken", "brown bread"],
    ["white bread", "chicken", "white bread"]
  ),
  false
);
console.log(
  hasSameBread(
    ["toast", "cheese", "toast"],
    ["brown bread", "cheese", "toast"]
  ),
  false
);

// 64 ==> Shapes With N Sides
//     Create a function that takes a whole number as input and returns the shape with that number's amount of sides. Here are the expected outputs to get from these inputs.
//         Inputs   Outputs
//         1        "circle"
//         2        "semi-circle"
//         3        "triangle"
//         4        "square"
//         5        "pentagon"
//         6        "hexagon"
//         7        "heptagon"
//         8        "octagon"
//         9        "nonagon"
//         10       "decagon"

function nSidedShape(num) {
  const WholeNumber = {
    1: "circle",
    2: "semi-circle",
    3: "triangle",
    4: "square",
    5: "pentagon",
    6: "hexagon",
    7: "heptagon",
    8: "octagon",
    9: "nonagon",
    10: "decagon",
  };
  return WholeNumber[num].toLowerCase();
}

console.log(nSidedShape(3), "triangle");
console.log(nSidedShape(1), "circle");
console.log(nSidedShape(9), "nonagon");

//     There won't be any tests with a number below 1 or greater than 10.
//     Return the output in lowercase.
//     The challenge is intended to be completed without conditionals (it would take too long)!

// 65 ==> Multiply Every Array Item by Two
//     Create a function that takes an array with numbers and return an array with the elements multiplied by two.
function getMultipliedArr(arr) {
  const multipliedArr = arr.map((num) => num * 2);
  return multipliedArr;
}
console.log(getMultipliedArr([2, 5, 3]), [4, 10, 6]);
console.log(getMultipliedArr([1, 86, -5]), [2, 172, -10]);
console.log(getMultipliedArr([5, 382, 0]), [10, 764, 0]);

// 66 ==> Burrrrrrrp
//     Create a function that returns the string "Burp" with the amount of "r's" determined by the input parameters of the function.
function longBurp(num) {
  const r = "r";
  const burpStr = `Bu${r.repeat(num)}p`;
  return burpStr;
}
console.log(longBurp(3), "Burrrp");
console.log(longBurp(5), "Burrrrrp");
console.log(longBurp(9), "Burrrrrrrrrp");

// 67 ==> ES6: Destructuring Objects
//     Using basic object destructuring you can assign variables name and email:

// let { name, email } = { name: "John", email: "john@example.com" };

// console.log(name); // "John"
// console.log(email); // "john@example.com"

//     What if there were more properties but you didn't want to write variables for all of them and just wanted to stick them into another object and do something like this:

let { name, email, ...rest } = {
  name: "John",
  email: "john@example.com",
  city: "Phoenix",
  state: "AZ",
  country: "USA",
};
// rest =  { city: "Phoenix", state: "AZ", country: "USA"} // true
console.log(name, email, rest);

// 68 ==> Char-to-ASCII
//     Create a function that returns the ASCII value of the passed in character.

function ctoa(character) {
  if (typeof character !== "string" || character.length !== 1) {
    return "Invalid input";
  }
  return character.charCodeAt(0);
}
console.log(ctoa("A"), 65);
console.log(ctoa("m"), 109);
console.log(ctoa("["), 91);
console.log(ctoa("\\"), 92);

// 69 ==> Free Coffee Cups
//     For each of the 6 coffee cups I buy, I get a 7th cup free. In total, I get 7 cups. Create a function that takes n cups bought and return as an integer the total number of cups I would get.
function totalCups(coffeeCups) {
  const totalNumCups = Math.floor(coffeeCups / 6) + coffeeCups;
  return totalNumCups;
}
console.log(totalCups(6), 7);
console.log(totalCups(12), 14);
console.log(totalCups(213), 248);

// 70 ==> Array of Word Lengths
//     Create a function that takes an array of words and transforms it into an array of each word's length.

function wordLengths(arrWords) {
  const wordsLength = arrWords.map((word) => word.length);
  return wordsLength;
}
console.log(wordLengths(["hello", "world"]), [5, 5]);
console.log(
  wordLengths(["Halloween", "Thanksgiving", "Christmas"]),
  [9, 12, 9]
);
console.log(
  wordLengths(["She", "sells", "seashells", "down", "by", "the", "seashore"]),
  [3, 5, 9, 4, 2, 3, 8]
);

// 71 ==> Get the File Name
//     Create a function that returns the selected filename from a path. Include the extension in your answer.

function getFilename(filePath) {
  const paths = filePath.split(/[\\/]/);
  const file = paths[paths.length - 1];
  return file;
}
console.log(
  getFilename("C:/Projects/pil_tests/ascii/edabit.txt"),
  "edabit.txt"
);
console.log(
  getFilename("C:/Users/johnsmith/Music/Beethoven_5.mp3"),
  "Beethoven_5.mp3"
);
console.log(getFilename("ffprobe.exe"), "ffprobe.exe");

// 72 ==> Nth Star Number
//  Create a function that takes a positive integer and returns the nth "star number".
//  A star number is a centered figurate number a centered hexagram (six-pointed star), such as the one that Chinese checkers is played on.
function starNumber(num) {
  //  centered hexagram formula:- 1+6*(n*(n−1)​)
  const starNumber = 1 + 6 * (num * (num - 1));
  return starNumber;
}
console.log(starNumber(2), 13);
console.log(starNumber(3), 37);
console.log(starNumber(5), 121);

// 73 ==> Lowercase, Uppercase or Mixed?
//  Create a function which returns "upper" if all the letters in a word are uppercase, "lower" if lowercase and "mixed" for any mix of the two.
function getCase(word) {
  let isAllUpperCase = word === word.toUpperCase();
  let isAllLowerCase = word === word.toLowerCase();

  if (isAllUpperCase) {
    return "upper";
  } else if (isAllLowerCase) {
    return "lower";
  } else {
    return "mixed";
  }
}
console.log(getCase("whisper..."), "lower");
console.log(getCase("SHOUT!"), "upper");
console.log(getCase("Indoor Voice"), "mixed");

// 74 ==> ES6: Destructuring Arrays
//  You can assign variables from nested arrays like this:
const arr = ["cars", "planes", ["trains", ["motorcycles"]]];
// let trans1 = arr[0];
// let trans2 = arr[1];
// let trans3 = arr[2][0];
// let trans4 = arr[2][1][0];
let [trans1, trans2, [trans3, [trans4]]] = arr;
console.log(trans1); // outputs "cars"
console.log(trans2); // outputs "planes"
console.log(trans3); // outputs "trains"
console.log(trans4); // outputs "motorcycles"
//  With ES6, you can assign variables from arrays in a much more succint way. Use Array Destructuring to assign variables

// 75 ==> The 3 Programmers Problem
//  You hired three programmers and you (hopefully) pay them. Create a function that takes three numbers (the hourly wages of each programmer) and returns the difference between the highest-paid programmer and the lowest-paid.
function programmers(wages1, wages2, wages3) {
  const wages = [wages1, wages2, wages3];
  // const highestPaid=Math.max(...arguments) ;
  // const lowestPaid =Math.min(...arguments) ;
  const highestPaid = Math.max(...wages);
  const lowestPaid = Math.min(...wages);
  const difference = highestPaid - lowestPaid;
  return difference;
}
console.log(programmers(147, 33, 526), 493);
console.log(programmers(33, 72, 74), 41);
console.log(programmers(1, 5, 9), 8);

// 76 ==> Get the Sum of All Array Elements
//  Create a function that takes an array and returns the sum of all numbers in the array.
function getSumOfItems(arr) {
  const sum = arr.reduce((acc, val) => acc + val, 0);
  return sum;
}
console.log(getSumOfItems([2, 7, 4]), 13);
console.log(getSumOfItems([45, 3, 0]), 48);
console.log(getSumOfItems([-2, 84, 23]), 105);

// 77 ==> Spaces Between Each Character
//  Create a function that takes a string and returns a string with spaces in between all of the characters.
function spaceMeOut(str) {
  let strWithSpaces = str.split("").join(" ");
  strWithSpaces = [...str].join(" ");
  strWithSpaces = str
    .split("")
    .map((val) => val + " ")
    .join(" ")
    .trim();
  strWithSpaces = str.replace(/./g, "$& ").trim();
  return strWithSpaces + " --> ";
}
console.log(spaceMeOut("space"), "s p a c e");
console.log(spaceMeOut("far out"), "f a r  o u t");
console.log(spaceMeOut("elongated musk"), "e l o n g a t e d   m u s k");

//   78 ==> Raucous Applause
//  After an amazing performance, the crowd goes wild! People clap enthusiastically and most claps overlap with each other to create one homogeneous sound. An overlapped clap is a clap which starts but doesn't finish, as in "ClaClap" (The first clap is cut short and there are overall 2 claps). Given a string of what the overlapping claps sounded like, return how many claps were made in total.

function countClaps(claps) {
  let clapMatch = claps.match(/c/gi);

  clapMatch = [...claps].filter((char) => char.toLowerCase() === "c").length;

  return clapMatch;
  return clapMatch.length;
}
console.log(countClaps("ClaClaClaClap!"), 4);
console.log(countClaps("ClClClaClaClaClap!"), 6);
console.log(countClaps("CCClaClClap!Clap!ClClClap!"), 9);

// 79 ==> Filter Strings from Array
//  Create a function that takes an array of strings and numbers, and filters out the array so that it returns an array of integers only.
function filterArray(strArr) {
  const intArr = strArr.filter((element) => typeof element === "number");
  return intArr;
}
console.log(filterArray([1, 2, 3, "a", "b", 4]), [1, 2, 3, 4]);
console.log(
  filterArray(["A", 0, "MOIEN", 1729, "Khan 123", "1729"]),
  [0, 1729]
);
console.log(filterArray(["Nothing", "here"]), []);

//   80 ==> Summing the Squares
//   Create a function where given the number n, return the sum of all square numbers up to and including n.
//       squaresSum(3) , 14
//       // 1² + 2² + 3² =
//       // 1 + 4 + 9 =
//       // 14

function squaresSum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i * i;
  }
  return sum;
}
console.log(squaresSum(3), 14);
console.log(squaresSum(12), 650);
console.log(squaresSum(13), 819);

//   81 ==> Check if Number is within a Given Range
//  Given a number and an object with min and max properties, return true if the number lies within the given range (inclusive).
function isInRange(num, obj) {
  return num >= obj.min && num <= obj.max;
}
console.log(isInRange(4, { min: 0, max: 5 }), true);
console.log(isInRange(4, { min: 4, max: 5 }), true);
console.log(isInRange(4, { min: 6, max: 10 }), false);
console.log(isInRange(5, { min: 5, max: 5 }), true);
//  Numbers can be positive or negative, and they may not be integers.
//  You can assume min <= max is always true.

// 82 ==> Coding Website Score Calculator
//  Imagine you run a website that presents users with different coding challenges in levels Easy, Medium, and Hard, where users get points for completing challenges. An Easy challenge is worth 5 points, a Medium challenge is worth 10 points, and a Hard challenge is worth 20 points. Create a function that takes in the number of each challenge level a user has played and calculates the user's total number of points. Keep in mind that a user cannot complete negative challenges, so the function should return the string "invalid" if any of the passed parameters are negative.

function scoreCalculator(easy, medium, hard) {
  if (easy < 0 || medium < 0 || hard < 0) {
    return "invlaid";
  }
  const userPoints = easy * 5 + medium * 10 + hard * 20;
  return userPoints;
}
console.log(scoreCalculator(1, 2, 3), 85);
console.log(scoreCalculator(1, 0, 10), 205);
console.log(scoreCalculator(5, 2, -6), "invalid");

// 83 ==>   Sum of the Odd Numbers
//  Create a function which returns the total of all odd numbers up to and including n. n will be given as an odd number.
function addOddToN(oddNum) {
  let totalOddNum = 0;
  for (let i = 1; i <= oddNum; i += 2) {
    if (i % 2 === 0) {
      continue;
    } else {
      totalOddNum += i;
    }
  }
  return totalOddNum;
}
console.log(addOddToN(5), 9);
//      // 1 + 3 + 5 = 9
console.log(addOddToN(13), 49);
console.log(addOddToN(47), 576);

// 84 ==>   Halloween Day
//  Create a function that takes date in the format yyyy/mm/dd as an input and returns "Bonfire toffee" if the date is October 31, else return "toffee".
function halloween(date) {
  const dates = date.split("/");
  return Number(dates[dates.length - 1]) === 31 &&
    Number(dates[dates.length - 2]) === 10
    ? "Bonfire toffee"
    : "toffee";
}
console.log(halloween("2013/10/31"), "Bonfire toffee");
console.log(halloween("2012/07/31"), "toffee");
console.log(halloween("2011/10/12"), "toffee");
// 85 ==>   Simple OOP Calculator
//  Create functions for the Calculator class that can do the following:
//      Add two numbers.
//      Subtract two numbers.
//      Multiply two numbers.
//      Divide two numbers.
class Calculator {
  add(num1, num2) {
    return num1 + num2;
  }
  subtract(num1, num2) {
    return num1 - num2;
  }
  multiply(num1, num2) {
    return num1 * num2;
  }
  divide(num1, num2) {
    return num1 / num2;
  }
}
var calculator = new Calculator();
console.log(calculator.add(10, 5), 15);
console.log(calculator.subtract(10, 5), 5);
console.log(calculator.multiply(10, 5), 50);
console.log(calculator.divide(10, 5), 2);

// 86 ==>   Limit a Number's Value
//  Create a function that takes three number arguments — one number as an input and two additional numbers representing the endpoints of a closed range — and return the number limited to this range.
//      If the number falls within the range, the number should be returned.
//      If the number is less than the lower limit of the range, the lower limit should be returned.
//      If the number is greater than the upper limit of the range, the upper limit should be returned.
function limitNumber(num, min, max) {
  const numberReturn = Math.max(num, min);
  const numReturn = Math.min(numberReturn, max);
  return numReturn;
}
console.log(limitNumber(5, 1, 10), 5);
console.log(limitNumber(-3, 1, 10), 1);
console.log(limitNumber(14, 1, 10), 10);
console.log(limitNumber(4.6, 1, 10), 4.6);

// 87 ==>   Skip the Drinks with Too Much Sugar
//  The function skipTooMuchSugarDrinks() takes in an array of drinks. Make sure the function only returns an array of drinks with no sugar in it or a little bit of sugar.
//  Drinks that contain too much sugar (in this challenge) are:
//      Cola
//      Fanta
function skipTooMuchSugarDrinks(arr) {
  const highSugerDrink = ["cola", "fanta"];

  const noSugerDrink = arr.filter((drink) => !highSugerDrink.includes(drink));

  return noSugerDrink;
}
console.log(skipTooMuchSugarDrinks(["fanta", "cola", "water"]), ["water"]);
console.log(skipTooMuchSugarDrinks(["fanta", "cola"]), []);
console.log(skipTooMuchSugarDrinks(["lemonade", "beer", "water"]), [
  "lemonade",
  "beer",
  "water",
]);

// 88 ==>   Add a Consecutive List of Numbers
//  Write a function that takes the last number of a consecutive list of numbers and returns the total of all numbers up to and including it.
function addUpTo(num) {
  let totalNum = 0;
  for (let i = 1; i <= num; i++) {
    totalNum += i;
  }

  return totalNum;
}
console.log(addUpTo(3), 6);
//      // 1 + 2 + 3 = 6
console.log(addUpTo(10), 55);
//      // 1 + 2 + 3 + ... + 10 = 55
console.log(addUpTo(7), 28);
//      // 1 + 2 + 3 + ... + 7 = 28

// 89 ==>   Check if String Ending Matches Second String
//  Create a function that takes two strings and returns true if the first string ends with the second string; otherwise return false.
function checkEnding(str1, str2) {
  return str1.slice(-str2.length) === str2;
  return str1.endsWith(str2);
}
console.log(checkEnding("abc", "bc"), true);
console.log(checkEnding("abc", "d"), false);
console.log(checkEnding("samurai", "zi"), false);
console.log(checkEnding("feminine", "nine"), true);
console.log(checkEnding("convention", "tio"), false);

// 90 ==> Find the Bug: Checking Even Numbers
//  Create a function that takes in an array and returns true if all its values are even, and false otherwise.
//  Not a big deal, your friend says. He writes the following code:
function checkAllEven(arr) {
  return arr.every((x) => x % 2 === 0);
}
//  The code above leads to a Reference Error, with x being undefined. Fix the code above so that all tests pass:
console.log(checkAllEven([1, 2, 3, 4]), false);
console.log(checkAllEven([2, 4, 6]), true);
console.log(checkAllEven([5, 6, 8, 10]), false);
console.log(checkAllEven([-2, 2, -2, 2]), true);

// 91 ==>   Remove Null from an Array
//  Create a function to remove all null values from an array.
function removeNull(arr) {
  const newArr = arr.filter((e) => e !== null);
  return newArr;
}
console.log(removeNull(["a", null, "b", null]), ["a", "b"]);
console.log(removeNull([null, null, null, null, null]), []);
console.log(removeNull([7, 8, null, 9]), [7, 8, 9]);

// 92 ==>   True Ones, False Zeros
//  Create a function that returns an array of booleans from a given number by iterating through the number one digit at a time and appending true into the array if the digit is 1 and false otherwise.

function integerBoolean(binary) {
  const booleanArr = binary.split("");
  const newArr = booleanArr.map((e) => Boolean(Number(e)));
  return newArr;
}
console.log(integerBoolean("100101"), [true, false, false, true, false, true]);
console.log(integerBoolean("10"), [true, false]);
console.log(integerBoolean("001"), [false, false, true]);

// 93 ==>   Modifying the Last Character
//  Create a function which makes the last character of a string repeat n number of times.
function modifyLast(str, repeat) {
  const repeatlast =
    str.slice(0, str.length - 1) + str[str.length - 1].repeat(repeat);
  return repeatlast;
}
console.log(modifyLast("Hello", 3), "Hellooo");
console.log(modifyLast("hey", 6), "heyyyyyy");
console.log(modifyLast("excuse me what?", 5), "excuse me what?????");

// 94 ==>   Where is Bob!?!
//  Write a function that searches an array of names (unsorted) for the name "Bob" and returns the location in the array. If Bob is not in the array, return -1.
function findBob(nameArr) {
  let searchBob = nameArr.findIndex((e) => e === "Bob");
  return searchBob;
}
console.log(findBob(["Jimmy", "Layla", "Bob"]), 2);
console.log(findBob(["Bob", "Layla", "Kaitlyn", "Patricia"]), 0);
console.log(findBob(["Jimmy", "Layla", "James"]), -1);

// 95 ==>   Negate the Array of Numbers
//  Given an array of numbers, negate all elements contained within.
//      Negating a positive value -+n will return -n, because all +'s are removed.
//      Negating a negative value --n will return n, because the first - turns the second minus into a +.
function negate(arr) {
  const negateArr = arr.map((e) => e * -1);
  return negateArr;
}
console.log(negate([1, 2, 3, 4]), [-1, -2, -3, -4]);
console.log(negate([-1, 2, -3, 4]), [1, -2, 3, -4]);
console.log(negate([]), []);

// 96 ==>   Convert Number to String of Dashes
//  Create a function that takes a number (from 1 - 60) and returns a corresponding string of hyphens.
function Go(num) {
  const hypen = "-";
  return hypen.repeat(num);
}
console.log(Go(1), "-");
console.log(Go(5), "-----");
console.log(Go(3), "---");

// 97 ==>   Word Endings
//  Create a function that adds a string ending to each member in an array.
function addEnding(arr, endingStr) {
  const newArr = arr.map((e) => e + endingStr);
  return newArr;
}
console.log(addEnding(["clever", "meek", "hurried", "nice"], "ly"), [
  "cleverly",
  "meekly",
  "hurriedly",
  "nicely",
]);
console.log(addEnding(["new", "pander", "scoop"], "er"), [
  "newer",
  "panderer",
  "scooper",
]);
console.log(addEnding(["bend", "sharpen", "mean"], "ing"), [
  "bending",
  "sharpening",
  "meaning",
]);

// 98 ==>   Flip the Boolean
//  Create a function that reverses a boolean value and returns the string "boolean expected" if another variable type is given.

function reverse(BooleanVal) {
  if (typeof BooleanVal !== "boolean") {
    return "boolean expected";
  }
  return !BooleanVal;
}
console.log(reverse(true), false);
console.log(reverse(false), true);
console.log(reverse(0), "boolean expected");
console.log(reverse(null), "boolean expected");

// 99 ==>   Return the Four Letter Strings
//  Create a function that takes an array of strings and returns the words that are exactly four letters.
function isFourLetters(str_arr) {
  const four_letters_arr = str_arr.filter((e) => e.length === 4);
  return four_letters_arr;
}
console.log(isFourLetters(["Tomato", "Potato", "Pair"]), ["Pair"]);
console.log(isFourLetters(["Kangaroo", "Bear", "Fox"]), ["Bear"]);
console.log(isFourLetters(["Ryan", "Kieran", "Jason", "Matt"]), [
  "Ryan",
  "Matt",
]);

// 100 ==>  Shuffle the Name
//  Create a function that accepts a string (of a person's first and last name) and returns a string with the first and last name swapped.
function nameShuffle(nameStr) {
  const nameArr = nameStr.split(" ");
  const swapped = nameArr.reverse().join(" ");
  return swapped;
}
console.log(nameShuffle("Donald Trump"), "-->", "Trump Donald");
console.log(nameShuffle("Rosie O'Donnell"), "-->", "O'Donnell Rosie");
console.log(nameShuffle("Seymour Butts"), "-->", "Butts Seymour");

// 101 ==>  Video Streaming Plans
//  Given a class for a BasicPlan, write the classes for StandardPlan and PremiumPlan which have class properties of the following:
//      BasicPlan   StandardPlan    PremiumPlan
//      ✓           ✓               ✓               canStream
//      ✓           ✓               ✓               canDownload
//      ✓           ✓               ✓               hasSD
//                  ✓               ✓               hasHD
//                                  ✓               hasUHD
//      1           2               4               numOfDevices
//      $8.99       $12.99          $15.99          price
class BasicPlan {
  constructor() {
    this.canStream = true;
    this.canDownload = true;
    this.hasSD = true;
    this.hasUHD = false;
    this.hasHD = false;
    this.numOfDevices = 1;
    this.price = "$8.99";
  }
}

class StandardPlan extends BasicPlan {
  constructor() {
    super();
    this.hasHD = true;
    this.numOfDevices = 2;
    this.price = "$12.99";
  }
}

class PremiumPlan extends StandardPlan {
  constructor() {
    super();
    this.hasHD = true;
    this.hasUHD = true;
    this.numOfDevices = 4;
    this.price = "$15.99";
  }
}
const basicPlan = new BasicPlan();
const standardPlan = new StandardPlan();
const premiumPlan = new PremiumPlan();

console.log(basicPlan.hasSD, true);
console.log(premiumPlan.hasSD, true);
console.log(basicPlan.hasUHD, false);
console.log(basicPlan.price, "$8.99");
console.log(premiumPlan.numOfDevices, 4);

// 102 ==>  Missing Third Angle
//  You are given 2 out of 3 angles in a triangle, in degrees.
//  Write a function that classifies the missing angle as either "acute", "right", or "obtuse" based on its degrees.
//      An acute angle is less than 90 degrees.
//      A right angle is exactly 90 degrees.
//      An obtuse angle is greater than 90 degrees (but less than 180 degrees).
//  For example: missingAngle(11, 20) should return "obtuse", since the missing angle would be 149 degrees, which makes it obtuse.
function missingAngle(deg1, deg2) {
  const angleValue = 180 - (deg1 + deg2);
  if (angleValue < 90) {
    return "acute";
  } else if (angleValue > 90) {
    return "obtuse";
  } else {
    return "right";
  }
}
console.log(missingAngle(27, 59), "obtuse");
console.log(missingAngle(135, 11), "acute");
console.log(missingAngle(45, 45), "right");

// 103 ==>  Semantic Versioning
//  In semantic versioning a piece of software can be represented in a format like this example: 6.1.9.
//      The first number is the major version.
//      The second number is the minor version.
//      The third number is the patch (bug fixes).
//  Write three separate functions, one to retrieve each element in the semantic versioning specification.
//      // 6.1.9

function retrieveMajor(version) {
  if (typeof version != "string") {
    return "Invalid Input";
  }
  const MajorVersion = version.split(".")[0];
  return MajorVersion;
}
function retrieveMinor(version) {
  if (typeof version != "string") {
    return "Invalid Input";
  }
  const MinorVersion = version.split(".")[1];
  return MinorVersion;
}
function retrievePatch(version) {
  if (typeof version != "string") {
    return "Invalid Input";
  }
  const PatchVersion = version.split(".")[2];
  return PatchVersion;
}

console.log(retrieveMajor("6.1.9"), "6");
console.log(retrieveMinor("6.1.9"), "1");
console.log(retrievePatch("6.1.9"), "9");

// 2.1.0
console.log(retrieveMajor("2.1.0"), "2");
console.log(retrieveMinor("2.1.0"), "1");
console.log(retrievePatch("2.1.0"), "0");

// 104 ==>  Alphabet Soup
//  Create a function that takes a string and returns a string with its letters in alphabetical order.
function alphabetSoup(word){
  let alphabeticalOrder = word.split('').toSorted().join('');
  alphabeticalOrder = [...word].sort().join('');
  alphabeticalOrder = Array.from(word).sort().join('');
  return alphabeticalOrder;
}
console.log(alphabetSoup("hello"), "ehllo");
console.log(alphabetSoup("edabit"), "abdeit");
console.log(alphabetSoup("hacker"), "acehkr");
console.log(alphabetSoup("geek"), "eegk");
console.log(alphabetSoup("javascript"), "aacijprstv");
