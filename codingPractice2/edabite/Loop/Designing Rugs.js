function makeRug(m, n, s = "#"){
	let a = [];

  
  for (var i = 1; i< m ;i++){
    
    a.push(s.repeat(n))

    return a;
  }
  
}

console.log(makeRug(3, 5), [
	"#####", 
	"#####", 
	"#####"
])

console.log(makeRug(3, 5, '$'), [
	"$$$$$", 
	"$$$$$", 
	"$$$$$"
])

console.log(makeRug(2, 2, 'A'), [
	"AA",
	"AA"
])

console.log(makeRug(3, 1, 'b'), [
	"b", 
	"b", 
	"b"
])

console.log(makeRug(2, 1, 'bcb'), [
	"bcb", 
	"bcb"
])