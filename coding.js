const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("sample").innerHTML = `Sample array is ${fruits}`;

// How do you reverse a string?
document.getElementById("demo").innerHTML = fruits.reverse();

let notGreeting = "Hello World! Good morning to you!";
let greeting = "Hello World! How are you today?";

// How do you calculate the number of numerical digits in a string?
const len = greeting.length;
document.getElementById("demo1").innerHTML = len;

let newFruits = fruits.sort();
document.getElementById("demo2").innerHTML = newFruits;

// How do you reverse a string?
let Fruity = newFruits.reverse();
document.getElementById("demo3").innerHTML = Fruity;


// How do you find the count for the occurence of a particular character in a string?
function myStringCount (str,char){
	const count = str.split(char).length -1;
    return count;
}

const myChar = "o";
const occurences = myStringCount(greeting, myChar);
document.getElementById("demo3").innerHTML = `The occurences of "${myChar}" in the string "${greeting}" is ${occurences}`;

// How do you find the non-matching characters in a string?
function notMatching(str, reference){
	const notMatchingStr = [];
    
    for(var i = 0; i < str.length; i++){
    	if(str[i] !== reference[i]){
        notMatchingStr.push(str[i]);
        }
    }
    return {
    count: notMatchingStr.length,
    notMatchingStr: notMatchingStr,
    };
}

const result = notMatching(notGreeting, greeting);
document.getElementById("demo4").textContent = `The string that doesn't match on the strings "${notGreeting}" and "${greeting}" are ${result.notMatchingStr} and the count of it is ${result.count}`;

// How do you find if a string is a palindrome?

function isPalindrome(str){
	const modifiedStr = str.replace(/[\W_]/g,"").toLowerCase();
    
    const reverseStr = modifiedStr.split('').reverse().join('');
    
    return modifiedStr === reverseStr;
}

const textOne = isPalindrome("Sit on a potato pan, Otis");
const textTwo = isPalindrome("Cigar? Toss it in a can. It is so tragic.");
const textThree = isPalindrome("Hello World!");

document.getElementById("demo5").innerHTML = textOne;
document.getElementById("demo6").innerHTML = textTwo;
document.getElementById("demo7").innerHTML = textThree;
