// * pushing and unshifting elements to the array

function mixedNumbers(arr) {
    // Only change code below this line
    arr.unshift('three');
    arr.unshift(2);
    arr.unshift('I');
    arr.push(7);
    arr.push('VIII');
    arr.push(9);
    // Only change code above this line
    return arr;
  }
  
  console.log(mixedNumbers(['IV', 5, 'six']));

//   * We have defined a function, popShift, which takes an array as an argument and returns a new array. Modify the function, using pop() and shift(), to remove the first and last elements of the argument array, and assign the removed elements to their corresponding variables, so that the returned array contains their values.

function popShift(arr) {
    let popped = arr.pop(); // Change this line
    let shifted = arr.shift(); // Change this line
    return [shifted, popped];
  }
  
  console.log(popShift(['challenge', 'is', 'not', 'complete']));

//   * splice returns a new array and also modifies the original array

const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line
arr.splice(0,2);
arr.splice(1,2);
arr.splice(2,2);
// Only change code above this line
console.log(arr);

// * splice with third parameter, splice third parameter accepts a new element to be added to the modified array

function htmlColorNames(arr) {
    // Only change code below this line
    let darkSalmon = "DarkSalmon";
    let blancedAlmond = "BlanchedAlmond";
  arr.splice(0,2, darkSalmon, blancedAlmond);
    // Only change code above this line
    return arr;
  }
  
  console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));


//   * slice method arr.slice(), copies or extracts a given number of elements to a new array, leaving the array it is called upon untouched. slice() takes only 2 parameters slice() takes only 2 parameters first index is the start of extraction and the second parameter is the end or stop of extraction leaving the covered elements are the new array set.

function forecast(arr) {
    // Only change code below this line
    let newArr = arr.slice(2,4);
    return newArr;
  }
  
  // Only change code above this line
  console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

// * copy machine using array spread operator and using push to push the number of array from while loop and using push() to insert all the array elements.

function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
      // Only change code below this line
        newArr.push([...arr])
      // Only change code above this line
      num--;
    }
    return newArr;
  }
  
  console.log(copyMachine([true, false, true], 2));

// * indexOf to check if an array consist an element of the array or checker, arr.indexOf(element), function arrChecker(arr, element){ code block }

function quickCheck(arr, elem) {
  // Only change code below this line
  if(arr.indexOf(elem) >= 0){
    return true;
  }else{
    return false;
  }
  // Only change code above this line
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

// ternaryusage
function quickChecker(arr,elem){
  return arr.indexOf(elem) >= 0 ? true: false;
}

console.log(quickChecker(['squash','onions','shallots','mushrooms'],'onions'));






