// * convertion Celsius to Farenheit

function convertCtoF(celsius) {
    let fahrenheit;
  
    fahrenheit = celsius * 9/5 + 32;
    
    return fahrenheit;
  }
  
  convertCtoF(30);

// Reverse a string

function reverseString(str) {
    let container = "";
    for(let i = str.length -1; i >= 0; i--){
      console.log(i);
      container += str[i];
    }
    return container;
  }
  
reverseString("hello");


  