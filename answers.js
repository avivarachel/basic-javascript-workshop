// This function takes a string and returns the first character of the string

function firstCharacter (letters) { // created function
    return (letters)[0];
}
firstCharacter("Aviva"); //this will display the first letter "A"

firstCharacter("Hi"); // this will display "H"

firstCharacter(" "); // this will display an empty space " "

function lastCharacter (string) {
    return string[string.length-1]
}

lastCharacter("Pamplemousse"); //this will return the last letter "e"

lastCharacter("I am learning about functions"); // this will return "s"

lastCharacter(" "); // this will return an empty string " "

function whereIsTheNumber (string, number) {
    return string[number];
}
whereIsTheNumber("Hi", 1); // this will return "i"
whereIsTheNumber("Sunshine", 3); // this will return "s"
whereIsTheNumber(" ", 0); // this will return a blank space " "
