"use strict";

var time = new Date();

console.log("Current time : \n", time);

time = new Date(2019, 9, 21, 14, 25, 35);
console.log("Year, Month, Day, hour, min, sec : \n", time);

time = new Date("November 6, 2019");
console.log("Initialized with a date string : \n", time);

time = new Date("2023-10-20");
console.log("Initialized with (yyyy-mm-dd) : \n", time);

time = new Date();
console.log("Current time in my timzone : \n", time);

console.log("My timezone offset in minutes: \n", time.getTimezoneOffset());
console.log("The UTC time is : \n", time.toUTCString());
console.log("The time in ISO is: \n", time.toISOString());
console.log("The time in JSON format is : \n", time.toJSON());