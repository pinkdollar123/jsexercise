"use strict";

/*
*TRY AND CATCH BLOCK TRY THE CODE BLOCK IF THERE'S NO ERROR IT WILL CONTINUE TO EXECUTE THE TRY BLOCK.

*/
try {
    document.write("Welcome guest");
    document.write(Null);
    console.log("No Error");
}
catch (err) {
    console.log(err.message);
}
/*
* create a function to determine the try and catch block. Another feature is try,catch,finally block. The finally block will get executed regardless of the try and catch block.

*/
function isEven(){
    var a;
    a = document.getElementById("num").value;

    try{
        if((a % 2) === 0){
            console.log("The number input was even");
        }else {
            throw "not an even number";
        }
    }
    catch(err){
        console.log("The entered value is " + err);
    }
    finally{
        console.log("I get executed regardless of the try/catch result");
    }
}