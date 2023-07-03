"use strict";

// *CALL APPLY BIND

let scoreCard1 = {
    name: "John Doe",
    math: 85,
    verbal: 92
};

let scoreCard2 = {
    name: "Jane Smith",
    math: 90,
    verbal: 88
};

let scoreCard3 = {
    name: "Tom Johnson",
    math: 78,
    verbal: 95
};

function printWeightedScore(mathWt, verbalWt){
    let weightedScore = (mathWt * this.math + verbalWt * this.verbal) / (mathWt+verbalWt);
    console.log(`Weighted score for ${this.name} is ${weightedScore}`);
}

// * functionName.call(object, parameters,parameters);
console.log("Linking the scorecard with call()");
printWeightedScore.call(scoreCard2, 1, 1);
printWeightedScore.call(scoreCard1, 1, 1);
printWeightedScore.call(scoreCard3, 1, 1);

// functionName.apply(objectname, [form of an array]);
console.log("Linking the scorecard with apply()");
printWeightedScore.apply(scoreCard2, [1,1]);
printWeightedScore.apply(scoreCard1, [1,1]);
printWeightedScore.apply(scoreCard3, [1,1]);

// *functionName.bind(objectname) pass the argument inside -> () this method didn't invoke it instead it returns a function itself. bind() method is something which used to bind a function call to an object but it does not invoke thatfunction itself.

let firstScore = printWeightedScore.bind(scoreCard1);
let secondScore = printWeightedScore.bind(scoreCard2);

firstScore(1,1);
secondScore(1,1);

// ? the bind method just bound the function to itself and it needs to be explicitly invoked later on or when required.

let weigthedScoreArrow = (mathWt, verbalWt) => {
    let weigthedScore = (mathWt *this.math + verbalWt * this.verbal) / (mathWt+verbalWt);
    console.log(`Weigthed score for ${this.name} is ${weigthedScore}`);
    console.log("This is :", this); 
}

console.log("Invoking arrow function with call():");
weigthedScoreArrow.call(scoreCard3, 2,1);

console.log("Invoking arrow function with apply():");
weigthedScoreArrow.apply(scoreCard2, [2,1]);

console.log("Binding and invoking arrow function withbind():");
let firstScoreArrow = weigthedScoreArrow.bind(scoreCard1);

firstScoreArrow(1,1);


function getFunction(){
    return function(){}
}
var returnedValue = getFunction();

console.log(typeof returnedValue);

let timesTwo = function(x) { return 2*x }; 

console.log(timesTwo(2));