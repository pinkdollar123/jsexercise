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