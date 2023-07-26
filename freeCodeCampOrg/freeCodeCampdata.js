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

// * using indexOf and array[i] indexes to check if the element matching is not locatedi inside an array, if not match then it will push the array that doesn't have the matching element.

function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line
  for(let i = 0; i < arr.length; i++){
    if(arr[i].indexOf(elem) == -1){
      newArr.push(arr[i]);
    }
  }
  // Only change code above this line
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

// * Nested array in 5 levels

let myNestedArray = [
  // Only change code below this line
  'level 1',                   /* myNestedArray[0]             */
  ['level 2'],	               /* myNestedArray[1][0]          */
  [['level 3','deep']],	       /* myNestedArray[2][0][0]       */
  [[['level 4','deeper']]],    /* myNestedArray[3][0][0][0]    */
  [[[['level 5','deepest']]]]  /* myNestedArray[4][0][0][0][0] */
  // Only change code above this line
];

// *object adding property objectname.propertyname = values;

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

// Only change code below this line
foods.bananas = 13;
foods.grapes = 35;
foods.strawberries = 27;
// Only change code above this line

console.log(foods);

// *object accessing and modifying existing property values

let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};

// Only change code below this line
userActivity.data.online = 45;
// Only change code above this line

console.log(userActivity);

// * checking an object if there's an item or property inside that object

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

function checkInventory(scannedItem) {
  // Only change code below this line
  let newfoods = foods[scannedItem];
  return newfoods;
  // Only change code above this line
}

console.log(checkInventory("apples"));

// * deleting foods using delete object

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

// Only change code below this line
delete foods['oranges'];
delete foods['plums'];
delete foods['strawberries'];
// Only change code above this line

console.log(foods);

// * Using hasOwnProperty() in objects or 'propertyname' in Objectname, objectname.hasOwnProperty()

let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(userObj) {
  return ["Alan", "Jeff", "Sarah", "Ryan"].every(name =>
    userObj.hasOwnProperty(name)
  );
}

// Uses an array with all of the names which should be present in the object.
// The every method is used to validate all of names used in conjunction with the hasOwnProperty method result in a value of true being returned during each iteration.
// If at least one name is not found using the hasOwnProperty method, the every method returns false.


console.log(isEveryoneHere(users));

// * counting all the true count of an object property.

const usersNew = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(allUsers) {
  // Only change code below this line
  let onlineCount = 0;

  for(const user in allUsers){
    if(allUsers[user].online === true){
      onlineCount++;
    }
  }
  return onlineCount;
  // Only change code above this line
}

console.log(countOnline(usersNew));

