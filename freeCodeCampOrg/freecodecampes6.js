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