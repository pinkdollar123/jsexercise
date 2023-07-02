"use strict";

let foodItems = [
    { name: 'Pizza', price: 10 },
    { name: 'Burger', price: 5 },
    { name: 'Salad', price: 8 },
    { name: 'Ice Cream', price: 4 },
    { item: 'Steak', price: 25 },
    { item: 'Sushi', price: 30 },
    { item: 'Pasta', price: 35 },
    { item: 'Chicken Wings', price: 40 },
    { item: 'Tacos', price: 45 },
    { item: 'Sandwich', price: 50 }
  ];
  
//   * To get all the array of prices first create a blank array named prices
let prices = [];

for(let item of foodItems){
    prices.push(item.price)
}

console.log(`Price list using for loop: ${prices}`);

// * array.map is a built in function for every array and the argument to this is a function, that function itself has an argument which is an element of the array as a reference below each element was called item and the function body defines exactly what needs to be done with that item and it will become a new set of array in the given variablearray
let pricelist = foodItems.map(function(item){
    return item.price ;
    // * This also accepts other operation for each elements
    // * as an example item.price * 2 will equate to // 20, 10, 16, 8
    // * modifying the argument will require the same parameter should be used
    // *
})

console.log(`Price list after using Array.map()`, pricelist);   

// * Redefining map method using ES6 Syntax this method definition is much more concise. In a callbackFn function it accepts the currentValue, index:number, then a new set of array

pricelist = foodItems.map((item) => { 
    return item.price;});

console.log("Price list after mapping (with ES6 syntax)", pricelist);

// *common aggregation using for-loop, for loop syntax consist of a newly set of syntax. for (let var of varArray/Objects){ var.properties }

let total = 0;
// *Adding all the prices from the array of objects
for(let item of foodItems) {
    total += item.price;
}

console.log("The total of prices using forloop ES6", total);
// *array.reduce() method aggregate operation first element serves as the accumulator, at each iteration, this is the value which will be updated by a logic, the second argument to reference each element named item below, so in each iteration the second argument "item" was used in order to update sum, the last value which is 0 represents the initial value of the accumulator variable which is 0

let totalReducer = foodItems.reduce((sum,item) => sum + item.price, 0);
console.log("Total cost of items using reduce method", totalReducer);

// *array.filter() method this is used to create a nw array out of the elements of an existing one, except by applying a certain condition, so the items in array contains a collection of objects but we want only to create a new set of array passing the condition

let expensiveItems = foodItems.filter(item => item.price >= 35);
console.log("These are the list of expensive items: ", expensiveItems);

// * Another feature is by using the newly created array it can be used to aggregate the prices using reduce() method

let costExpensiveItems = expensiveItems.reduce((sum, item) => sum + item.price, 0);

console.log("The total price of expensive items:", costExpensiveItems);

// * New method to get the unique values in an array of duplicate elements

const values = [3,1,3,5,2,2,4,4,4];
// * In order to extract the unique elements in the array we need to convert it to a new Set(); We create a setOfValues by creating a new set out of our values array above, while it contains the unique elements from the array, however it it's not in a form of array instead Set, so in order to convert that into an array we need to use a spread syntax which also can be apply to a Set so that it becomes part of a unique valeus array.
const setOfValues = new Set(values);
const uniqueValues = [...setOfValues];

console.log("The values : \n", values);
console.log("The setOfValues : \n", setOfValues);
console.log("The uniqueValues : \n", uniqueValues);
