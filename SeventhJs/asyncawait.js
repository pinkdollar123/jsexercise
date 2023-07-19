// "use strict";



// let oneFunction = arg => {
    
//     return new Promise(resolve => {
        
//         setTimeout(() => {
//             var returnVal = arg;
//             console.log("oneFunction produces:", returnVal);
//             resolve(returnVal);

//         },2000);
//     });
// };

// let twoFunction = arg => {

//     return new Promise(resolve => {

//         setInterval(() => {

//             var returnVal = arg + "Two";
//             console.log("twoFunction produces", returnVal);
//             resolve(returnVal);
//         },2000)
//     });
// };

// let threeFunction = arg => {

//     return new Promise(resolve => {

//         setTimeout(() => {

//             var returnVal = arg + "Three";
//             console.log("threeFunction produces:", returnVal);
//             resolve(returnVal);
//         },2000);
//     });
// };

// // * we can implement this 3 function in one function using 
// // * new Promise resolve , rejected and then method it's Promise Chain
// // let finalval = arg => {

// //     return new Promise(resolve => {

// //         oneFunction(arg).then((val) => {

// //             twoFunction(val).then((val) => {

// //                 threeFunction(val).then((val) => {

// //                     console.log("Final val:", val);
// //                 })

// //             })
// //         })
// //     });
// // }

// // finalval("One");

// // ? async and await syntax To do that, we need to define our finalValAsync() function as an asynchronous function by using the async keyword. Just as in the previous version, this access a single argument. And this is pass or fed to the first function, so the invocation of the firstFunction returns the requested value, and we used await keyword,

// let finalValAsync = async arg => {

//     // * Until the function returns the promise the code execution of finalValAsync() will be paused. And once the promise return, however the code execution can move on the next line where once again we will await the return of the promise from the secondFunction and continue to threeFunction before the console log message is invoked
//     var one = await oneFunction(arg);
//     var two = await twoFunction(one);
//     var val = await threeFunction(two);

//     console.log("Final val:", val);
// }

// finalValAsync("one");

// "use strict";

function Person(name, age, email)
{
    this.name=name;
    this.age=age;
    this.email=email;

    this.Greetings = () =>
{
    console.log(`Hello my name is ${this.name} and I'm ${this.age} years old`);
}
}

const carlo = new Person("carlo", 14, "carlo@email.com");

carlo.Greetings();
