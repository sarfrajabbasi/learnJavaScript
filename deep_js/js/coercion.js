// validator functions

function isValidName(name){
return (typeof name === 'string' && name.trim().length >=3)?true:false;
}

function hoursAttended(attended,length){
    attended = Number(attended);
    length = Number(length)

    return (
        typeof attended === "number" &&
        typeof length === "number" &&
        attended >= 0 &&
        length >= 0 &&
         Number.isInteger(attended) &&
         Number.isInteger(length) &&
         length >= attended 
    )?true:false
}

// test cases:

console.log("isValidName Tests:");

console.log(isValidName('sarfraj abbasi'));
console.log(isValidName(' asif '));
console.log(isValidName(""));
console.log(isValidName('Jo'));
console.log(isValidName(123));
console.log("\nhoursAttended Tests:");

console.log(hoursAttended(5,10));
console.log(hoursAttended("4","7"));
console.log(hoursAttended("4",4));
console.log(hoursAttended(2,3.5));
console.log(hoursAttended(8,"6"));
console.log(hoursAttended('two',4));

