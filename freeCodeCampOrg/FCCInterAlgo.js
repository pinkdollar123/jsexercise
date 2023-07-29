function sumAll(arr) {

    arr.sort((a,b) => a -b);
    console.log(arr);
  
    const result = [];
    for(let i = arr[0]; i <= arr[1]; i++){
      result.push(i);
    }
    console.log(result);
    let container = result.reduce((sum, num) => sum + num , 0);
    console.log(container);
    return container;
  }
  
  sumAll([1, 4]);

//   * diff of arrays

function diffArray(arr1, arr2) {
    const newArr = [];
  
    let holder = arr1.filter((elem) => !arr2.includes(elem));
    console.log(holder);
    let holder2 = arr2.filter((elem) => !arr1.includes(elem)); console.log(holder2);
  
    let mainHolder = holder.concat(holder2);
    console.log(mainHolder);
  
    return mainHolder;
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// * Destroyer using Seek And Destroy

function destroyer(arr) {

    // * Below provides a container for the arguments object and transform it to an array structure that can be used.
    const valuesToRemove = Array.from(arguments).splice(1);
    
    // ? shows the values
    console.log(valuesToRemove);
  
  // * here we filtered the values that aren't included on the valuesContainer
    const filteredValues = arr.filter((elem) => !valuesToRemove.includes(elem));
    console.log(filteredValues);
  
    return filteredValues
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);g

  // * object mapping filter, for loop using Object.keys to match the given argument

  function whatIsInAName(collection, source) {

    const sourceKeys = Object.keys(source);
    // console.log(sourceKeys);
  
    return collection.filter(obj => {
      for(let i = 0 ; i < sourceKeys.length; i++){
        // console.log(i)
        // console.log(obj);
        // console.log(obj[sourceKeys[i]]);
        // console.log(source[sourceKeys[i]])
        // console.log(source[sourceKeys[i]]);
        if(obj[sourceKeys[i]] !== source[sourceKeys[i]]){
          return false;
        }
      }
      return true;
    })
  }
  
  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
  
  // Define the Dog class
  class Dog {
    constructor(name, breed, age) {
      this.name = name;
      this.breed = breed;
      this.age = age;
    }
  
    bark() {
      console.log('Woof! Woof!');
    }
  }
  
  // Create an instance of the Dog class
  const myDog = new Dog('Max', 'Labrador Retriever', 3);
  
  let key = Object.keys({name: 'Max', breed: "Labrador Retriever"});
  let keySource = {name: 'Max', breed: "Labrador Retriever"};
  
  console.log(key[0] === 'name');
  console.log(key[1]);
  console.log(keySource[key[1]] === myDog['breed']);
  console.log(keySource[key[1]])
  console.log(myDog['breed']);
  console.log(myDog[key[0]]);
  console.log(keySource[key[0]] === "Max");
  // Access and log the properties of the Dog instance
  console.log(`Name: ${myDog.name}`);
  console.log(`Breed: ${myDog.breed}`);
  console.log(`Age: ${myDog.age}`);
  
  // Call the bark method of the Dog instance
  myDog.bark();
  

  