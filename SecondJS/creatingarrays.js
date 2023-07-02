"use strict";

// Array in Javascript can be heterogenuos which consist string or numbers within the array

let studentGrades = ["A", "B", 3, "D", 5];
/*
*Displays the length of the array, Accessing Index through arrayName[index number], accessing arrays using negative index is not allowed in javascript
*/
// console.log("The length of array", studentGrades.length);
// console.log("Accessing index 3:", studentGrades[3]);
// console.log("Accessing index 5:", studentGrades[5]);
// console.log("Accessing index 2:", studentGrades[2]);
// console.log("Accessing index 0:", studentGrades[0]);
// console.log("Accessing index -3", studentGrades[-3]);
console.log("Iterating over elements with the old syntax : \n");
var i;
/*
*first argument is initialization
*Second is condition to be met and continue
*each iteration while it's continuing the value of passed variable will increment by 1
*For each iteration of the for loop it will passed to access the array
*/
for (i = 0; i < studentGrades.length; i++){
    console.log(studentGrades[i]);
}

/*
*ES6 SYNTAX
* for(i of arrayName){code block}
*/
console.log("Iterating over elements with ES6 syntax: \n");
for (i of studentGrades){
    console.log(i);
}

console.log("Elements in vowels: \n");
let vowels = new Array("A","E","I","O","U");

for (i of vowels){
    console.log(i);
}

let grades = [];

grades[0] = "a";
grades[1] = "b";
grades[2] = "c";
grades[3] = "d";
grades[4] = "e";
grades[6] = "G";
grades[8] = "i";
grades[10] = "K";

console.log("Length: ", grades.length);
console.log("Elements in the grades array: \n");

for(i of grades){
    console.log(i);
}

let testScores = [43, 64, 81, 91, 39, 73];

function flagGoodScore(score){
    if(score > 70) {
        console.log(`The score of ${score} is good!`);
    }else if (score < 70 ){
        console.log(`The score of ${score} is bad`);
    }
}
console.log("Iterating over the test scores with forEach: \n");
/*
*Using forEach() passing the function as argument to forEach and the parameters from the testScores. forEach() method accepts 3 arguments, (currentValue, index, array) in the situation below the index forEach in the array was incremented by += 10

*/

testScores.forEach(flagGoodScore);
testScores.forEach((currentValue, index, array) => {
    currentValue += 20;
    testScores[index] += 10;
  });
console.log("Updated test scores:", testScores) ;