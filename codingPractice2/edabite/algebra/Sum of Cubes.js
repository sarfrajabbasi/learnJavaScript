function sumOfCubes(arr){
  let total = 0;
  for(let i = 0; i < arr.length; i++){
    total +=arr[i]**3;
  }
return total;
}
console.log(sumOfCubes([1, 5, 9]), 855)
console.log(sumOfCubes([3, 4, 5]), 216)
console.log(sumOfCubes([1, 1, 1]), 3)
console.log(sumOfCubes([2]), 8)
console.log(sumOfCubes([5, 1, 2]), 134)
console.log(sumOfCubes([32]), 32768)
console.log(sumOfCubes([5, 9, 4, 4, 9]), 1711)
console.log(sumOfCubes([0, 1, 2]), 9)
console.log(sumOfCubes([]), 0)