function printArray(num) {
  let arr = [];
  for (let i = 1; i <= num; i++) {
    arr.push(i);
  }
  return arr;
}
console.log(printArray(1), [1]);
console.log(printArray(2), [1, 2]);
console.log(printArray(3), [1, 2, 3]);
console.log(printArray(4), [1, 2, 3, 4]);
console.log(printArray(5), [1, 2, 3, 4, 5]);
console.log(printArray(6), [1, 2, 3, 4, 5, 6]);
console.log(printArray(7), [1, 2, 3, 4, 5, 6, 7]);
console.log(printArray(8), [1, 2, 3, 4, 5, 6, 7, 8]);
console.log(printArray(9), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(printArray(10), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
