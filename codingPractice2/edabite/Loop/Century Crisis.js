function futurePeople(population, n) {
	let val = 0;
  for(let i = 0; i<n ; i++){

    val += 360;  /*(360+360 = 720)*/
  }
  return val + population; /*(720+256 = 976)*/
}
console.log(futurePeople(256, 2), 976)
console.log(futurePeople(3248, 6), 5408)
console.log(futurePeople(5240, 3), 6320)
