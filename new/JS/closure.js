function parent(){
var a =1
function child(){
    return a+2
}
return child
}

var newFunc = parent();//child
console.log(parent());
