// Bubble Sort
function bubbleSort(array){
    // declares a variable for the array length counter
    const len = array.length;
    // declares a variable for the status of the swapping
    let swapped;
  
    do {
      // set swapped to flase and do for loop and if statement
      swapped  = false;
      // used for loop to iterate i variable as the array index number for the current array
      for (let i = 0; i < len - 1 ; i++){
        // sets a condition if the current array index i is greater than the next element array index
        if (array[i] > array[i + 1]){
          /* if the condition above is true then the swapping is made below 
          the elements are wrapped in an array destructuring assignment which is 
          [array1,array2] = [array2,array1]
          */
          [array[i], array[i + 1]] = [array[i + 1], array[i]];
          // then sets the swapped variable to true and proceed with next block
          swapped = true;
        }
      }
      // since the last condition was true while swapped, will loop and repeat the do while
    }while (swapped);
    // once there's no more swapping of the array length then return array will be passed to the bubble sort parameter value
    return array;
  }
  
  const mixNumbers = [ 9, 7, 2, 4, 5, 10, 1, 15, 4, 2, 3,];
  const newNumbers = [13,32,26,35,10]
  console.log(bubbleSort(mixNumbers));

  console.log(bubbleSort(newNumbers))