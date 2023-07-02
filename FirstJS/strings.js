"use strict";

let str_double_quotes = "Javascript";
let str_single_quotes = 'It is a programming language';

console.log("Welcome to" + str_double_quotes);
console.log("It is a " + str_single_quotes);

let str_back_sticks = `is ${str_double_quotes} a ${str_single_quotes}`;
console.log("String with back ticks :" , str_back_sticks);

let sum = `${1+2+3}`;
console.log(`The expression evaluated to a value of ${sum}`);
console.log("The expression evaluated to a vaule of ${sum}");

let sentence = "I \"love\" spinach";
console.log("String defined with escape characters", sentence);

let multiline_str = `
    This is a
    string which
    spans multiple lines`;
console.log("A multi-line string: \n", multiline_str);

// Declare variables and assign string values
var name_str1 = "David";                              // Declare a variable and assign the string value "David"
var name_str2 = "David";                              // Declare another variable and assign the string value "David"

// Create String objects with string values
var name_obj1 = new String("David");                   // Create a String object with the value "David"
var name_obj2 = new String("David");                   // Create another String object with the value "David"

// Print the type of variables using the typeof operator
console.log("Type of name_str1 :", typeof name_str1);  // Print the type of the variable name_str1 (string)
console.log("Type of name_obj1 :", typeof name_obj1);  // Print the type of the variable name_obj1 (object)

// Compare variables using the equality operator (==)
console.log("Is name_str1 == name_str2?", name_str1 == name_str2);  // Check if name_str1 is equal to name_str2 (true)
console.log("Is name_str1 == name_obj1?", name_str1 == name_obj1);  // Check if name_str1 is equal to name_obj1 (true)
console.log("Is name_obj1 == name_obj2?", name_obj1 == name_obj2);  // Check if name_obj1 is equal to name_obj2 (false)

// Compare the values of String objects using the valueOf method
console.log("Is the valueOf name_obj1 double equal to valueOf name_obj2?", name_obj1.valueOf() == name_obj2.valueOf());  // Check if the value of name_obj1 is equal to the value of name_obj2 (true)

// Declare and assign a string to the variable empName
let empName = "Zosimo Uy";

// Print the number of characters in the empName string using the length property
console.log("Number of characters in empName is: " + empName.length);
// Output: Number of characters in empName is: 10

// Print the index of the first occurrence of the character 'm' in the empName string using indexOf method
console.log("Index of 'm' is: " + empName.indexOf("m"));
// Output: Index of 'm' is: 7

// Print the index where the substring 'Uy' first occurs in the empName string using search method
console.log("'Uy' occurs at position: " + empName.search("Uy"));
// Output: 'Uy' occurs at position: 8

// Declare and assign a string to the variable line
var line = "Fundamentals of Javascript";

// Print the original line
console.log(`Original line: ${line}`);
// Output: Original line: Fundamentals of Javascript

// Extract a portion of the line string using the slice method with start and end indices
console.log(`Slice (1,12): ${line.slice(1,12)}`);
// Output: Slice (1,12): undamentals

// Extract a portion of the line string using negative indices for slicing
console.log(`Slice (-23, -15): ${line.slice(-23, -15)}`);
// Output: Slice (-23, -15): of Java

// Extract a portion of the line string starting from a specific index until the end
console.log(`Slice (13): ${line.slice(13)}`);
// Output: Slice (13): Script

console.log("Replacing 'Javascript' with 'Web Programming'", line.replace("Javascript", "Web Programming"));
console.log("Replacing 'javascript' with 'Python'", line.replace("javascript", "Python"));
console.log("Replacing 'javascript/i' with 'Python'", line.replace(/javascript/i, "Python"));
console.log("Default replace of 'a' with 'A' :", line.replace("a", "A"));
console.log("Global replace of 'a' with 'A' : ", line.replace(/a/g, "A"));

console.log("Splitting the line on space : ", line.split(" "));

var myString = "    Hey, this is JS     ";
console.log("Before the trim operation :", myString);
console.log("Before the trim operation :" + myString.trim());







// class StringSet {
//     constructor(text){
//         this.text = text;
//     }
//     textLength(){
//         return this.text.length;
//      }
// }

// const stringList = document.getElementById("stringList");

// const setStrings = [
//     new StringSet("1"),
//     new StringSet("To"),
//     new StringSet("Tre"),
//     new StringSet("Four"),
// ]

// for (const string of setStrings)
// {
//     const newStringElement = document.createElement('li');
//     newStringElement.innerHTML = `This String consist a length of \"${string.text.length}\" characters: ${string.text}`

//     stringList.appendChild(newStringElement);
// }

