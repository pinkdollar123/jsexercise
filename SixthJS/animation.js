"use strict";

// *MANIPULATION 

function animation(){
    var dot = document.getElementById("circle");
    var loc = 450;

    // * The arguments to this include a function which needs to be executed periodically. And the second argument is the frequency with which it needs to be executed. In our case, we will run a function called frame every 10 milliseconds.
    var time = setInterval(frame, 10);

    // *So it is within the frame function where we will need to define the movement of our circle. So let us get right down to it. First, you will need to define when exactly the circle's movement will stop. That is, we need to set a bound for the setInterval function.
    function frame(){
        
        // *We will do that when the value of the loc variable is 0. So for each invocation of the frame method, we will check for this value and if it is 0, we will invoke the clearInterval method. This complements with the setInterval, and note how we link this clearInterval with the setInterval we have defined. The setInterval function returns an ID value, which we assign to the variable time. And when invoking clearInterval, we passed that ID as the argument in order to explicitly link this clearInterval with a setInterval.

        if(loc == 0){
            clearInterval(time);
        }else {
            // *Reduces the current location of the circle
            loc--;

            // *updates the current location of the circle by placing a new location value + pixel of it for the style css placement inside the square
            dot.style.top = loc + "px"; 
            dot.style.right = loc + "px"; 
        }
    }
}

// * 