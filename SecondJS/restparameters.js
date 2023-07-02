"use strict";

let add;

// rest parameter ...nums or ...variablename
function sum(...nums){
   add = 0;

   for(var num of nums){
    add += num;
   }
   return add;
}

let addition = sum(1,2,3,4,5,6,7,8,9,);
console.log(addition)

// * use rest parameters using ...arrayofundefinedlength, rest parameter must be last formal parameter
function studentDetails(name, ...courses){
    let sub;
    console.log("The name of the student is :", name);
    for(sub = 0; sub < courses.length; sub++){
        console.log(courses[sub]);
    }
}

studentDetails("Chris","Javascript","Python","Scala");

