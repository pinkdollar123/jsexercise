// ? If you want to find the word the in the string The dog chased the cat, you could use the following regular expression: /the/. Notice that quote marks are not required within the regular expression.

// ? JavaScript has multiple ways to use regexes. One way to test a regex is using the .test() method. The .test() method takes the regex, applies it to a string (which is placed inside the parentheses), and returns true or false if your pattern finds something or not.

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // Change this line

console.log(result);

// * Waldo is being searched below, now waldo and WaLDo or any other WALDO is not equal to Waldo itself, this means it will return false this is called string literal
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result2 = waldoRegex.test(waldoIsHiding);

console.log(result2);

// ? using OR operator | you can pass multiple checks when matching a string, multiple patterns is possible

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result3 = petRegex.test(petString);

console.log(result3);
let petString2 = "Emma has a pet fish";
console.log(petString2);
petString2 = "Emma has a pet rock";
console.log(petString2);
