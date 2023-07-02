console.log("Hello world! This is the console message");

document.getElementById("code").innerHTML = "Hello world! This is from the setting of the innerHTML";

document.getElementById("numericsection").innerHTML = 30;
document.getElementById("textsection").innerHTML = "Name: John";
// declare a variable with empty value;
var a;
// assigns a value to the variable;
a = 10;
// declares multiple variables in one line
var b, c;
// Multiple values in one line
b = c = 20;

// using semicolon ; is defined as line termination chracater in JS

// declared variables without assigning var, let , const
x = a + 30;

/* Put a string then append the value of variable a
the a variable has integer value however in Javascript engine it translate as string*/
console.log("Value of a: " + a);
console.log("Value of b: " + b);
console.log("Value of c: " + c);
console.log("Value of x: " + x);

// assigns a variable and uses asterisk to perform multiplication operation
y = b * c;
console.log("The value of y :" + y);


// Define variables using different naming conventions
StudentName = "Zosimo";          // Variable name in Upper Camel Case
studentName = "Zeus";            // Variable name in Lower Camel Case
student_name = "Zenon";          // Variable name with underscores

// Print the values of the variables
console.log("The variable (Upper Camel Case) :" + StudentName);
console.log("The variable (Lower Camel Case) :" + studentName);
console.log("The variable (underscore) :" + student_name);

// Define variables using different string declaration methods
singleQuoteString = 'Declared within single quotes';     // String declared within single quotes
backTickString = `Declared within back ticks`;           // String declared within back ticks

// Print the values of the string variables
console.log('The singleQuoteString: %s', singleQuoteString);
console.log(`The backtickString : ${backTickString}`);

