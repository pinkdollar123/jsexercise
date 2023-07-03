"use strict";

var boss = "Margaret";

function Employee(name, title) {

  // * Closure variables
    this.name = name;
    this.title = title; 
    this.domain = "Data";
    
    // Nested function
    this.intro = function intro() {
      // *This one are local variables and access to closure variables
     let empTitle = this.domain + " " + title;

    //  * This one has access to Local Variables, which allows to access closure variables outside this nested function and the global var = boss;
     console.log("My name is %s and I report to %s. My title is %s", name, boss, empTitle);
    }
    
  }
  
  var troy = new Employee("Troy", "Analyst");
 troy.intro();

 boss = "Wolfgang";
 console.log("The employee intro after changing the boss");
 troy.intro();

 troy.domain = "ML";
 console.log("Troy after his domain change:");
 troy.intro();

 troy.title = "Engineer";
 console.log("Troy after his title change:");
 troy.intro(); //? This won't change troy title this is because the introFn access is the closure variable which was initialized when the employee object for troy was constructed and is still retained in the closure environment for the intro function this is separate from the object property of title which is why still troy introFunction still shows him to be an analyst rather than an engineer. In short this is because it has been defined when troy as made as new Employee ("Troy", "Analyst") and unlikely the troy.domain it was already placed as Data value

 console.log("Troy", troy);

//  *CLOSURE LOOPS

// function myFunction(){
//   console.log("Hello will be displayed after 5 seconds...");
//   setTimeout(function(){document.write("Hello");}, 5000);
// }

// myFunction();

function timeOutTest(){

  // * This i variable was placed within the for loop environment making it as a closure variable which is not independent variable for the for loop block level code
  // let i;

  // ?To have an independent copy of the variable it should be declared within the block level of the forloop, therefore it should be on the same line or block level statement

  // * Be careful using closure variables when you're just creating a function inside a forloop or just a function inside the function body
  for(let i= 0; i <= 3; i++){

    setTimeout(function(){
      console.log(i);
    }, i* 3000);
  }
}

timeOutTest();

