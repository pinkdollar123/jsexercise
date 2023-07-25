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

//?  Lazy matching using ? flags used dot . for all and * zero to any and ? for lazy matching

let text = "<h1>Winter is coming</h1>";
let myRegextest = /<.*?>/; // Change this line
let resulttest = text.match(myRegextest);

// using caret ^  the caret is used to search for patterns at the beginning of strings. 

let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString);
let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst);


let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let resultcal = calRegex.test(rickyAndCal);

// ? Match ending string pattern You can search the end of strings using the dollar sign character $ at the end of the regex.

let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding);
let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding);

// * Match all letters and numbers The closest character class in JavaScript to match the alphabet is \w This character class matches upper and lowercase letters plus numbers. Note, this character class also includes the underscore character (_).

let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
let shortHandGlobal = /\w/g;
longHand.test(numbers);
shortHand.test(numbers);
longHand.test(varNames);
shortHand.test(varNames);

// * Match Everything But Letters and Numbers You can search for the opposite of the \w with \W. Note, the opposite pattern uses a capital letter. This shortcut is the same as [^A-Za-z0-9_].

 shortHand = /\W/;
 numbers = "42%";
 sentence = "Coding!";
numbers.match(shortHand);
sentence.match(shortHand);

// * Matching all digit characters using \d This is equal to the character class [0-9], which looks for a single character of any number between zero and nine.

// Your regex should find 1 digit in the string 9.
// Waiting: Your regex should find 2 digits in the string Catch 22.
// Waiting: Your regex should find 3 digits in the string 101 Dalmatians.
// Waiting: Your regex should find no digits in the string One, Two, Three.
// Waiting: Your regex should find 2 digits in the string 21 Jump Street.
// Waiting: Your regex should find 4 digits in the string 2001: A Space Odyssey.

let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let resultdigit = movieName.match(numRegex).length;


// * Matching all non digit characters using \D This is equal to the character class [^0-9], which looks for a single character that is not a number between zero and nine.

// Waiting: Your regex should find no non-digits in the string 9.
// Waiting: Your regex should find 6 non-digits in the string Catch 22.
// Waiting: Your regex should find 11 non-digits in the string 101 Dalmatians.
// Waiting: Your regex should find 15 non-digits in the string One, Two, Three.
// Waiting: Your regex should find 12 non-digits in the string 21 Jump Street.
// Waiting: Your regex should find 17 non-digits in the string 2001: A Space Odyssey.

let movieNamenon = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let resultnon = movieNamenon.match(noNumRegex).length;

// *You need to check all the usernames in a database. Here are some simple rules that users have to follow when creating their username.

//   *  Usernames can only use alpha-numeric characters.

//    * The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.

//    * Username letters can be lowercase and uppercase.

//    * Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.



let username = "JackOfAllTrades";
let userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i; // Change this line
let userResult = userCheck.test(username);


/*
Code Explanation
^ - start of input
[a-z] - first character is a letter 
[0-9]{2,} - ends with two or more numbers
| - or
[a-z]+ - has one or more letters next
\d* - and ends with zero or more numbers
$ - end of input
i - ignore case of input
*/

// * You can search for whitespace using \s, which is a lowercase s. This pattern not only matches whitespace, but also carriage return, tab, form feed, and new line characters. You can think of it as similar to the character class [ \r\t\f\n\v].

let whiteSpace = "Whitespace. Whitespace everywhere!"
let spaceRegex = /\s/g;
whiteSpace.match(spaceRegex);


// * Search for non-whitespace using \S, which is an uppercase s. This pattern will not match whitespace, carriage return, tab, form feed, and new line characters. You can think of it being similar to the character class [^ \r\t\f\n\v].

let whiteSpace2 = "Whitespace. Whitespace everywhere!"
let nonSpaceRegex = /\S/g;
whiteSpace2.match(nonSpaceRegex).length;

// Specify Upper and Lower Number of Matches

// Recall that you use the plus sign + to look for one or more characters and the asterisk * to look for zero or more characters. These are convenient but sometimes you want to match a certain range of patterns.

// You can specify the lower and upper number of patterns with quantity specifiers. Quantity specifiers are used with curly brackets ({ and }). You put two numbers between the curly brackets - for the lower and upper number of patterns.

// For example, to match only the letter a appearing between 3 and 5 times in the string ah, your regex would be /a{3,5}h/.

let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
multipleA.test(A4);
multipleA.test(A2);

// * with space locator

let ohStr = "Ohhh no";
let ohRegex = /oh{3,6}\sno/i; // Change this line
let resultspace = ohRegex.test(ohStr);

// * Specify Only the Lower Number of Matches You can specify the lower and upper number of patterns with quantity specifiers using curly brackets. Sometimes you only want to specify the lower number of patterns with no upper limit.

// ? To only specify the lower number of patterns, keep the first number followed by a comma. For example, to match only the string hah with the letter a appearing at least 3 times, your regex would be /ha{3,}h/.

A4 = "haaaah";
A2 = "haah";
let A100 = "h" + "a".repeat(100) + "h";
multipleA = /ha{3,}h/;
multipleA.test(A4);
multipleA.test(A2);
multipleA.test(A100);


let haStr = "Hazzzzah";
let haRegex = /haz{4,}ah/i; // Change this line added i flag to enable ignorecase for the string
let resulthaz = haRegex.test(haStr);

// * Specify Exact Number of Matches To specify a certain number of patterns, just have that one number between the curly brackets.

// ? For example, to match only the word hah with the letter a 3 times, your regex would be /ha{3}h/.

// ! Change the regex timRegex to match the word Timber only when it has four letter m's.

let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Change this line
let resulttim = timRegex.test(timStr);

// * Check for All or None

