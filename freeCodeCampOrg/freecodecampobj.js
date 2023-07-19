"use strict";

// Setup
const testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
  };
  
  // Only change code below this line
  const hatValue = testObj.hat;      // Change this line
  const shirtValue = testObj.shirt;    // Change this line

  // Setup
const testObj2 = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
  };
  
  // Only change code below this line
  const entreeValue = testObj2["an entree"];   // Change this line
  const drinkValue = testObj2["the drink"];    // Change this line

  // Setup
const testObj3 = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
  };
  
  // Only change code below this line
  const playerNumber = 16;  // Change this line
  const player = testObj3[playerNumber];   // Change this line

  // Setup
const myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
  
  myDog.name = "Happy Coder";
  myDog["bark"] = "woof";
  delete myDog.tails;
  // Only change code below this line

  function phoneticLookup(val) {
    var result = "";
    var lookup = {
      "alpha": "Adams",
      "bravo": "Boston",
      "charlie": "Chicago",
      "delta": "Denver",
      "echo": "Easy",
      "foxtrot": "Frank"
    };
  // After converting our case statements into object properties you can make use of the variable `result` to let the function return the correct value.
  
  
    result = lookup[val];
    // Only change code above this line
    return result;
  }
  

  function checkObj(obj, checkProp) {
    // Only change code below this line
   let checker = obj.hasOwnProperty(checkProp);
    if(checker){
      return obj[checkProp];
      // Code above calls the object and display the given value from checkProp
    }else {
      return "Not Found";
    }
    // Only change code above this line
  }

//   Flexible Data Structure

const myMusic = [
    {
      "artist": "Billy Joel",
      "title": "Piano Man",
      "release_year": 1973,
      "formats": [
        "CD",
        "8T",
        "LP"
      ],
      "gold": true
    },
    {
      artist: "Kamote",
      title: "Sinigang",
      release_year: 2023,
      formats: ["Digital Copy", "1GB", "HP"]
    }
  ];

  const myStorage = {
    "car": {
      "inside": {
        "glove box": "maps",
        "passenger seat": "crumbs"
       },
      "outside": {
        "trunk": "jack"
      }
    }
  };
  
  
  const gloveBoxContents = myStorage.car.inside["glove box"];

  // Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {

  if(value === ""){
    delete records[id][prop];
  }
  else if(prop !== "tracks" && value !== ""){
    records[id][prop] = value;
  }
  else if(prop === "tracks" && value !== ""){
   if(records[id].hasOwnProperty("tracks") === false){
     records[id][prop] = [];
   }
   records[id][prop].push(value);
  }
  return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');

// Setup
const myArray = [];

// Only change code below this line

for(let i = 1; i < 6; i++){
  myArray.push(i);
}

// Setup
const myArrayTwo = [];

// Only change code below this line

for(let i = 9; i > 0; i -= 2){
  myArray.push(i);
}

// Setup
const myArr = [2, 3, 4, 5, 6];

// Only change code below this line
let total = 0;

for(let i = 0; i < myArr.length; i++){
  total += myArr[i];
}

function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line

  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr[i].length; j++){
      product *= (arr[i][j]);
    }
  }
  // Only change code above this line
  return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);