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

// *You can match both cases using what is called a flag. There are other flags but here you'll focus on the flag that ignores case - the i flag. You can use it by appending it to the regex. An example of using this flag is /ignorecase/i. This regex can match the strings ignorecase, igNoreCase, and IgnoreCase.

let carString = "John's car is Rock"
let carRegex = /Toyota|honda|Mitsubishi/i;
let carResult = carRegex.test(carString);
console.log(carResult);
carString = "James car is toYota";
carResult = carRegex.test(carString);
console.log(carResult)

// *You can also extract the actual matches you found with the .match() method. To use the .match() method, apply the method on a string and pass in the regex inside the parentheses.

let carPull = carString.match(carRegex);
console.log(carPull);
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result4 = extractStr.match(codingRegex); // Change this line
console.log(result4);

// * multiple regex conditon using global = g and i=ignorecase finding multiple values on the given string matching it using global
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; // Change this line
let result5 = twinkleStar.match(starRegex); // Change this line

// * Match Anything with Wildcard Period dot . For example, if you wanted to match hug, huh, hut, and hum, you can use the regex /hu./ to match all four words.

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let result6 = unRegex.test(exampleStr);
console.log(result6);