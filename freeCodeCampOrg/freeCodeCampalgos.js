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

function largestOfFour(arr) {
  // we declare a variable to hold the largestNumbers in arrays of subArray
  const results = [];

// we then iterate each array usign for loop by using the array[i]/index
  for(let i = 0 ; i <arr.length; i++){

    // we declare a new variable for a temporary container of the largest number array[index][element position]
    let largestNumber = arr[i][0];

    // here we use another forloop inner loop, as a reference to be compared to the value of element inside the subarray which will run to the length of element

    for(let j = 1; j < arr[i].length; j++){

// this is the codeblock to be executed to compare if the array at i index [ element position] is greater than the reference value at the top largestNumber,if yes it will store the new data to the holder, else nothing will happen
      if(arr[i][j] > largestNumber){
        largestNumber = arr[i][j];
      }
    }
    // once the innerloop is completed, the outer executes the current container results at 0 index or results[0] will have a value of the largestNumber found at the first loop;
    results[i]= largestNumber;
  }
  return results;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

let arr = [ [4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1] ]


let large = arr[0][0];
console.log(large);

let j = 1;

if(arr[0][1] > large){
  large = arr[0][1];
  console.log(true);
}else{
  console.log(false);
}




//   *Declarative approach
function largestOfFour(arr) {
    return arr.map(function(group) {
      return group.reduce(function(prev, current) {
        return current > prev ? current : prev;
      });
    });
  }
