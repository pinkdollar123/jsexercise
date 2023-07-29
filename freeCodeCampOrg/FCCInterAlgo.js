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