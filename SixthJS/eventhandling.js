"use strict"

var incCount = 0;
var decCount = 0;

window.onload = function () {

    var incButton = document.getElementById("incBtn");
    var decButton = document.getElementById("decBtn");

    decButton.onclick = countDec;
    // * So the onclick properties of any button elements are in fact event listeners and handlers. 
    incButton.onclick = function () {
        incCount++;
        var incCountMessage = document.getElementById("incCount");
        incCountMessage.innerHTML = `Increment counter = ${incCount}`;
    }

    var incDecValue = function (){
        alert("incDecVakye ! Incremented value count =" + incCount + ", Decrement value count = " + decCount);
    }

    // * Genericevent listener method below. There are other types of events which we can listen for, such as, mouse over events, or even mouse move events. #id.addEventListener("click", function)
    statusBtn.addEventListener("click", incDecValue);
    
     // eventlisteners
    //  perform the given function upon clicking
    time.onclick = displayDate;
    // applychanges once submit
    convert.onchange = convertIntoUppercase;
    // modify the behavior of the targetfocus
    convert.onfocus = onFocus;
    // hovering over the element
    mouse.onmouseover = mouseOver;
    mouse.onmouseout = mouseOut;
    // holding down the element event
    image.onmousedown = onMouseDown;
    image.onmouseup = onMouseUp;
}


function countDec() {
    decCount--;
    var decCountMessage = document.getElementById("decCount");
    decCountMessage.innerHTML = "Decrement counter" + decCount;
}

// ? Event handlers Click and Input Variety of event handlers


function displayDate(){
    currentTime.innerHTML = Date();
}

function convertIntoUppercase(){
    var uppercase = document.getElementById("convert");
    // *any values or changes on the textbox will be accepted by the event handler onchange then perform the given value then hit enter
    uppercase.value = uppercase.value.toUpperCase();
}

// eventHandler for onfocus
function onFocus(){
    var focus = document.getElementById("convert");
    focus.style.background = "yellow";
}

// *Eventhandlers for mouse events

// ? onmouseover and onmouseout event listener and handler

function mouseOver(){
    var mouseOver = document.getElementById("mouse");
    mouseOver.style.backgroundColor = "green";
    mouseOver.innerHTML = "Thank you!";
}

function mouseOut(){
    var mouseOut = document.getElementById("mouse");
    mouseOut.style.backgroundColor = "cyan";
    mouseOut.innerHTML = "Mouse Over me!!";
}

function onMouseDown(){
    var imageDown = document.getElementById("image");
    imageDown.style.backgroundColor = "red";
    imageDown.innerHTML = "Thanks for holding me!";
}

function onMouseUp(){
    var imageUp = document.getElementById("image");
    imageUp.style.backgroundColor = "black";
    imageUp.innerHTML = "Hold Me down please!";
}
