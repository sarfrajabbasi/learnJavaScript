function search(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == item) {
      return i;
    }
  }
  return -1;
}

console.log(search([1, 5, 3], 5), 1);
console.log(search([9, 8, 3], 3), 2);
console.log(search([1, 2, 3], 4), -1);
console.log(search([1, 5, 3, 10, 17, 20, -6], 20), 5);
