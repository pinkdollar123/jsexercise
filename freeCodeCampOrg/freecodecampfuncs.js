// Function that returns a string representing a cup of green tea
const prepareTea = () => 'greenTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTeanew = (numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4TeamFCC = getTeanew(40);
// Only change code above this line

// * Function that acecpts function as argument called higher orders

// Function that returns a string representing a cup of green tea
const prepareGreenTea = () => 'greenTea';

// Function that returns a string representing a cup of black tea
const prepareBlackTea = () => 'blackTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);
// Only change code above this line

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);


// * Avoid Mutations and Side Effects Using Functional Programming

// The global variable
let fixedValue = 4;

function incrementer() {
  // Only change code below this line
  // block scope variable
  let newVal = fixedValue + 1;
  return newVal;

  // Only change code above this line
}


// The global variable
let fixedValue3 = 4;

// Only change code below this line
// variable was passed to the function
function incrementer(x) {

  return x + 1;

  // Only change code above this line
}

incrementer(fixedValue3);

// * refactor global variables out of function on't alter a variable or object - create new variables and objects and return them if need be from a function. Hint: using something like const newArr = arrVar, where arrVar is an array will simply create a reference to the existing variable and not a copy. So changing a value in newArr would change the value in arrVar.

// ? Declare function parameters - any computation inside a function depends only on the arguments passed to the function, and not on any global object or variable.


// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(arr, bookName) {
  let newArr = [...arr] // copy all array data using spread operator
  newArr.push(bookName);
  return newArr;
  
  // Change code above this line
}

// Change code below this line
function remove(arr, bookName) {
  let newArr = [...arr];

  const book_index = newArr.indexOf(bookName);
  if (book_index >= 0) {

    newArr.splice(book_index, 1);
    return newArr;

    // Change code above this line
    }
}


let holder = [...bookList];
holder.push("Kamote")
// console.log(holder);
const bkindex = holder.indexOf("Kamote")
console.log(bkindex)
if(bkindex >= 0){
  console.log(`The book ${holder[bkindex]} will be deleted `)
  holder.splice(bkindex, 1)
  console.log(`The remaning books are ${holder} `);
}else{
  false;
}

// * using array to iterate over each item an in array and returns new array containing the results of calling the callback function on each element.

// The global variable
const watchList = [
  {
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "Metascore": "82",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    "Metascore": "70",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    "Metascore": "83",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
    "Response": "True"
  }
];

// Only change code below this line

// const ratings = [];
// for (let i = 0; i < watchList.length; i++) {
//   ratings.push({title: watchList[i]["Title"], rating: watchList[i]["imdbRating"]});
// }

// displayname: array["objectpropertyname"]
const ratings = watchList.map(item => ({
  title: item["Title"],
  rating: item["imdbRating"],
  response: item["Response"]
}));

// Only change code above this line

console.log(JSON.stringify(ratings));

// * Implement map on a Prototype
// remake a map method using forloop or foreach

Array.prototype.myMap = function(callback) {
  const newArray = [];
  // Only change code below this line
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this));
  }
  // Only change code above this line
  return newArray;
};

Array.prototype.newMap = function(callback) {
  const newArray = [];
  // Only change code below this line
  this.forEach((element, index, originalArr) =>
    newArray.push(callback(element, index, originalArr))
  );
  // Only change code above this line
  return newArray;
};

// Only change code below this line
// * Defined a new variable and used array.map() to pass a new callback function to convert strings to number by locating the objectname["propertyname"]

const filteredList = watchList.filter(props => {
  return parseFloat(props.imdbRating) >= 8.0;
}) // using dot notation and method chaining methods can be chained on a new line and make sure not to break it by omitting semicolon; it will still work even it has spaces and for code readability it can be on a new line
.map(props => ({
  title: props.Title,
  rating: props.imdbRating
}));

// Only change code above this line

console.log(filteredList);

// * remake your own array filter prototype

Array.prototype.myFilter = function(callback) {
  const newArray = [];
  // Only change code below this line
    for(let i = 0; i < this.length; i++){
      if(callback(this[i], i, this) == true){
        newArray.push(this[i]);
      }
    }
  // Only change code above this line
  return newArray;
};

// * Return Part of an Array Using the slice Method

function sliceArray(anim, beginSlice, endSlice) {
  // Only change code below this line

  // initialize a new var to store the array usign spread operator
  const newArr = [...anim];

// returns the requested data by using the parameters as arguments passed
 return newArr.slice(beginSlice, endSlice);

  // Only change code above this line
}

const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);

// * nonmutating array using slice method()

function nonMutatingSplice(cities) {

  const newArr = [...cities];
// slice method starts at 0 and ends at 3 where the covered is 0, 1 , 2 elements as the covered part.
  return newArr.slice(0,3); 
}

// * Combine Two Arrays Using the concat Method

function nonMutatingConcat(original, attach) {
  // Only change code below this line

  return original.concat(attach);

  // Only change code above this line
}

const first = [1, 2, 3];
const second = [4, 5];
nonMutatingConcat(first, second);

function nonMutatingPush(original, newItem) {
  // Only change code below this line
  return original.concat(newItem);

  // Only change code above this line
}

const third = [1, 2, 3];
const fourth = [4, 5];
nonMutatingPush(third, fourth);

// * reduce method using method chaining

function getRating(watchList) {
  // Only change code below this line
  const newArr = 
  watchList.filter(props => props["Director"] === 'Christopher Nolan')
  .map(props => parseFloat(props["imdbRating"]))
  .reduce((avg, addend) => avg + addend) / watchList.filter(tnginamo => tnginamo.Director === "Christopher Nolan").length;
  
console.log(newArr);
  // Only change code above this line
  return newArr;
}

console.log(getRating(watchList));

// * Higher order functions map , filter reduce,

const squareList = (arr) => {
  // Only change code below this line
  return arr
          .filter(props => props > 0 && props % parseInt(props) === 0)
          // used math operation to apply the square root of filtered numbers
          .map(props => Math.pow(props, 2));
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);

// * Sort an Array Alphabetically using the sort Method

function ascendingOrder(arr) {
  return arr.sort(function(a, b) {
    return a - b;
  });
}

ascendingOrder([1, 5, 2, 3, 4]);

// reversal order

function reverseAlpha(arr) {
  return arr.sort( (a, b) => {
    return a === b ? 0 : a < b ? 1 : -1;
  });
}

reverseAlpha(['l', 'h', 'z', 'b', 's']);

function alphabeticalOrder(arr) {
  // Only change code below this line
    
  return arr.sort((a, b) => {
    return a === b ? 0 : a > b ? 1 : -1;
  })
  // Only change code above this line
}

alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);

