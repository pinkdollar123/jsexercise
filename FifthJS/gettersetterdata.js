function getterSetterData(){

    // *Closure variable and can be accessed by nestedFunction
    var myVar = 1;
    // *Declaring private variables using var keyword allows it to be used on function constructor in Javascript thanks to clsoures
    // ? This is a nested function inside the getterSetterData()
    return {

        // *The nested function
        getVar: function(){
            return myVar;
        },

          // ?Another nested function called setVar that sets a new value
        setVar: function(v){
            myVar = v;
        }      
    }   
    // *End of nested function
}

let objVar = getterSetterData();

console.log("Initial value of myVar:" + objVar.getVar());

objVar.setVar(2);
console.log("Updated numeric value of myVar", objVar.getVar());

objVar.setVar("I am now a string!");
console.log("Updated string value of myVar", objVar.getVar);