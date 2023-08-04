// var obj = new Object()
// var arr = new Array()
// var fun = new Function()
// var date = new Date()
// var regExp = new RegExp(/[a-z]/g)
// var error = new Error("sorry")
// console.log(obj)
// console.log(arr)
// console.log(fun)
// console.log(date)
// console.log(regExp)
// console.log(error)

const arr1= [1,2,3,4];
const arr2 = arr1;
console.log(arr1);
console.log(arr2);
arr2.push(5)
console.log(arr1)
console.log(arr2);

console.log(1=="1");
console.log(1 == Number("1"));
console.log(1 == 1);

const arr3 = [1,2,3];

arr3["a"] = 4;
console.log(arr3["a"]);
console.log(arr3.length);
console.log(arr3);

function fn(){
    const message = "ohhh! how";
    return () =>{
        return message
    }
}

const callFn = fn();
const massage = callFn();

// console.log(massage);

const arr = [1,2,3];
function fn2([...arr]){
    arr.push(4);
    console.log(arr);
}
console.log(...arr);
fn2(arr)
console.log(arr)

const [val,val1] = [1,2,3,4,5]
console.log(val,val1);

const obj = {
    val1:1,
}

const obj2 = obj;
obj2.val2 = 2;
console.log(obj);
console.log(obj2);