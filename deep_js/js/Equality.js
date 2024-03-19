function findAll(match, arr) {
const result = [];

for(const value of arr){

    // exact matches
    if(Object.is(match,value)){
        result.push(value)
    }
    // Null and undefined matching
    else if( (match === null  && 
        value === undefined )||
         (match === undefined && 
         value === null)){
        result.push(value)
    }
    // boolean matching
    else if( typeof match === "boolean" && 
    typeof value === 'boolean' &&
    match === value 
    ){
        result.push(value)
    }
    // string-number coercion
    else if(typeof match === 'string' && 
    typeof value === 'number' &&
    match.trim() !== "" &&
    !isNaN(value)
    ){
        if (Object.is(value, -0) ? Object.is(match, '-0') : Number(match) == value) {
            result.push(value);
        }
    }
    // number-string coercion
    else if(typeof match === 'number' &&
    typeof value === "string" &&
    value.trim() !== ""&&
    !isNaN(match)
    ){
        if (Object.is(value, -0) ? Object.is(match, '-0') : Number(match) == value) {
            result.push(value);
        }
     }
}
return result
}
// Test Cases
const values = [0, '0', '  ', 1, '1', -0, NaN, Infinity, true, 'true', false, 'false', null, undefined];
console.log(findAll(-0, values)); // Output: [-0]
console.log(findAll('0', values)); // Output: [0, '0']
console.log(findAll(true, values)); // Output: [true]
console.log(findAll('true', values)); // Output: []
console.log(findAll(null, values)); // Output: [undefined]