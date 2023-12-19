function addition(a, b) {
  return a * 1 + b * 1;
}

console.log(addition(3, 2));
console.log(addition(-3, -6));
console.log(addition(7, 3));
console.log(addition("7", "3"));
console.log(addition("7", 3));

function convert(num) {
  return 60 * num;
}
console.log(convert(5), 300);
console.log(convert(3), 180);
console.log(convert(2), 120);
console.log(convert("2"), 120);

function add(num) {
  return 1 + num * 1;
}

console.log(add(0));
console.log(add("9"));
console.log(add("-3"));

function giveMeSomething(quote) {
  //   return "Something " + sentance;
  const sentance = `Something ${quote}`;
  return sentance;
}

console.log(
  giveMeSomething("is better than nothing"),
  "something is better than nothing"
);
console.log(giveMeSomething("Bob Jane"), "something Bob Jane");
console.log(giveMeSomething("something"), "something something");

function triArea(height, base) {
  return (height * base) / 2;
}

console.log(triArea(3, 2), 3);
console.log(triArea(7, 4), 14);
console.log(triArea(10, 10), 50);

function howManySeconds(hour) {
  const sec = 60 * 60 * hour;
  return sec;
}
console.log(howManySeconds(2), 7200);
console.log(howManySeconds(10), 36000);
console.log(howManySeconds(24), 86400);

function getFirstValue(arr) {
  //   const firstvalue = arr[0];
  const firstvalue = arr.shift();
  //   const firstvalue = arr.reverse().pop();
  //   const firstvalue = arr.slice(0,1);
  //   const firstvalue = arr.splice(0,1);
  return firstvalue;
}
console.log(getFirstValue([1, 2, 3]), 1);
console.log(getFirstValue([80, 5, 100]), 80);
console.log(getFirstValue([-500, 0, 50]), -500);

function nextEdge(a, b) {
  const value = a + b - 1;
  return value;
}

console.log(nextEdge(8, 10), 17);
console.log(nextEdge(5, 7), 11);
console.log(nextEdge(9, 2), 10);

function findPerimeter(length, width) {
  const perimeter = 2 * (length + width);
  return perimeter;
}

console.log(findPerimeter(6, 7), 26);
console.log(findPerimeter(20, 10), 60);
console.log(findPerimeter(2, 9), 22);

function remainder(num1, num2) {
  const rem = num1 % num2;
  return rem;
}

console.log(remainder(1, 3), 1);
console.log(remainder(3, 4), 3);
console.log(remainder(-9, 45), -9);
console.log(remainder(5, 5), 0);
