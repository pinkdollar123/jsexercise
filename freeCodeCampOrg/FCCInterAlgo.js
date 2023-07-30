function sumAll(arr) {

    arr.sort((a,b) => a -b);
    console.log(arr);
  
    const result = [];
    for(let i = arr[0]; i <= arr[1]; i++){
      result.push(i);
    }
    console.log(result);
    let container = result.reduce((sum, num) => sum + num , 0);
    console.log(container);
    return container;
  }
  
  sumAll([1, 4]);

//   * diff of arrays

function diffArray(arr1, arr2) {
    const newArr = [];
  
    let holder = arr1.filter((elem) => !arr2.includes(elem));
    console.log(holder);
    let holder2 = arr2.filter((elem) => !arr1.includes(elem)); console.log(holder2);
  
    let mainHolder = holder.concat(holder2);
    console.log(mainHolder);
  
    return mainHolder;
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// * Destroyer using Seek And Destroy

function destroyer(arr) {

    // * Below provides a container for the arguments object and transform it to an array structure that can be used.
    const valuesToRemove = Array.from(arguments).splice(1);
    
    // ? shows the values
    console.log(valuesToRemove);
  
  // * here we filtered the values that aren't included on the valuesContainer
    const filteredValues = arr.filter((elem) => !valuesToRemove.includes(elem));
    console.log(filteredValues);
  
    return filteredValues
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);g

  // * object mapping filter, for loop using Object.keys to match the given argument

  function whatIsInAName(collection, source) {

    const sourceKeys = Object.keys(source);
    // console.log(sourceKeys);
  
    return collection.filter(obj => {
      for(let i = 0 ; i < sourceKeys.length; i++){
        // console.log(i)
        // console.log(obj);
        // console.log(obj[sourceKeys[i]]);
        // console.log(source[sourceKeys[i]])
        // console.log(source[sourceKeys[i]]);
        if(obj[sourceKeys[i]] !== source[sourceKeys[i]]){
          return false;
        }
      }
      return true;
    })
  }
  
  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
  
  // Define the Dog class
  class Dog {
    constructor(name, breed, age) {
      this.name = name;
      this.breed = breed;
      this.age = age;
    }
  
    bark() {
      console.log('Woof! Woof!');
    }
  }
  
  // Create an instance of the Dog class
  const myDog = new Dog('Max', 'Labrador Retriever', 3);
  
  let key = Object.keys({name: 'Max', breed: "Labrador Retriever"});
  let keySource = {name: 'Max', breed: "Labrador Retriever"};
  
  console.log(key[0] === 'name');
  console.log(key[1]);
  console.log(keySource[key[1]] === myDog['breed']);
  console.log(keySource[key[1]])
  console.log(myDog['breed']);
  console.log(myDog[key[0]]);
  console.log(keySource[key[0]] === "Max");
  // Access and log the properties of the Dog instance
  console.log(`Name: ${myDog.name}`);
  console.log(`Breed: ${myDog.breed}`);
  console.log(`Age: ${myDog.age}`);
  
  // Call the bark method of the Dog instance
  myDog.bark();
  

// * Spinal Tap Case
function spinalCase(str) {
 
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  console.log(str.toLowerCase().split(/(?: |_)+/g).join("-"));
  return str.toLowerCase().split(/(?: |_)+/g).join("-")
}

spinalCase('ThisIsSpinalTap');


// PigsLatin

function translatePigLatin(str) {

  // used caret character to check the first character will start and a special range of negated characters that and all the occurences of it
let consonantRegex = /^[^aeiou]+/;

// matches if given regex to check if the arguments passed to the function matches all the characters for the consonant regex
let myConsonants = str.match(consonantRegex);

// functional ternary condition
return myConsonants !== null
  ? str
      .replace(consonantRegex, "")
      .concat(myConsonants)
      .concat("ay")
  : str.concat("way");
}

translatePigLatin("consonant");

// Search and Replace

function myReplace(str, before, after) {
  console.log(str.slice())
  
  var indexChecker = str.indexOf(before);
  console.log(indexChecker);
  console.log(str[indexChecker]);

  if(str[indexChecker] === str[indexChecker].toUpperCase()){
    after = after.charAt(0).toUpperCase() + after.slice(1);
  }else{
    after = after.charAt(0).toLowerCase() + after.slice(1);
  }
  str = str.replace(before, after);
  console.log(str);
  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");


// DNA Pairing

function pairElement(str) {
    
  // create switch case to pair each given characters as their refernece and output
const matchBasePairs = (char) => {
  switch(char){
    case "A":
      return ["A", "T"];
    case "T":
      return ["T", "A"];
    case "C":
      return ["C", "G"];
    case "G":
      return ["G", "C"];
  }
};

// create an storage of array for the arrays to become arrays of array

const pairs = [];
console.log(str.length)
console.log(matchBasePairs(str[0]));

// loops through the given parameter length and pushes all posible cases from the arguments passed to the push method
for(let i = 0; i < str.length; i++){
  pairs.push(matchBasePairs(str[i]))
}

return pairs;
}

pairElement("GCG");

// Missing letter

function fearNotLetter(str) {
  for (let i = 0; i < str.length; i++) {
    /* code of current character */
    const charCode = str.charCodeAt(i);

    /* if code of current character is not equal to first character + no of iteration
        then a letter was skipped */
    if (charCode !== str.charCodeAt(0) + i) {
      /* if current character skipped past a character find previous character and return */
      return String.fromCharCode(charCode - 1);
    }
  }
  return undefined;
}

// test here
fearNotLetter("abce");

