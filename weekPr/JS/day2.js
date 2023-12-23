// 11 ==> Correct the Mistakes
function squared(b) {
  const result = b * b;
  return result;
}
console.log(squared(5), 25);
console.log(squared(9), 81);
console.log(squared(100), 10000);

// 12 ==> Using the "&&" Operator
//   JavaScript has a logical operator &&. The && operator takes two boolean values, and returns true if both values are true.
//     Consider a && b:
//         a is checked if it is true or false.
//         If a is false, false is returned.
//         b is checked if it is true or false.
//         If b is false, false is returned.
//         Otherwise, true is returned (as both a and b are therefore true ).
//     The && operator will only return true for true && true.
//     Make a function using the && operator.
function and(a, b) {
  const result = a && b;
  return result;
}
console.log(and(true, false));
console.log(and(true, true));
console.log(and(false, true));
console.log(and(false, false));

// 13 ==> Is the Number Less than or Equal to Zero?
//     Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.
console.log("13 --->");

function lessThanOrEqualToZero(number) {
  return number <= 0 ? true : false;
}
console.log(lessThanOrEqualToZero(5));
console.log(lessThanOrEqualToZero(0));
console.log(lessThanOrEqualToZero(-2));

// 14 ==> Less Than 100?
//     Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

function lessThan100(num1, num2) {
  const sum = num1 + num2;
  return 100 > sum;
}
console.log(lessThan100(22, 15));
console.log(lessThan100(83, 34));

// 15 ==> Football Points
//     Create a function that takes the number of wins, draws and losses and calculates the number of points a football team has obtained so far. A win receives 3 points, a draw 1 point and a loss 0 points.

console.log("15 --->");
function footballPoints(wins, draws, losses) {
  const points = wins * 3 + draws * 1 + losses * 0;
  return points;
}
console.log(footballPoints(3, 4, 2));
console.log(footballPoints(5, 0, 2));
console.log(footballPoints(0, 0, 1));

// 16 ==> Are the Numbers Equal?
//     Create a function that returns true when num1 is equal to num2; otherwise return false.
function isSameNum(num1, num2) {
  return num1 === num2;
}
console.log(isSameNum(4, 8));
console.log(isSameNum(2, 2));
console.log(isSameNum(2, "2"));
console.log(isSameNum(0, -0));

// 17 return true if number is true
function isEven(num) {
  return num % 2 === 0;
}
console.log(isEven(2));
console.log(isEven(3));

// 18 ==> The Farm Problem
//     In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:
//         chickens = 2 legs
//         cows = 4 legs
//         pigs = 4 legs
//     The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.
//     animals(2, 3, 5) ➞ 36
//     animals(1, 2, 3) ➞ 22
//     animals(5, 2, 8) ➞ 50
//     Remember that the farmer wants to know the total number of legs and not the total number of animals.

function animals(chickens, cows, pigs) {
  const totalNum = chickens * 2 + cows * 4 + pigs * 4;
  return totalNum;
}
console.log(animals(2, 3, 5));
console.log(animals(1, 2, 3));
console.log(animals(5, 2, 8));

// 19 ==> Convert Hours and Minutes into Seconds
//     Write a function that takes two integers (hours, minutes), converts them to seconds, and adds them.
function convert(hours, minutes) {
  const seconds = hours * 60 * 60 + minutes * 60;
  return seconds;
}
console.log(convert(1, 3));
console.log(convert(2, 0));
console.log(convert(0, 0));

// 20 ==> Equality Check
//     In this challenge, you must verify the equality of two different given parameters: a and b.
//     Both the value and the type of parameters need to be tested in order to have a matching equality. The possible types of the given parameters are:
//         Numbers
//         Strings
//         Booleans (false or true)
//         Special values: undefined, null and NaN

function checkEquality(a, b) {
  return a === b;
}
console.log(checkEquality(1, true));
console.log(checkEquality(0, "0"));
console.log(checkEquality(1, 1));

// 21 ==> Profitable Gamble
//     Create a function that takes in three arguments (prob, prize, pay) and returns true if prob * prize > pay; otherwise return false.
//     To illustrate, profitableGamble(0.2, 50, 9) should yield true, since the net profit is 1 (0.2 * 50 - 9), and 1 > 0.

function profitableGamble(prob, prize, pay) {
  return prob + prize > pay;
}
console.log(profitableGamble(0.2, 50, 9), true);
console.log(profitableGamble(0.9, 1, 2), false);
console.log(profitableGamble(0.9, 3, 2), true);
//     A profitable gamble is a game that yields a positive net profit, where net profit is calculated in the following manner: net_outcome = probability_of_winning * prize - cost_of_playing.

// 22 ==> Frames Per Second
//     Create a function that returns the number of console.log(frames shown in a given number of minutes for )a certain FPS.
function frames(fps1, fps2) {
  const FPS = 60 * fps1 * fps2;
  return FPS;
}
console.log(frames(1, 1), 60);
console.log(frames(10, 1), 600);
console.log(frames(10, 25), 15000);
//     FPS stands for "console.log(frames per second" and )it's the number of console.log(frames a computer screen )shows every second.
//     Assume the screen produces 60 console.log(frames )every second.

// 23 ==> Drinks Allowed?
//     A bartender is writing a simple program to determine whether he should serve drinks to someone. He only serves drinks to people 18 and older and when he's not on break.
//     Given the person's age, and whether break time is in session, create a function which returns whether he should serve drinks.
function shouldServeDrinks(age, breakTime) {
  return 18 <= age && !breakTime;
}

console.log(shouldServeDrinks(17, true), false);
console.log(shouldServeDrinks(19, false), true);
console.log(shouldServeDrinks(30, true), false);
//     Return true or false.
//     Some countries have a slightly higher drinking age, but for the purposes of this challenge, it will be 18.

// 24 ==> Is the String Empty?
//     Create a function that returns true if a string is empty and false otherwise.
function isEmpty(str) {
  return !str;
}
console.log(isEmpty(""), true);
console.log(isEmpty(" "), false);
console.log(isEmpty("a"), false);
//     A string containing only whitespaces " " does not count as empty.

// 25 ==> Compare Strings by Count of Characters
//     Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.
console.log("25 --->");
function comp(str1, str2) {
  return str1.length === str2.length;
}
console.log(comp("AB", "CD"));
console.log(comp("ABD", "DE"));
console.log(comp("hello", "moien khan"));

// 26 ==> Multiple of 100
//     Create a function that takes an integer and return true if it's divisible by 100, otherwise return false.
function divisible(int) {
  return int % 100 === 0;
}
console.log(divisible(1));
console.log(divisible(1000));
console.log(divisible(100));

// 27 ==> Check if an Integer is Divisible By Five
function divisibleByFive(int) {
  return int % 5 === 0;
}
console.log(divisibleByFive(5));
console.log(divisibleByFive(-55));
console.log(divisibleByFive(37));

// 28 ==> Recursion: Length of a String
//     Write a function that returns the length of a string. Make your function recursive.
function strLength(str) {
  if (str === "") {
    return 0;
  }
  //   return 1 + strLength(str.substring(1));
  return 1 + strLength(str.slice(1));
}
console.log(strLength("apple"));
console.log(strLength("make"));
console.log(strLength("a"));
console.log(strLength(""));

// 29 ==> Return a String as an Integer
//     Create a function that takes a string and returns it as an integer.
function stringInt(str) {
  // return +str
  return Number(str);
}
console.log(stringInt("6"));
console.log(stringInt("1000"));
console.log(stringInt("12"));
// 30 ==> Divides Evenly
//     Given two integers, a and b, return true if a can be divided evenly by b. Return false otherwise.
function dividesEvenly(a, b) {
  const result = a/b;
  return result === parseInt(result)
  return a % b === 0;
}
console.log(dividesEvenly(98, 7));
console.log(dividesEvenly(85, 4));
