  function addition(a, b) {
	return a+b;
}
   // console.log(addition(3, 2) ,5);
   //  console.log(addition(-3, -6) , -9);
   //  console.log(addition(7, 3) , 10);
   //  console.log(addition('7', '3') , 10);
   //  console.log(addition('7', 3) , 10);

  function convert(num){
   return 60 * num;
}
//   console.log(convert(5) , 300);
//   console.log(convert(3) , 180);
//   console.log(convert(2) , 120);
//   console.log(convert('2') , 120);

 function addition(num){
   return +num + 1;
}
//   console.log(addition(0) , 1)
//   console.log(addition('9') , 10)
//   console.log(addition('-3') , -2)

 function giveMeSomething(str){
   return " something " + str;
}
// console.log(giveMeSomething("is better than nothing"))
//   console.log(giveMeSomething("Bob Jane"))
//   console.log(giveMeSomething("something"))

function triArea(base,height){
   return 10 * base * height / 2;
}

//   console.log(triArea(3, 2) , 30)
//   console.log(triArea(7, 4) , 140)
//   console.log(triArea(10, 10) , 500)
 function howManySeconds(sec){
   return sec * 3600;
}
//   console.log(howManySeconds(2) , 7200)
//   console.log(howManySeconds(10) , 36000)
//   console.log(howManySeconds(24) , 86400)

 function getFirstValue(arr){
   return arr[0];
}

//   console.log(getFirstValue([1, 2, 3]) , 1)
//   console.log(getFirstValue([80, 5, 100]) , 80)
//   console.log(getFirstValue([-500, 0, 50]) , -500)

function nextEdge(num1,num2){
   return num1 + num2 - 1;
}
//   console.log(nextEdge(8, 10) , 17)
//   console.log(nextEdge(5, 7) , 11)
//   console.log(nextEdge(9, 2) , 10)

 function findPerimeter(num1,num2){

   return 2 * (num1 + num2) ;
}
//   console.log(findPerimeter(6, 7) , 26)
//   console.log(findPerimeter(20, 10) , 60)
//   console.log(findPerimeter(2, 9) , 22)

 function remainder(a,b){
   return a%b;
}
//   console.log(remainder(1, 3) , 1)
//   console.log(remainder(3, 4) , 3)
//   console.log(remainder(-9, 45) , -9) 
//   console.log(remainder(5, 5) , 0)