// This function takes a string and returns the first character of the string

function firstCharacter (string) { // created function
    return (string)[0];
}
firstCharacter("Aviva"); //this will display the first letter "A"

firstCharacter("Hi"); // this will display "H"

firstCharacter(" "); // this will display an empty space " "

function lastCharacter (string) {
    return string[string.length-1]
}

/// This function takes a string and returns the last character of the string

lastCharacter("Pamplemousse"); //this will return the last letter "e"

lastCharacter("I am learning about functions"); // this will return "s"

lastCharacter(" "); // this will return an empty string " "

///  this function takes a string and a number, and returns the character at the position represented by the number

function whereIsTheNumber (string, number) {
    return string[number];
}

whereIsTheNumber("Hi", 1); // this will return "i"
whereIsTheNumber("Sunshine", 3); // this will return "s"
whereIsTheNumber(" ", 0); // this will return a blank space " "

/// this function adds two numbers together

function addingTwoNumbers (num1, num2) {
  return num1 + num2;   
}

addingTwoNumbers (1, 2); /// this returns 3
addingTwoNumbers (12, 1.5); /// this returns 13.5
addingTwoNumbers ("pickles", 75); /// this will return "pickles75"

/// function that takes two numbers and multiplies them together

function multiplyingTwoNumbers (num1, num2) {
  return num1 * num2;   
}
multiplyingTwoNumbers(47, 567345); /// this will return 26665215
multiplyingTwoNumbers(1, 1.5); /// this will return 1.5
multiplyingTwoNumbers("piglets", 75); /// this will return NaN (not a number)

/// function that takes two numbers and a string, returns various results

function numNumString (num1, num2, string) {
 if (string === "add")  {
     return (num1 + num2);
 }
    else if (string === "subtract") {
        return (num1 - num2);
    }
    else if (string === "mult") {
        return (num1 * num2);
    } 
    else if (string === "div") {
        return (num1 / num2);
    }
        else {
            return 0;
        }
};

numNumString(3, 4, "add"); // this will return 7
numNumString(27, 65, "subtract"); // this will return -38
numNumString(5, 6, "mult"); // this will return 30
numNumString(5, 6, "div"); // this will return 0.8333333333333334
numNumString(1, 2, "koala"); // this will return 0

// this function takes a string and a number, and returns the string repeated that many number of times

function repeatString (string, number) { 
    return (new Array(number+1)).join(string); 
}

repeatString("Good morning!", 3); // this will return Good morning!Good morning!Good morning!
repeatString("hello", 5); // this will return "hellohellohellohellohello"
repeatString("hello ", 5); // this will return it with spaces "hello hello hello hello hello " 

// reverse string

function reverseString(s) {
  return s.split('').reverse().join('');
}
reverseString("The quick brown fox"); // this will return "xof nworb kciuq ehT"
reverseString(""); // returns an empty space ""

// factorials

function factorialNum (num)
{
    if (num < 0) { 
        return "This number cannot be factorialized";
    }
    else if (num == 0) {
        return 1;
    }
    else {
        return (num * factorialNum(num - 1));
    }
}
factorialNum(4); // this will return 24
factorialNum(-10); // this returns "This number cannot be factorialized"

// return the longest word in a string

function longestWord (str){
    var replaced = str.replace(/[^A-Za-z\s]/g,"");
    var last = replaced.split(" ").sort(function(a,b) { // comparing and sorting word lengths for conflicts
        return b.length - a.length
    })
    return last[0];
    }
    longestWord("This sentence contains one word longer than others, which may or may not be hippopotamus"); // this will return hippopotamus
    longestWord("Some of these words are the same length, Alanna"); // this will return length
    
    // this function will take a phrase, and returns the same phrase with every word capitalized.
    
    function capitalizeMe(str)
{
    return str.replace(/\w\S*/g, function(txt) { //  RegExp pattern replaced by the return value of second parameter
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); // substr is replaced by new substring in new function
        
    });
}

capitalizeMe("hi HeLlO BONJOUR holA"); // will return "Hi Hello Bonjour Hola"
capitalizeMe("the united states of america"); // will return "The United States Of America"
capitalizeMe(""); // will return ""

// return the largest number in an Array

Array.max = function( array ){
    return Math.max.apply( Math, array );
};

Array.max([5, 6]); // this will return 6
Array.max([6789, 2, 67, 888]); // this will return 6789

// filter out falsey answers

function filterForTruthy(array){
    var filteredArray = array.filter(function(val) {
	    return !(val === "" || typeof val == "undefined" || val === null || val === false || val === 0);
    });
    return filteredArray;
}

filterForTruthy([5, 6, 0]); // returns array with 5, 6
filterForTruthy([6, "ooglet", 45, 0, 34.9, ""]); // returns  6, "ooglet," 45, 34.9


// return sum of all numbers in an array

var total = [0, 4, 56, 1].reduce(function(a, b) { // the reduce function -- REDUCING the values of the array to the total (a) + the number itself (b)
  return a + b;
}); // will return 61