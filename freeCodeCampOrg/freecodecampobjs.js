// instanceof
function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
  }
  
  // Only change code below this line
  
  let myHouse = new House(5);
  console.log(myHouse instanceof House);

//   Object parameters

function Dog(name, color, numLegs =4) {
    this.name = name;
    this.color = color;
    this.numLegs = numLegs;
  }
  
  let terrier = new Dog('Teri','yellow')

// *  understand own properties hasOwnProperties()

function Bird(name) {
    this.name = name;
    this.numLegs = 2;
  }
  
  let canary = new Bird("Tweety");
  let ownProps = [];
  // Only change code below this line
  
  for(let props in canary){
    if(canary.hasOwnProperty(props)){
      ownProps.push(props);
    }
  }
  
  console.log(ownProps);

  

