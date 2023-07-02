"use strict";

let myVariable = "350";
let myNumber = 42;
let myBoolean = true;
let myDate = new Date();

console.log("myVariable:", myVariable);
console.log("Type of myVariable:", typeof myVariable);

console.log("myNumber:", myNumber);
console.log("Type of myNumber:", typeof myNumber);

console.log("myBoolean:", myBoolean);
console.log("Type of myBoolean:", typeof myBoolean);

console.log("myDate:", myDate);
console.log("Type of myDate:", typeof myDate);

// * Type conversion

let num_str = String(myNumber);
console.log("Type of num cast to String :", typeof(num_str));
console.log("Value of num cast to String :", num_str);

// * Reverse operation

let str_num = Number(myVariable);
console.log("Type of str cast to Number", typeof(str_num));
console.log("Value of str cast to Number", str_num);

let boolean_str = String(myBoolean);
console.log("Type of boolean cast to Number", typeof(boolean_str));
console.log("Value of boolean cast to Number", boolean_str);

let date_str = String(myDate);
console.log("Type of date cast to String", typeof(date_str));
console.log("Value of date cast to String", date_str);

let date_num = Number(myDate);
console.log("Type of date cast to Number", typeof(date_num));
console.log("Vlaue of date cast to Number", date_num);

console.log("Boolean version of myVariable:", Boolean(myVariable));
console.log("Boolean version of myNumber:", Boolean(myNumber));
console.log("Boolean version of myBoolean:", Boolean(myBoolean));
console.log("Boolean version of myDate:", Boolean(myDate));
console.log("Boolean version of 0:", Boolean(0));
console.log("Boolean version of '' (empty string):", Boolean(""));

console.log("Value of null cast to string:", String(null));
console.log("Value of null cast to number:", Number(null));
console.log("Value of null cast to boolean:", Boolean(null));
