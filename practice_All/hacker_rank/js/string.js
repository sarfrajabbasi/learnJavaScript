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

Q2.) There is a sequence of words in CamelCase as a string of letters, , having the following properties:

It is a concatenation of one or more words consisting of English letters.
All letters in the first word are lowercase.
For each of the subsequent words, the first letter is uppercase and rest of the letters are lowercase.
Given , determine the number of words in .

There are  words in the string: 'one', 'Two', 'Three'.

Sample Input: saveChangesInTheEditor
Sample Output: 5

*/

// Function Definition:
/**
 * @param {string | string[]} s
 */

function camelcase(s) {
  // Initializing Variables:
  let wordCount = 1;
  //   check if all char is upperCase then return wordcount
  if (s === s.toUpperCase()) {
    return 1;
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

/* 
Q3.)Louise joined a social networking site to stay in touch with her friends. The signup page required her to input a name and a password. However, the password must be strong. The website considers a password to be strong if it satisfies the following criteria:

Its length is at least .
It contains at least one digit.
It contains at least one lowercase English character.
It contains at least one uppercase English character.
It contains at least one special character. The special characters are: !@#$%^&*()-+
She typed a random string of length  in the password field but wasn't sure if it was strong. Given the string she typed, can you find the minimum number of characters she must add to make her password strong?

Note: Here's the set of types of characters in a form you can paste in your solution:

numbers = "0123456789"
lower_case = "abcdefghijklmnopqrstuvwxyz"
upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
special_characters = "!@#$%^&*()-+"
Example


This password is 5 characters long and is missing an uppercase and a special character. The minimum number of characters to add is .


This password is 5 characters long and has at least one of each character type. The minimum number of characters to add is .

Function Description

Complete the minimumNumber function in the editor below.

minimumNumber has the following parameters:

int n: the length of the password
string password: the password to test
Returns

int: the minimum number of characters to add
Input Format

The first line contains an integer , the length of the password.

The second line contains the password string. Each character is either a lowercase/uppercase English alphabet, a digit, or a special character.


All characters in  are in [a-z], [A-Z], [0-9], or [!@#$%^&*()-+ ].

  
*/

/**
 * @param {number} n
 * @param {string} password
 */
function minimumNumber(n, password) {
  // Define character sets for each criterion
  const digitRegex = /\d/;
  const lowerCaseRegex = /[a-z]/;
  const upperCaseRegex = /[A-Z]/;
  const specialCharRegex = /[!@#$%^&*()\/+-]/;
  // Initialize a variable to count missing criteria
  let missingCriteriaCount =
    (!password.match(digitRegex) ? 1 : 0) +
    (!password.match(lowerCaseRegex) ? 1 : 0) +
    (!password.match(upperCaseRegex) ? 1 : 0) +
    (!password.match(specialCharRegex) ? 1 : 0);

  // If the length of the password is less than 6, we need to add characters to meet the minimum length requirement

  let charToAdd = Math.max(0, 6 - n);

  // Determine the maximum count of missing criteria or the number of characters needed to reach the minimum length requirement (6 characters)
  return Math.max(missingCriteriaCount, charToAdd);
}
function minimumNumber(n, password) {
  const missingCriteriaCount = [
      /\d/.test(password) ? 0 : 1,
      /[a-z]/.test(password) ? 0 : 1,
      /[A-Z]/.test(password) ? 0 : 1,
      /[!@#$%^&*()-+]/.test(password) ? 0 : 1
  ].reduce((acc, curr) => acc + curr, 0);
  
  return Math.max(missingCriteriaCount, 6 - n);
}
function minimumNumber(n, password) {
  return Math.max(6 - n, [/\d/, /[a-z]/, /[A-Z]/, /[^\s\w]/].filter((regex) => !regex.test(password)).length
  );
}
// Test Cases:
console.log("Test Case: minmumNumber");
console.log(minimumNumber(3, "Ab1"));
console.log(minimumNumber(11, "#HackerRank")); 
console.log(minimumNumber(5, "abcdef"));
console.log(minimumNumber(8, "ABCdef12")); 
console.log(minimumNumber(10, "abcdefghij")); 
console.log(minimumNumber(6, "123456")); 
console.log(minimumNumber(7, "ABCdefg")); 
console.log(minimumNumber(4, "$$$")); 


/* 
Given a string, remove characters until the string is made up of any two alternating characters. When you choose a character to remove, all instances of that character must be removed. Determine the longest string possible that contains just two alternating letters.

Example


Delete a, to leave bcdbd. Now, remove the character c to leave the valid string bdbd with a length of 4. Removing either b or d at any point would not result in a valid string. Return .

Given a string , convert it to the longest possible string  made up only of alternating characters. Return the length of string . If no string  can be formed, return .

Function Description

Complete the alternate function in the editor below.

alternate has the following parameter(s):

string s: a string
Returns.

int: the length of the longest valid string, or  if there are none
Input Format

The first line contains a single integer that denotes the length of .
The second line contains string .

Constraints

Sample Input

STDIN       Function
-----       --------
10          length of s = 10
beabeefeab  s = 'beabeefeab'
Sample Output

5
Explanation

The characters present in  are a, b, e, and f. This means that  must consist of two of those characters and we must delete two others. Our choices for characters to leave are [a,b], [a,e], [a, f], [b, e], [b, f] and [e, f].

If we delete e and f, the resulting string is babab. This is a valid  as there are only two distinct characters (a and b), and they are alternating within the string.

If we delete a and f, the resulting string is bebeeeb. This is not a valid string  because there are consecutive e's present. Removing them would leave consecutive b's, so this fails to produce a valid string .

Other cases are solved similarly.

babab is the longest string we can create.

*/