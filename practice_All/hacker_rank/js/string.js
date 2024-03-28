/* 
Q1.) Reduce a string of lowercase characters in range ascii[‘a’..’z’]by doing a series of operations. In each operation, select a pair of adjacent letters that match, and delete them.

-> Delete as many characters as possible using this method and return the resulting string. If the final string is empty, return Empty String

aab shortens to b in one operation: remove the adjacent a characters.

Remove the two 'b' characters leaving 'aa'. Remove the two 'a' characters to leave ''. Return 'Empty String'.


*/

// Function Definition:

/**
 * @param {string} s
 */

function superReducedString(s) {
  // Initializing Variables:
  let stack = [];

  // Looping Through the Input String:
  for (let char of s) {
    // Checking if Characters Match and Adjusting the Stack:
    // check if current char match last char mean found 2 adjucent char that are
    if (stack.length > 0 && stack[stack.length - 1] === char) {
      // if  they match we remove last char from the stack using pop
      stack.pop();
    } else {
      // if don't  match,it means the current char is different from the last char in the stack ,so add(push) the curr char to the stack
      stack.push(char);
    }
  }
  // Creating the Reduced String:
  // after process join all remaning char in the stack to form a reduce string This string will contain only the characters that couldn't be paired and removed.
  const result = stack.join("");
  // Returning the Result:
  //  check if the length of the result str is greater than 0  , means all char paired and removed so return the result
  // if length is, it means all char were paired and removed,so we return 'Empty string'.
  return result.length > 0 ? result : "Empty string";
}

// Test cases
console.log(superReducedString("aaabccddd")); // Output: "abd"
console.log(superReducedString("aa")); // Output: "Empty String"
console.log(superReducedString("baab")); // Output: "Empty String"

/* 

Q1.) There is a sequence of words in CamelCase as a string of letters, , having the following properties:

It is a concatenation of one or more words consisting of English letters.
All letters in the first word are lowercase.
For each of the subsequent words, the first letter is uppercase and rest of the letters are lowercase.
Given , determine the number of words in .

There are  words in the string: 'one', 'Two', 'Three'.

Sample Input: saveChangesInTheEditor
Sample Output: 5

*/

// Function Definition:
function camelcase(s) {
  // Initializing Variables:
  let wordCount = 1;
//   check if all char is upperCase then return wordcount
if(s === s.toUpperCase()){
    return 1
}
  // Looping Through the String:
  for (let char = 0; char < s.length; char++) {
    // Checking for Uppercase Letters:

    if (s[char] === s[char].toUpperCase()) {
      //Incrementing Word Count:

      wordCount++;
    }
  }

  // Returning the Result:
  return wordCount;
}
// Test case
console.log(camelcase("saveChangesInTheEditor")); // Output: 5
console.log(camelcase("helloWorld")); // Output: 2
console.log(camelcase("single")); // Output: 1
console.log(camelcase("camelCase")); // Output: 2
console.log(camelcase("UPPERCASE")); // Output: 1
