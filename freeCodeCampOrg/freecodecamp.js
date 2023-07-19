"use strict"

function chainToSwitch(val) {
    let answer = "";
    // Only change code below this line
  
    switch(val){
      case "bob":
      answer = "Marley";
      break;
  
      case 42:
      answer = "The Answer";
      break;
  
      case 1:
      answer = "There is no #1";
      break;
  
      case 99:
      answer = "Missed me by this much!";
      break;
  
      case 7:
      answer = "Ate Nine";
      break;
  
      case "John":
      case 156:
      return answer;
      break
    }
  
    // Only change code above this line
    return answer;
  }
  
  chainToSwitch("bob");
  chainToSwitch(42);
  chainToSwitch(1);
  chainToSwitch(99);
  chainToSwitch(7);
  chainToSwitch("John");
  chainToSwitch(156);

  // Setup
function abTest(a, b) {
    // Only change code below this line
    if (a < 0 || b < 0){
      return ;
    }
    // Only change code above this line
  
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
  }
  
  abTest(2,2);

  let count = 0;

function cc(card) {
  // Only change code below this line
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');


// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line

  let err = "";

  for(let i = 0; i < contacts.length; i++){
    
    if(contacts[i].firstName === name){
      if(contacts[i].hasOwnProperty(prop)){
        return contacts[i][prop];
      }else{
        return "No such property";
      }
    }
  }
  return "No such contact";
  // Only change code above this line
}

lookUpProfile("Akira", "likes");

function randomFraction() {

  // Only change code below this line
  let x = 0;
  while (x === 0){
   x = Math.random();
  }
return x;
  // Only change code above this line
}

function randomWholeNum() {

  return Math.floor(Math.random() * 10);
}

function randomRange(myMin, myMax) {
  
  let myMine = Math.floor(Math.random() *(myMax - myMin +1)) + myMin;

  return myMine;
}

function convertToInteger(str) {
  return parseInt(str);
  }
  
  convertToInteger("56");

  function convertToInteger(str) {
    return parseInt(str, 2);
  }
  
  convertToInteger("10011");

  // ternary
  function checkEqual(a, b) {
    return a === b ? "Equal" : "Not Equal";
   }
   
   checkEqual(1, 2);

   function checkSign(num) {
    return (num === 0) ? "zero"
    : (num > 0) ? "positive" : "negative" 
    
  }
  
  checkSign(10);

  // Only change code below this line
function countdown(n){

  if(n < 1){
    return [];
  }else{
    const myArray = countdown(n - 1);
    myArray.unshift(n);
  return myArray;
  }
}
// Only change code above this line

function rangeOfNumbers(startNum, endNum) {
  if(endNum < startNum){
    return [];
  }else{
    const numbers = rangeOfNumbers(startNum, endNum -1);
    numbers.push(endNum);
    return numbers;
  }
};