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

// * You can search for a literal pattern with some flexibility with character classes. Character classes allow you to define a group of characters you wish to match by placing them inside square ([ and ]) brackets.

// *For example, you want to match bag, big, and bug but not bog. You can create the regex /b[aiu]g/ to do this. The [aiu] is the character class that will only match the characters a, i, or u.

let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex);
bagStr.match(bgRegex);
bugStr.match(bgRegex);
bogStr.match(bgRegex);

// ? Use a character class with vowels (a, e, i, o, u) in your regex vowelRegex to find all the vowels in the string quoteSample.

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result7 = quoteSample.match(vowelRegex); // Change this line

// *Inside a character set, you can define a range of characters to match using a hyphen character: -. For example, to match lowercase letters a through e you would use [a-e].

let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let newRegex = /[a-e]at/;
catStr.match(newRegex);
batStr.match(newRegex);
matStr.match(newRegex);

let quoteSample2 = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
let result8 = quoteSample2.match(alphabetRegex); // Change this line

// ?Using the hyphen (-) to match a range of characters is not limited to letters. It also works to match a range of numbers. Also, it is possible to combine a range of letters and numbers in a single character set.

let jennyStr = "Jenny8675309";
let jRegex = /[a-z0-9]/ig;
jennyStr.match(jRegex);

// *you could also create a set of characters that you do not want to match. These types of character sets are called negated character sets.
// ?To create a negated character set, you place a caret character (^) after the opening bracket and before the characters you do not want to match.

let newquoteSample = "3 blind mice.";
let newmyRegex = /[^aeiou0-9]/ig; // Change this line
let newresult = quoteSample.match(myRegex); // Change this line

// * finding the character that appears one more time or in a row using the plus operator + as an example: /char+/g;

let difficultSpelling = "Mississippi";
let myRegexnew = /s+/g; // Change this line
let resultnew = difficultSpelling.match(myRegex);

// * regex finding characters that occurs zero or more times The character to do this is the asterisk or star: *.

let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
// Only change code below this line
let chewieRegex = /Aa*/; // Change this line
// Only change code above this line

let result9 = chewieQuote.match(chewieRegex);


