"use strict";

let prices = new Array(10, 35, 45, 60, 90);

let shallowCopy = prices;

console.log("Beforechanging shallowCopy, prices = \n", prices);

shallowCopy[0] = 70;

console.log("After changing shallowCopy, prices = \n", prices)

/*
*The original copy was changed by pointing the shallowCopy and the existing array
*When a shallowCopy was made we simply have another variable pointing to the same data
*/

/* 
*Independent array copy or deepCopy
*On the example below the existing array prices wasn't changed by deepCopy and instead they are entirely dependent from each other
*/

let deepCopy = prices.slice();

console.log("Before changing deepCopy, prices = \n", prices);

deepCopy[0] = 'Eigthy';
console.log("After changing deepCopy, prices = \n ", prices);
console.log("The contents of deepCopy = \n", deepCopy);

/*
* Other array element methods
*/

prices.push(100);
console.log("Contents of prices after a push method", prices);
// Inserts a new element to the array and returns a new length of array
prices.unshift(0);
console.log("COntents of prices after an unshift method", prices);
// Removes the last element of the array and returns a new length of array
prices.pop();
console.log("Contents of prices after a pop", prices);
// shift removes the first element of the array and returns a new length of array
prices.shift();
console.log("Contents of prices after a shift", prices);
// removes an element in the middle of array or based on the index location
delete prices[2];
console.log("Contents of prices after a delete at index 2", prices);

let dogBreeds = [
    "Labrador Retriever",
    "German Shepherd",
    "Golden Retriever",
    "Bulldog",
    "Beagle",
    "Poodle",
    "Rottweiler",
    "Boxer",
    "Siberian Husky",
    "Dachshund"
  ];
  
  console.log("Original contents of dogBreeds : \n", dogBreeds);

//  * splice method() accepts four arguments = (index of array, elements to be removed, "Values", Values)

dogBreeds.splice(3, 0, "Sharky", "Baki");
console.log("Updated contents of dogBreeds using splice(3, 0): \n", dogBreeds);

dogBreeds.splice(1, 2, "Indiyano");
console.log("Updated contents of dogBreeds using splice(1, 2): \n", dogBreeds);


/* 
*slice method() any modifications will happen on thecopy of the original array, it's a piece of the orignal array however it's only a copy. The given index is the first element where it will start and copied as a new array. Can accept to parameters starting index and ending index for the slice() method
*/
let sliceOfDogBreeds = dogBreeds.slice(3);
console.log("dogBreeds.slice(3) = \n", sliceOfDogBreeds);

sliceOfDogBreeds = dogBreeds.slice(0, 3);
console.log("dogBreeds.slice(0, 3) = \n", sliceOfDogBreeds);

sliceOfDogBreeds = dogBreeds.slice(-3,-2);
console.log("dogBreeds.slice(-4, -1)", sliceOfDogBreeds)

// * Concatenating Arrays, returns a new copy of array that's being added or concatenated and doesn't change the existing arrays and accepts sequence of arrays

let europeOffices = ["London", "Paris", "Berlin"];
let africaOffices = ["Cairo", "Johannesburg", "Nairobi"];
let oceaniaOffices = ["Sydney", "Auckland", "Brisbane"];

console.log("Europe Offices:", europeOffices);
console.log("Africa Offices:", africaOffices);
console.log("Oceania Offices:", oceaniaOffices);

let southernOffices = africaOffices.concat(oceaniaOffices);
console.log("SouthernOfffices : \n", southernOffices);

let allOffices = africaOffices.concat(europeOffices, oceaniaOffices);
console.log("All offices are : \n", allOffices);

// * sort() method make sure to create a copy of the array using slice
let sortedOffices = allOffices.sort();
console.log("This is the sorted offices", sortedOffices);
console.log("Test if the array was affected by sort() method \n", allOffices);

// *reverse() sort

let revertOffices = allOffices.reverse();
console.log("Reverse sorting of all offices : \n", revertOffices);

// *invoke again the array to fix it

allOffices = africaOffices.concat(europeOffices, oceaniaOffices);
// *one of avaialable methods to initialize a new array using spread syntax and add sort() method
console.log("Sorted copy of alloffices using spread syntax: \n", [...allOffices].sort());
console.log("Sorted copy of alloffices using slice syntax: \n", allOffices.slice().sort());

console.log("Testing alloffices \n", allOffices)

let numArray = [ 3, 4, 20 , 35, 100, 9];
console.log("Original elements of numArray:  \n", numArray);

// * sorting numbers using sort() array will not properly work due to the array sort() reads the first string of the numbers to sort it. In order to solve the ordering of the numbers in an array a function should be used and pass an argument and requires return + the given parameters. By reversing the default function below the sort can be reverse using sort

numArray.sort((a, b) => {return a - b});
console.log("Sorted numArray with compareFunction or compareFn \n", numArray);

numArray.sort((a, b) => {return b - a});
console.log("Reverse sorted array with compareFunction", numArray);

let myArray = [ 15, 18, 21, 3 , 6, 9 , 12];
console.log(myArray.sort());

let rectArea = (length, breadth) => length * breadth;

let newrectangle = rectArea(5,8);
console.log("this is it", newrectangle);