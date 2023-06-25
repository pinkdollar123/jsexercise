class StringSet {
    constructor(text){
        this.text = text;
    }
    textLength(){
        return this.text.length;
     }
}

const stringList = document.getElementById("stringList");

const setStrings = [
    new StringSet("1"),
    new StringSet("To"),
    new StringSet("Tre"),
    new StringSet("Four"),
]

for (const string of setStrings)
{
    const newStringElement = document.createElement('li');
    newStringElement.innerHTML = `This String consist a length of \"${string.text.length}\" characters: ${string.text}`

    stringList.appendChild(newStringElement);
}