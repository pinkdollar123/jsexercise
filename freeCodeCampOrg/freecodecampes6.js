function checkScope() {
    "use strict";
    // function scope / closure scope
    let i = "function scope";
    if (true) {
        // code block scope limited to code block scope
      let i = "block scope";
      console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
    return i;
  }


//   An array is declared as const s = [5, 7, 2]. Change the array to [2, 5, 7] using various element assignments.

const y = [5, 7, 2];
function editInPlace(arr) {
  // Only change code below this line

  return arr.sort();

  // Only change code above this line
}
editInPlace(y);



const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line

  s[0]= 2;
  s[1]= 5;
  s[2]= 7;

  // Only change code above this line
}
editInPlace();


function freezeObj() {
    const MATH_CONSTANTS = {
      PI: 3.14
    };
    // Only change code below this line
    Object.freeze(MATH_CONSTANTS);
  
    // Only change code above this line
    try {
      MATH_CONSTANTS.PI = 99;
    } catch(ex) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
  }
  const PI = freezeObj();

  const magic = () => { return new Date();}

//   Rewrite the myConcat function which appends contents of arr2 to arr1 so that the function uses arrow function syntax.

const myConcat = (arr1, arr2) => {
    return arr1.concat(arr2);
  };
  
  console.log(myConcat([1, 2], [3, 4, 5]));
  
  // rest parameter as argument in a function
const sum = (...args) => {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}

// assigning default value for value if value was undefined or 0
// Only change code below this line
const increment = (number, value = 1) => number + value;
// Only change code above this line

// copying the spread operator in an array1 to array 2

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Change this line

console.log(arr2);

// *DESTRUCTURING

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line

const {today , tomorrow} = HIGH_TEMPERATURES;

// Only change code above this line

// DESTRUCTURING AND REASSIGNING NEW VARIABLE NAMES AFTER A COLON OF THE EXISTING VARIABLE PROPERTY NAME

// Only change code below this line

const {today: highToday , tomorrow: highTomorrow} = HIGH_TEMPERATURES;

// Only change code above this line

// * Added destructuring of a property of an object in a nested objects

const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

// Only change code below this line
  
const {today: {low: lowToday, high: highToday}} = LOCAL_FORECAST;

// Only change code above this line

let a = 8, b = 6;

// Only change code below this line
// Use destructuring assignment to swap the values of a and b so that a receives the value stored in b, and b receives the value stored in a.
[a, b] = [8, 6];

[b, a] = [a, b];

// The variable a is assigned the first value of the array, and b is assigned the second value of the array. We can also access the value at any index in an array with destructuring by using commas to reach the desired index:

const [d, e,,, f] = [1, 2, 3, 4, 5, 6];
console.log(d, e, f);

// Use a destructuring assignment with the rest syntax to emulate the behavior of Array.prototype.slice(). removeFirstTwo() should return a sub-array of the original array list with the first two elements omitted. 

function removeFirstTwo(list) {
  // Only change code below this line
  const [a, b, ...shorterList] = list // Change this line
  // Only change code above this line
  return shorterList;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);
