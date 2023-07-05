"use strict";

// * Asynchronous method fetch
// * Client Side we will make use of an asynchronous function called fetch in order to retrieve an image from the Internet, and we'll also give you a very quick introduction to Ajax. Which is short for Asynchronous JavaScript and XML, and is used by client-side applications to fetch data from the server in an asynchronous manner.

const imgURL = "https://images.pexels.com/photos/3510717/pexels-photo-3510717.jpeg?cs=srgb&dl=pexels-stein-egil-liland-3510717.jpg&fm=jpg&_gl=1*1iknvvl*_ga*MTE2MDYwMDM2LjE2ODg1MzkxNDE.*_ga_8JE65Q40S6*MTY4ODUzOTE0MC4xLjEuMTY4ODUzOTIyOS4wLjAuMA..";


//  ? create a function for the fetch API in order to retrieve that image Given that it executes asynchronously, the fetch() method can be used in order to retrieve various components of a web page in an asynchronous manner. And this includes text, videos, as well as images as we have just seen. 

let fetchImage = async () => {

        // * Invoked a fetch() function this is asynchronously and it will continue to invoke the next line function blob()
    var myImageResponse = await fetch(imgURL);
    // *the object below has a function called blob(), which renders the response as a blob. 
    console.log("Image response:\n ", myImageResponse.blob());
};

function ajaxRequest(){

    // * So this is a function called Request Listener, and this simply prints out the response attribute from the object which is returned by making an XMLHttpRequest.

    // function reqListener(){
    //     console.log(this.response);
    // }

    // *we first initialize an XMLHttpRequest() object or XHR for short and this will be used in order to make an Ajax call.
    var xmlRequest = new XMLHttpRequest();

    // *Now there are many different events with this object can listen for and one of this is called "load". When the resource requested by our xmlRequest object has been loaded then the reqListener function will be invoked but we specifically bind it to the (xmlRequest) itself. 
    // xmlRequest.addEventListener("load", reqListener.bind(xmlRequest));

    // *Following that, we use the xmlRequest object in order to make a "GET" request for the image using its open method.
    xmlRequest.open("GET", imgURL);
    xmlRequest.send();

    xmlRequest.onload = function(e){
        console.log(xmlRequest.response)
    }

}