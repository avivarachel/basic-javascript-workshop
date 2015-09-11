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

