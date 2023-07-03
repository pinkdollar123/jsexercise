window.onload = function(){
    var incButton = document.getElementById("incButton");
    var incCount = 0;

    incButton.onclick = function(){
        incCount++;
        var incCountMessage = document.getElementById("incCount");
        incCountMessage.innerHTML = `Increment counter = ${incCount}`;
    }

    var decButton = document.getElementById("decButton");
    var decCount = 0;

    decButton.onclick = function(){
        decCount--;
        var decCountMessage = document.getElementById("decCount");
        decCountMessage.innerHTML = `Decrement counter = ${decCount}`;
    }
}

function counter(){

    // a variable that's locally usable or closure variable for the function in its enclosing environment
    // ? count was defined and only invoked once counter is called and not when countFn is invoked
    let count = 0;
    // *define a function for as innerFunction
    function incrementCount(){
        return count +=1;
    }
    // *invoked incrementCount() function along with its enclosing environment
    return incrementCount;
}

var countFn = counter();

console.log("1st invocation of countFn,", countFn());
// * each time the countFnm it is a nested function which is invoked which is the incrementCount() function body
console.log("2nd invocation of countFn", countFn());

for (var i = 3; i <=8; i++){
    console.log(countFn);
}

let anothercounterFn = counter();

console.log("1st invocation of anotherCountFn gives: ", anothercounterFn());
console.log("2nd invocation of anotherCountFn gives: ", anothercounterFn());
// * This proves that the state of that function is independent of the anotherCountFn
// ? Closures allow us to effectively maintain a state comprising the variables in the surrounding environment of a nested function. And this is what allows us to implement counter functions in javascript

// *Closures and web pages elements

