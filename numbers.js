let x = 10;
let y = 20;
let z = x + y;


document.getElementById("demo").innerHTML = `The sum of x:${x} + y:${y} is = ${z}`;

let xx = 10;
let yy = "20";
let zz = xx + yy;

document.getElementById("demo1").innerHTML = `The sum of number ${xx} + 
string of ${yy} is = ${zz}`; 
 
let myNumber = 2;
let newTxt = "";
while (myNumber != 256) {
    myNumber = myNumber * myNumber;
    newTxt = newTxt + myNumber + "<br>";
}
document.getElementById("demo2").innerHTML = newTxt;
