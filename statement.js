let firstName, greet, date;
firstName = 'Dolly';
greet = 'Hello';
// declares the new date

// this is a method used to retrieve te current date and time as string in a localized format based on the user's browser settings
    
    function clockTime(){
        now = new Date();
        let currentDateTime = now.toLocaleString();
        document.getElementById("demo4").innerHTML = `${greet} ${firstName} the date now is ${currentDateTime}`;
    }
    clockTime();
    setInterval(clockTime, 1000);