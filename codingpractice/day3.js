// 21 ==> Profitable Gamble
//     Create a function that takes in three arguments (prob, prize, pay) and returns true if prob * prize > pay; otherwise return false.
//     To illustrate, profitableGamble(0.2, 50, 9) should yield true, since the net profit is 1 (0.2 * 50 - 9), and 1 > 0.
//     profitableGamble(0.2, 50, 9) ➞ true
//     profitableGamble(0.9, 1, 2) ➞ false
//     profitableGamble(0.9, 3, 2) ➞ true
//     A profitable gamble is a game that yields a positive net profit, where net profit is calculated in the following manner: net_outcome = probability_of_winning * prize - cost_of_playing.

function profitableGamble(prob, prize, pay){

  return prob * prize > pay;

}

    // console.log(profitableGamble(0.2, 50, 9) , true)
    // console.log(profitableGamble(0.9, 1, 2) , false)
    // console.log(profitableGamble(0.9, 3, 2) , true)

    // 22 ==> Frames Per Second
    //     Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.
    //     frames(1, 1) ➞ 60
    //     frames(10, 1) ➞ 600
    //     frames(10, 25) ➞ 15000
    //     FPS stands for "frames per second" and it's the number of frames a computer screen shows every second.
    //     Assume the screen produces 60 frames every second.

    function frames(num1,num2){

      return 60 * (num1 * num2);
    }
        // console.log(frames(1, 1) , 60)
        // console.log(frames(10, 1) , 600)
        // console.log(frames(10, 25) , 15000)

        // 23 ==> Drinks Allowed?
        //     A bartender is writing a simple program to determine whether he should serve drinks to someone. He only serves drinks to people 18 and older and when he's not on break.
        //     Given the person's age, and whether break time is in session, create a function which returns whether he should serve drinks.
        //     shouldServeDrinks(17, true) ➞ false
        //     shouldServeDrinks(19, false) ➞ true
        //     shouldServeDrinks(30, true) ➞ false
        //     Return true or false.
        //     Some countries have a slightly higher drinking age, but for the purposes of this challenge, it will be 18.

function shouldServeDrinks(age,breakTime){
  return age >= 18 && breakTime != true
     
}

    // console.log(shouldServeDrinks(17, true) , false)
    // console.log(shouldServeDrinks(19, false) , true)
    // console.log(shouldServeDrinks(30, true) , false)

    // 24 ==> Is the String Empty?
    //     Create a function that returns true if a string is empty and false otherwise.
    //     isEmpty("") ➞ true
    //     isEmpty(" ") ➞ false
    //     isEmpty("a") ➞ false
    //     A string containing only whitespaces " " does not count as empty.


    function isEmpty(str){
      return str === "";
    }

//         // console.log(isEmpty("") , true)
//         // console.log(isEmpty(" ") , false)
//         // console.log(isEmpty("a") ,false)

// 25 ==> Compare Strings by Count of Characters
//     Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.
// console.log("25 --->")

function comp(str1,str2){
  return str1.length == str2.length;
}
// // console.log(comp("25 ","--->"))
// // console.log(comp("AB","CD"))
// // console.log(comp("ABD","DE"))
// // console.log(comp("hello","moien khan"))


// 26 ==> Multiple of 100
//     Create a function that takes an integer and return true if it's divisible by 100, otherwise return false.


function divisible(int){
// return (int%100)? true : false;
return int%100 == 0;
}

// console.log(divisible(1))
// console.log(divisible(1000))
// console.log(divisible(100))

// 27 ==> Check if an Integer is Divisible By Five

function divisibleByFive(int){
  // return (int%5==0)? true : false;
  return int%5==0;
}

// console.log(divisibleByFive(5))
// console.log(divisibleByFive(-55))
// console.log(divisibleByFive(37))

// 28 ==> Recursion: Length of a String
//     Write a function that returns the length of a string. Make your function recursive.

function length(str){
  return str.length
}
// console.log(length("apple"))
// console.log(length("make"))
// console.log(length("a"))
// console.log(length(""))

// 29 ==> Return a String as an Integer
//     Create a function that takes a string and returns it as an integer.

function stringInt(str){
  return  +str;
}
// console.log(stringInt("6"))
// console.log(stringInt("1000"))
// console.log(stringInt("12"))

// 30 ==> Divides Evenly
//     Given two integers, a and b, return true if a can be divided evenly by b. Return false otherwise.

function dividesEvenly(a,b){
  return a%b==0;
}

// console.log(dividesEvenly(98, 7 ))
// console.log(dividesEvenly(85, 4 ))
