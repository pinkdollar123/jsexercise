"use strict";

// * screen object is one of the components of Browser Object Model

console.log("Width of the screen :", screen.width);
console.log("height of the screen :", screen.height);
console.log("Depth of the color :", screen.colorDepth);

console.log("\n \n Current Page Location: ", window.location.href);
console.log("The protocol used:", window.location.protocol);

var newDoc = document.getElementById("newDoc");

newDoc.onclick = function () {
    window.location.assign("https://skillsoft.com/");
}

// defining a variable by retrieving it from the DOM tree
var goBack = document.getElementById("goBack");
// go back to last page in the browser history
goBack.onclick = function () {
    window.history.back();
}

// *We can use this for example, in order to check whether the end user has enabled cookies on their browser using the cookieEnabled attribute.
console.log("\n\n Check whether the cookie is enabled on the user:", navigator.cookieEnabled);

// ! appVersion was deprecated already and platform
console.log("Version of the browser:", navigator.appVersion);
console.log("platform of the user", navigator.platform);

// * The Window Object

window.onload = function () {

    var openButton = document.getElementById("openButton");
    var closeButton = document.getElementById("closeButton");

    var historyButton = document.getElementById("historyButton");
    var wikipediaButton = document.getElementById("wikipediaButton");
    var newWindow = null;

    openButton.onclick = function () {

        newWindow = window.open("https://skillsoft.com/");
    }
    
    closeButton.onclick = function () {
        if (newWindow != null){

            // close() method
            newWindow.close();
        }
    }

    historyButton.onclick = function () {
        
        var browserHistory = document.getElementById("history");
        browserHistory.innerHTML = `Your browser window history has ${window.history.length} entries`;
    }

    wikipediaButton.onclick = function () {
        
        window.location = "https://www.wikipedia.org/";
    }
}

