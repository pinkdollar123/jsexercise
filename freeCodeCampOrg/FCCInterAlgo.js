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

  