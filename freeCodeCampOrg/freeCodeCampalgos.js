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

// * Finding the ending of the string if equal 

// First we use the slice method copy the string.
// In order to get the last characters in str equivalent to the target's length we use the slice method.
// The first parameter inside the slice method is the starting index and the second parameter would be the ending index.
// In this case we only include one parameter which it will copy everything from the starting index.
// We substract the length of str and the length of target, that way, we shall get the last remaining characters equivalent to the target's length.
// Finally we compare the return result of slice to target and check if they have the same characters.

  function confirmEnding(str, target) {
    return str.slice(str.length - target.length) === target;
  }
  
  confirmEnding("Bastian", "n");
  
  let zos = "zos is a great pretender";
  let target = "pretender"
  // str.slice(str.length - target.length) === target;
  let zlen = zos.length;
  console.log(zlen);
  let tlen = target.length
  console.log(tlen);
  console.log(24-9);
  let holder = zos.slice(zos.length - target.length)
  console.log(holder === target);
  console.log(zos.slice(15));
  

  // * using Regex Regular expression

  function confirmEnding(str, target) {
    // "Never give up and good luck will find you."
    // -- Falcor
  
    let re = new RegExp(target + "$", "i");
  
    return re.test(str);
  }
  
  console.log(confirmEnding("Bastian", "n"));

  
  // We need to make a pattern from the target variable that exists at the end of the string str.
  // Since we will use a variable that will change the pattern each time the function is called, we will use the constructor of the regular expression object new RegExp(pattern[, flags]), so we start with: new RegExp(target).
  // Then we have to check at the end of the string, so we concatenate to the target variable the $ character to match the end: new RegExp(target+'$').
  // We use the flag i to ignore the case of the pattern and we have our completed RegExp: new RegExp(target+'$','i'), or we can ommit the flag entirely.
  // Finally, we are using our regular expression with the test method to the given string, to check if the string ends with the pattern and return true or false accordingly.

  
  function confirmEnding(str, target) {
    return str.slice(-target.length) === target
  }
  
  confirmEnding("Bastian", "n");

  // another approach is this one using -string.length to match the target value If a negative number is provided as the first parameter to slice() , the offset is taken backwards from the end of the string.

// * concatenating string base on their parameter value

function repeatStringNumTimes(str, num) {
  // declares a new variable to store the newstring
  let newStr = "";
// runs a loop to compare how many times the loop and concatenation will execute based on the comparator
  for(let i = 0; i < num; i++){
    // concatenate the str to empty string for how many times with the comparator compared to
    newStr += str;
  }
  return newStr;
}

repeatStringNumTimes("abc", 3);

let test = "me";
test += "me"

console.log(test);

// * truncateString by accepting the num as argument to match either it's less than or greather and equal it will return based on the condition
function truncateString(str, num) {
  // *Ternary operator by me
  return num < str.length ? str.slice(0,num)+"..." : str.slice();
  
  // *procedural condition
  //   if(num < str.length){
  //   return str.slice(0,num)+"...";
  // }else{
  //   return str.slice();
  // }
  
  }
  truncateString("A-tisket a-tasket A green and yellow basket", 8);

  // * Truth testing using two parameters checking if the function passes the truth test giving the number from the array

  function findElement(arr, func) {

    let num = 0;
    
    for(let i = 0; i < arr.length; i++){
      // reassigned the value of num to current index value of arr[i];
      num = arr[i];
      // func accepts a parameter num as declared in the given context, if this num used becomes true therefore the condition will return the value of the num that passes the truth test
      if(func(num)){
        return num;
      }
    }
    return undefined;
  }
  
  findElement([1, 2, 3, 4], num => num % 2 === 0);
  
  // * BOO WHO? Finds if the given data is a boolean primitive

  function booWho(bool) {

    if(bool === true || bool === false){
     return true;
    }else{
     return false;
    }
  }
  
  booWho(null);

  // *Title Case for every word

  function titleCase(str) {
    const newTitle = str.split(" ");
    const updatedTitle = [];
    for (let st in newTitle) {
      updatedTitle[st] = newTitle[st][0].toUpperCase() + newTitle[st].slice(1).toLowerCase();
    }
    return updatedTitle.join(" ");
  }
  
  titleCase("I'm a little tea pot");
  
  let strme = "I'm a little tea pot";
  let lower = strme.toLowerCase();
  let splt = lower.split(" ");
  
  console.log(splt);
  console.log(splt.length-1);
  console.log(splt[0][0]);
  console.log(splt[1][0]);
  console.log(splt[1][0].toUpperCase());

  // *Franken Splice it's alive it's alive

  function frankenSplice(arr1, arr2, n) {
    let splice2 = arr2.slice();
    console.log(`initial of splice2 ${splice2}`);
    console.log(`initial of n is ${n}`);
  
    for(let i = 0; i < arr1.length; i++){
      
      console.log(`value of arr1 is '${arr1[i]}'`)
      splice2.splice(n, 0, arr1[i]);
      n++;
  
      console.log(splice2);
      console.log(`n=${n} after iteration of ${i+1}`);
      }
    return splice2;
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);
  
  // let twoarr = [[1,2,3],[4,5,6]];
  // let num = 1;
  // let pos = 0;
  // let twotwo = twoarr.slice(1);
  // console.log(twotwo);
  // twotwo.splice(num, pos, twoarr[0][0]);
  // console.log(twotwo);
  // twotwo.splice(num, pos, twoarr[0][1]);
  // console.log(twotwo);

  

  
  