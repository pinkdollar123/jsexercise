var nextCourse = 'TypeScript';

window.onload = function showNextCourse(){
    document.getElementById("futureCourses").innerHTML = nextCourse;
}

// function choiceMade(choice){
//     // alert(`Choice made: ${choice}`);
//     document.getElementById("courseName").value = choice; 
// }


function validate(){
    if((feedback.like[0].checked == false) && (feedback.like[1].checked == false)){
        // alert("You must check Yes or No");

    }
}

var dateToday = new Date();

function showDate(){
    var showDate = document.getElementById("dateToday");

    showDate.innerHTML += dateToday.toLocaleDateString('en-US',{ weekday: "long", month: "long", year: "numeric", day: "numeric",});
    showDate.innerHTML += dateToday.toISOString().slice(0,10);
}

function calculateThis(){
    // result = Math.round(8.2);
    // result = Math.sqrt(81);
    // result = Math.abs(-81);
    // result = Math.ceil(8.2);
    // result = Math.floor(8.9);
    // result = Math.trunc(8.5289);
    // result = Math.min(8,9,5);
    // result = Math.max(8,9,5);
    // result = Math.random();

    document.getElementById("result").innerHTML = result;
}

var instructor = "Zosimo Uy";

class Course {
    constructor(courseName, instructor){
        this.courseName = courseName;
        this.instructor = instructor;
    }

    about(){
        return this.courseName  + " is being taught by " + this.instructor;
    }
}

function choiceMade(courseChosen){
    currentCourse = new Course(courseChosen, instructor);
    document.getElementById("courseInfo").innerHTML = currentCourse.about();
}