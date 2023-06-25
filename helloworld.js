let helloWorld = document.getElementById("helloworld");
helloWorld.innerHTML = "Hello World!";

let btnChange = document.getElementById("btnChange");
btnChange.innerHTML = "Change the text above";

function textChange(){
    if(helloWorld.innerHTML === "Hello World!"){
        helloWorld.innerHTML = "Text Changed!";
        btnChange.innerHTML = "Reset";
    } else {
        helloWorld.innerHTML = "Hello World!";
        btnChange.innerHTML= "Change the text Above";
    }
}

btnChange.addEventListener("click", textChange);

