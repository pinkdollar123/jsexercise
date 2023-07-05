"use strict";

function validateForm(){

    var myForm = document.forms["myForm"]

    var uname = myForm["username"];

    var age = myForm["age"];

    var residentStatus = myForm["residency"];

    // use queryselectorAll for multiple selection such as checkboxes input:checked
    var accountType = document.querySelectorAll('input[name=account]:checked');

    var nationality = myForm["nationality"];

    // *validation that contains alphabets small and capital
    var regXname = /^([a-zA-Z]+)$/;

    if (uname.length < 6 ){
        
        alert ("The username needs to be at least 6 characters long");
        uname.focus();
        return false;

    }
    // * test the value of the username field that was input
    if(!regXname.test(uname.value)){
        
        uname.style.border = "solid 2px red";
        document.getElementById("unameLabel").innerHTML = "The name can only have alphabets";
        document.getElementById("unameLabel").style.visibility = "visible";
        return false;

    }else{
        
        uname.style.border = "solid 2px green";
        document.getElementById("unameLabel").innerHTML = 'The username is valid!';
        document.getElementById("unameLabel").style.color = "green";
        document.getElementById("unameLabel").style.visibility= "visible";

        /*
        // * arrayOfAccounts
        var selectedAccounts = [];

        // * If the user choses multiple accounts then forloop will handle it to push all the elements to the array of accounts

        for(let i = 0; i < accountType.length; i++){
            selectedAccounts.push(accountType[i].value);
        }

        var alertMsg = `The details supplied: \n
        Username: ${uname} \n Age: ${age} \n Resident status: ${residentStatus}
        \nAccounts selected: ${selectedAccounts} \nNationality index: ${nationality}`;

        // * In the theory section of this learning path, we covered the fact that variables in JavaScript are created as soon as the page associated with the JavaScript is loaded in the browser. And they are destroyed the moment a different page has been loaded.

        // ? Therefore if you want to console.log a data before it moves to another page you should declare it before moving to the next page or before the page reloaded

        console.log("The details supplied:");
        console.log(`Username: ${uname}`);
        console.log(`Age: ${age}`);
        console.log(`Resident status: ${residentStatus}`);
        console.log(`Accounts selected: ${selectedAccounts}`);
        console.log(`Nationality index: ${nationality}`);

        
        alert(alertMsg);

        return true;
        */
    }

    if(age.value < 18){
        alert("You must be at least 18 years old to open an account");
        return false;
    }
    
    if(accountType.length == 0){
        document.querySelectorAll('input[name=account]')[1].checked = true;
    }

    confirm("Do you want to submit the form?");

    return true;
}