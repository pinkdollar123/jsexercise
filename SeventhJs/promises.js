"use strict";

// * Asynchronuos execution 
/* 
? Now I have already mentioned that JavaScript runs on a single thread, which means that all of these executions will happen in a synchronous manner. regularFunction() will be invoked first, then timeoutFunction(), and then followUpFunction(). Each function call also depends on the output returned by the previous one. So timeoutFunction() depends on what was returned by regularFunction(), and the followUpFunction() in turn depends on what was returned by the timeoutFunction(). So we should expect the regularFunction() to return the text: Hello. The timeoutFunction() will construct the message, Hello World out of it and then the followUpFunction() will print out the same: Hello World message. Let's see exactly how this works however, by pulling up Promises.html in the browser.

*/




let regularFunction = () => {
    
    return "Hello";

}

// let timeoutFunction = msg => {
    
//     var returnMsg;

//     setTimeout(()=> {
//         console.log("Input msg to",msg);

//         returnMsg = msg + "World";
//         console.log("timeoutFunction has constructed returnMsg:", returnMsg);

//         return returnMsg;

//     }, 10000)
// }

let followUpFunction = msg => {
    
    console.log("Follow up, Timeout returned:", msg);
}

// console.log("before any function call..");
// var regularReturn = regularFunction();
// var timeoutReturn = timeoutFunction(regularReturn);
// followUpFunction(timeoutReturn);

/*

*So we have the first console.log message, which is not from any of our functions. But right after that, the console.log message is from the followUpFunction(), and this returns a value of undefined for its input argument. The last two messages are from the code which we defined inside the timeoutFunction().


*So even though we executed the timeoutFunction() before the followUpFunction(), it looks like the console.log message from the Follow up has been executed first. The reason for this is that when we included code within setTimeout(), that code did not run immediately, but in fact waited for ten seconds before being executed.


*During that ten second wait, the JavaScript engine did not pause the code execution but in fact allowed the setTimeout() code to run asynchronously, and then just went ahead and executed the followUpFunction(). However at this time since the setTimeout code had not yet returned, the variable timeoutReturn was still undefined when the call to followUpFunction() was made.


*Only after about ten seconds did the return value actually come in, but by that point, the followUpFunction() had already executed, and it had printed out its input argument, which was at the time Undefined. So JavaScript has executed the code within the setTimeout() in an asynchronous and nonblocking manner, which means that the code execution did not wait for it to return before proceeding.

*Such behavior is very often desirable, since you don't want your code execution to pause for every operation which takes a while to run. In our example, however, it is clear that there is a dependency of the followUpFunction() on the value returned by timeoutFunction().

*Such dependencies can be rather common, especially if your code happens to make API calls or database queries. And then you use the values which are returned in the rest of your code. What we really want is for the execution of the followUpFunction() to be blocked until the timeoutFunction returns.

*/

// *Timeout Function callback is not the solution we're looking for

// let timeoutFunctionCallback = (msg, callback) => {

//     console.log("Input msg to timeoutFnCallback", msg,)
//     var returnMsg;

//     setTimeout(() => {

//         returnMsg = msg + "World";
//         console.log("timeoutFnCallback has constructed returnMsg:", returnMsg);
//     }, 10000)

//     callback(returnMsg);
// }

// console.log("Before callbackk...");
// var regularReturn = regularFunction();
// timeoutFunctionCallback(regularReturn, followUpFunction);

// * PROMISES resolve or rejected use then() method

let timeoutFunctionPromise = msg => {

    // ? And a Promise constructor takes in a function definition, which in turn has two arguments. One of these is called resolve, and this represents the successful resolution of a Promise. And the other one which we don't make use of, is in case of an error and that is the reject argument. 

    return new Promise(resolve => {
        
        var returnMsg;

        setTimeout(() => {
            console.log("Input msg to timeoutFnPromise: ", msg,)

            returnMsg = msg + "World";
            console.log("timeoutFnPromise has constructed returnMsg:", returnMsg);

            resolve(returnMsg);
        }, 10000)
    });
};

console.log("The secound round of function calls...");
var regularReturn = regularFunction();

/*
 So here, we call our timeoutFunctionPromise() and we pass along regularReturn as an argument. This will return a Promise object. And this represents the eventual execution of the function. Now, if we want some code execution to wait for that Promise to be resolved or rejected, then we wrap this inside a then() function call.

The argument to then() is itself a function and the argument to that function is what is returned by the Promise. Our timeoutFunctionPromise(), returns the return message which was constructed by means of the resolve() method. And this is accessible in this timeoutReturn argument.

So the code within the then() function will only execute once the promise has been resolved or rejected, In our case only once the returnMsg has actually been returned. So this invocation of followUpFunction() should follow the completion of our timeout function.

*/
timeoutFunctionPromise(regularReturn).then((timeoutReturn) => {
    followUpFunction(timeoutReturn);
})

// * Promise syntax

const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer represents a response from a server
    let responseFromServer;
      
    if(responseFromServer) {
      resolve("We got the data");
    } else {  
     reject("Data not received");
    }
  });

//  * Promises are most useful when you have a process that takes an unknown amount of time in your code (i.e. something asynchronous), often a server request. When you make a server request it takes some amount of time, and after it completes you usually want to do something with the response from the server. This can be achieved by using the then method. The then method is executed immediately after your promise is fulfilled with resolve. Here’s an example:

  makeServerRequest.then(result => {
    console.log(result);
    });

    // *catch is the method used when your promise has been rejected. It is executed immediately after a promise's reject method is called. 

    makeServerRequest.catch(error => {
        console.log(error);
      })
