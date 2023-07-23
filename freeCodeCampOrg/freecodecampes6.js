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