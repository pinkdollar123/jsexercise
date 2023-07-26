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

// factorializa using recursion
function factorialize(num) {
    if (num === 0) {
      return 1;
    }
    return num * factorialize(num - 1);
  }
  
  factorialize(5);

// Find the Longest Word in a String

function findLongestWordLength(str) {
    let words = str.split(' ');
    let maxLength = 0;
  
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > maxLength) {
        maxLength = words[i].length;
      }
    }
  
    return maxLength;
  }
  

//   Find the largest numbers in arrays

// * Procedural approach
function largestOfFour(arr) {
    const results = [];
    for (let i = 0; i < arr.length; i++) {
      let largestNumber = arr[i][0];
      for (let j = 1; j < arr[i].length; j++) {
        if (arr[i][j] > largestNumber) {
          largestNumber = arr[i][j];
        }
      }
      results[i] = largestNumber;
    }
  
    return results;
  }

//   Code Explanation freecodecamp community

//     Create a variable to store the results as an array.
//     Create an outer loop to iterate through the outer array.
//     Create a second variable to hold the largest number and initialise it with the first number. This must be outside an inner loop so it won’t be reassigned until we find a larger number.
//     Create said inner loop to work with the sub-arrays.
//     Check if the element of the sub array is larger than the currently stored largest number. If so, then update the number in the variable.
//     After the inner loop, save the largest number in the corresponding position inside of the results array.
//     And finally return said array.


//   *Declarative approach
function largestOfFour(arr) {
    return arr.map(function(group) {
      return group.reduce(function(prev, current) {
        return current > prev ? current : prev;
      });
    });
  }
