"use strict";

function Student(name){

    this.name = name;

    this.avgScore = (scoreArray) =>
    scoreArray.reduce((avg, score) => avg + score)/scoreArray.length;
}

var heidi = new Student("Heidi");
var ralf = new Student("Ralf");

let heidiScore = [64, 78, 59];
let ralfScore = [85, 70, 67];

console.log("The avgScore for each student:");
console.log(`Heidi:`, heidi.avgScore(heidiScore));
console.log(`Ralf:`, ralf.avgScore(ralfScore));

console.log("\n What do the Student objects containt? :");
console.log(`Heidi:`, heidi);
console.log(`Ralf:`, ralf);

// *Need a better design where we can move a prototype to put thefunction that can be used to other objects

function StudentProto(name){
    this.name = name;

    // ?So do note how exactly we said this prototype here as StudentProto.prototype.avgScore. And then the body of the function is exactly the same as in the previous object constructor. With this design, no matter how many instances we create of StudentProto, all of them will point to a single instance of the avgScore method.

    StudentProto.prototype.avgScore = (scoreArray) =>
    scoreArray.reduce((avg, score) => avg + score)/scoreArray.length;
}

heidi = new StudentProto("Heidi");
ralf = new StudentProto("Ralf");


console.log("The avgScore for each student (proto):");
console.log(`Heidi:`, heidi.avgScore(heidiScore));
console.log(`Ralf:`, ralf.avgScore(ralfScore));

console.log("\n What do the Student objects containt? :");
console.log(`Heidi:`, heidi);
console.log(`Ralf:`, ralf);

StudentProto.prototype.uniName = "XYZ";

console.log("\n The uniName for each student (proto) :");
console.log(`Heidi:`, heidi.uniName);
console.log(`Ralf:`, ralf.uniName);

StudentProto.prototype.uniName = "XYZ University";


console.log("\n The updated uniName for each student (proto) :");
console.log(`Heidi:`, heidi.uniName);
console.log(`Ralf:`, ralf.uniName);

// * So when we have common properties for objects built out of the same object constructor, whether the values for those properties are functions or just regular strings, we can define them within the prototype for those objects.

// ?PROTOTYPES AND CLASSES

function StudentMultiProto(name){
    

    // * objectconstructorname.prototype.objproperty
    StudentMultiProto.prototype.uniName = "XYZ University";
    this.name = name;

    StudentMultiProto.prototype.avgScore = (scoreArray) =>
        scoreArray.reduce((acc, score) => acc + score) / scoreArray.length;    

    StudentMultiProto.prototype.intro = () =>{
        // * the uniName can be accessed because of prototype chain in Javascript
        console.log("My name is %s and I'm a student at %s", this.name, this.uniName);
    }
}

heidi = new StudentMultiProto("Heidi");
ralf = new StudentMultiProto("Ralf");
console.log("Students nasa baba");
console.log("Score ni heidi:", heidi.avgScore([99,99,99]));
console.log("Score ni ralf:", ralf.avgScore([77,77,77]));

console.log("Intro ng mga student gamit studentMultiProto prototype:");
console.log("Intro ni heidi:");
heidi.intro();
console.log("Intro ni ralf:");
ralf.intro()

/* So how exactly did the intro function access the uniName property?

Well, within the function definition when we invoke this.uniName, JavaScript will first look for the uniName property within the object itself. If it is not found there, it will go one level up to the object's prototype. In our case, that is precisely where the uniName attribute was found. And in effect, the Heidi and Ralf objects inherited that property from their prototype.

In JavaScript, it is possible to have multiple levels of prototypes. In which case, any reference to a property will keep looking one level up the prototype chain until that property is found. 
*/

// class keyword and extends inheritance for object constructor
class StudentClass {
 uniName = "XYZ";

 constructor(name){
    this.name = name;
 }

 avgScore = (scoreArray)=>
    scoreArray.reduce((acc, score) => acc+score) / scoreArray.length;

 intro = () => {
    console.log("My name is %s and I'm a student at %s", this.name, this.uniName);
 }

}

// *Classes in javascript are merely syntactic sugar over object constructors, as well as prototypes. To make it easier to transition to other language as OOP
let zosimo = new StudentClass("Zosimo");
let zeus = new StudentClass("Zeus");

console.log("Students nasa baba");
console.log("Score ni zosimo:", zosimo.avgScore([99,99,99]));
console.log("Score ni zeus:", zeus.avgScore([77,77,77]));

console.log("Intro ng mga student gamit studentMultiProto prototype:");
console.log("Intro ni zosimo:");
zosimo.intro();
console.log("Intro ni zeus:");
zeus.intro()

// *So by default, when implementing classes in JavaScript, any property which you define within it will be a separate one for each instance which is created from the class and is not part of the prototype. If you would like some properties, including functions to be common across all instances of a particular class, then you could make use of the static keyword, which is also available in JavaScript.