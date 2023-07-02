"use strict";

/*
*A while loop in JavaScript repeatedly executes a block of code as long as a specified condition remains true. It consists of a condition and a code block. The condition is checked before each iteration, and if it is true, the code block is executed. The loop continues until the condition becomes false. While loops are useful for automating repetitive tasks and iterating over code until a specific condition is no longer met. However, it's important to ensure the condition eventually becomes false to avoid infinite loops.
*/

console.log("While Loops");
console.log("Integers from 1 to 10");

let i = 1;
/*
while (i <= 10) {
    console.log(i);
    i++;
}

i = 1;

while (i <= 20) { // Repeat the loop until the counter reaches 20 or exceeds it
    let num = i % 2; // Calculate the remainder when i is divided by 2

    if (num === 0) { // Check if the remainder is 0, indicating an even number
        console.log(i); // Print the even number to the console
    }

    i++; // Increment the counter by 1 for the next iteration
}

console.log("Increasin order of series (with break)");

i + 1;

while (i < 10) { // Repeat the loop until the counter reaches 10
    console.log(i); // Print the current value of i to the console

    i++; // Increment the counter by 1 for the next iteration

    if (i === 5) { // Check if the counter is equal to 5
        break; // Exit the loop if the condition is met
    }
}

console.log("Decreasing order of the serires (with contine)");

i = 11; // Initialize the variable i with a value of 11

while (i > 1) { // Repeat the loop as long as i is greater than 1
    i--; // Decrement the value of i by 1 in each iteration

    if (i === 5) { // Check if i is equal to 5
        continue; // Skip the rest of the code in this iteration and proceed to the next iteration
    }

    console.log(i); // Print the current value of i to the console
}

*/

console.log("do-while loops :");

let factorial = 1; // Initialize the factorial variable with a value of 1
let n = 5; // Set the value of n to 5, representing the number for which we want to calculate the factorial
i = 1; // Initialize the counter variable i with a value of 1

do {
    factorial *= i; // Multiply the current factorial value by the value of i
    console.log("Factorial at iteration " + i + " is: " + factorial); // Print the current factorial value for the current iteration
    i++; // Increment the value of i by 1 for the next iteration
} while (i <= n); // Repeat the loop as long as i is less than or equal to n

console.log("The factorial of 5 is: " + factorial); // Print the final factorial value for the number 5

console.log("for-loops");

let a = 0, b = 1, c;
let count = 10;

for (let i = 3; i <= count; i++){
    c = a + b;
    a = b;
    b = c;

    console.log(c);
}

console.log(45/0)
