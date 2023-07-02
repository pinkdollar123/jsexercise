"use strict";

console.log("The min of 1,2,3 :", Math.min(1,2,3));

let arr1 = [1,2,3];

console.log("The min of arr1 (without spread) :", Math.min(arr1));
console.log("The min of arr1 (with spread) :", Math.min(...arr1));

let arr2 = [4,5,6];
let arr3 = [7,8,9];

console.log("The min of arr2 and arr3 :", Math.min(...arr2, ...arr3));
console.log("The min of arr2 and arr3  and others:", Math.min(...arr2, 0, ...arr3, 25));

let arrays = [...arr1, 25, ...arr3, ...arr2, 35];

console.log("The set of multiple arrays : ", arrays);

let str = "Learning";
let str2 = "Upskilling";
console.log("str = :", str);
//* Applying spread syntax to string breaks it up into its constituent characters
console.log("Array formed by spreading str: \n", [...str]);

console.log("Array formed with Array.from(str): \n", Array.from(str2));