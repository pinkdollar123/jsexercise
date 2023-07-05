"use strict";

var language = document.getElementById("jstitle");
console.log("The contents of jstitle", language.innerHTML);

// *this gets all the b elements in the document
var bTags = document.getElementsByTagName("b");

// * this display all the b elements in the console
console.log("\n All the <b> tags in the document", bTags);
console.log("The first <b> tag" , bTags[0].innerHTML);

var pTags = document.getElementsByTagName("p");
console.log("\n All the <p> tags in the document", pTags.length);

// * Define this variable to get the element of jstext
var jstext = document.getElementById('jstext');
// * Define this variable and invoked jstext variable+theElementByTagname('tagname')
var jstextbTags = jstext.getElementsByTagName("b");

console.log("\n Listing the <b> tags in jstext", jstextbTags);

// ? MODIFYING DOM OF A WEBPAGE

var jsdesc = document.getElementsByClassName("jsdescription");
console.log("\n The innerHTML of the first jsdescription element:", jsdesc[0].innerHTML);

// * this uses css selector by calling the tag name i then the class name jsdescription when combined i.jsdescription
var iSelect = document.querySelectorAll("i.jsdescription");
console.log("\n Using the CSS select i.jsdescription", iSelect[0].innerHTML);

// ? Defines and get the Document Object jstitle id
var data = document.getElementById("jstitle");
// * invoked using console log
console.log("\n Modifying the innerHTML of an element");
console.log("Old data:", data.innerHTML);
// * assigns a new variable adding the data.innerHTML value to a new value
var newData = data.innerHTML = "Programming with JS";
console.log("New data :", newData);

/*
* ACCESSING THE DOM STRUCTURES REFERS TO TREE ELEMENTS AND ITS ELEMENTS ARE NODES
? NODES consist child or child nodes
*/

var jsDescription = document.getElementById('jsdescription');
console.log("Acccessing text using innerHTML for description:\n", jsDescription.innerHTML);

// * Locates the childNodes of this given tracker jsDescription id
console.log("accessing childNodes:", jsDescription.childNodes);
// *firstChild node was the first text,
console.log("Accessing firstChild.nodeValue:", jsDescription.firstChild.nodeValue);
console.log("Accessing childNodes[1].firstChild.nodeValue:", jsDescription.childNodes[1].firstChild.nodeValue);
console.log("Accessing lastChild.nodeValue:", jsDescription.lastChild.nodeValue);

console.log("document.nodeValue:", document.nodeValue);

let jsTitle = document.getElementById("jstitle");
// * nodeName gets the element name
console.log("jstitle.nodeName", jsTitle.nodeName);
console.log("document.nodeValue:", document.nodeName);

console.log("The document:", document.nodeType);
console.log("Element node (id#jstitle):", jsTitle.nodeType);
console.log("Text node(firstChild of an element):", jsTitle.firstChild.nodeType );

// ? Adding Nodes to the DOM

let listItem1 = document.createElement("li");
let parentItem = document.getElementById("unOrder");
console.log("Creating new elements", listItem1);

listItem1.textContent = "Javascript";
console.log("The first li element created with textContent", listItem1);
// * Allows creaton of element using createElement
let listItem2 = document.createElement("li");
// * Allows creation of Text Node and passing args to ("Java");
var text2 = document.createTextNode("Java");
// *invoking the appendChild() method by appending the text node as a child of the li element so it will be li{text2},
listItem2.appendChild(text2);
console.log("The second li element", listItem2);

// *prepend(args) insert nodes before the first child nodes 
parentItem.prepend(listItem1);
// *append(args) insert nodes after the last child
parentItem.append(listItem2);

var h4 = document.createElement('h4');
h4.textContent = "This is a list of useful programming languages:";
// *invoked the fN document.body.insertBefore(args, args2) first args the element needs to be inserted into the DOM and the second args2 is the element before which it needs to appear
document.body.insertBefore(h4, parentItem);

// call the DOM then add style to it
h4.style.background = "yellow";
// * there's no insertAfter so use insertBefore()

var h3 = document.createElement("h3");
h3.textContent = "This marks the end of the unordered list";
// * nextSibling will be added before the next sibling of the targetElement
document.body.insertBefore(h3, parentItem.nextSibling);

// *Removing and replacing nodes in the DOM
jsTitle = document.getElementById("jstitle");
// * removes a node in the DOM dom#id.remove
jsTitle.remove();

var listItem = parentItem.firstElementChild;
// * declares the parentItem + the method then invoking below the removeChild()
parentItem.removeChild(listItem);


// *Substituting existing node with a new one

var listItem3 = document.createElement("li");
listItem3.textContent = "Go";

// *replaceChild(nodetobeuse, nodetobereplaced), syntax, parentnode.replaceChild(args1, args2);
parentItem.replaceChild(listItem3, listItem2);

