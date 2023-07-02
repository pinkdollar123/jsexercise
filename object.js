let myPet = {
    // String key:value pair, first key
    type: "Dog",
    // Second key:value pari, second key
    name: "Sharky",
    // Third key:value pair, third key
    dob: "2022-04-05",
    /* Fourth key:value pair, fourth key
    Note this key value consist a function named 
    age with a code block
    */
    age: function (){

    },
    /* array of objects key:siblings, 
    pair : value , array of objects
    */
    siblings: [{},{},]
};

// Object Constructor proper naming Capital Letter of functionName
function Pet (type, name , dob, newAge, siblings){
    this.type = type;
    this.name = name;
    this.dob = dob;
    newAge: function age(){};
    this.siblings = siblings;
};
// Creates a new object using the keyword "new"
var newPet = new Pet ("Flying Dog", "Flarky", "2022-04-06",)


// CLOSURES IN JAVASCRIPT IS NESTED FUNCTIONS
function outerFunction(){
    // Declares variable and assigns a value
    var name = "Zosimo";
// calls an innerfunction to display the name
    function displayName (){
        console.log("My name is", name);
    }
    // calls the function to execute the code block
    return displayName();
}
// created a variable assigns the nested function to it
var nameFunc = outerFunction();
// invoked
nameFunc();

function Book (title, author, numPages, price)
{
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.price = price;
    Book.prototype.getTotalPrice = function () {}
};

function HardDisk(storage, manufacturer, rpm, warranty, price, seller)
{
    this.storage = storage;
    this.manufacturer = manufacturer;
    this.rpm = rpm;
    this.warranty = warranty;
    this.price = price;
    this.seller = seller;
    HardDisk.prototype.getTotalPrice = function () {}
}

function Product (type){
    this.type = type;
    this.getTotalPrice = function (){};
};

Book.prototype = new Product ("Book");
HardDisk.prototype = new Product ("Hard disk");


