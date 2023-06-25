function selectionSort(array){
    // initiates the variable length for the array length
    const length = array.length;

    // creates outer loop for the array index
    for (let i = 0; i < length -1; i++){
        // sets the minimum index to the current value of i variable
        let mininumIndex = i;

        // innerloop for the next element and for conditional statement
        for (let j = i + 1; j < length; j++){
            /* create a condition if the next element is less than the array minimum index 
            then the current minimum index will be set to j
            */
            if (array[j] < array[mininumIndex]){
                mininumIndex = j;
            }
        }
        /* states the condition if the minimumIndex is not equals to the current index i
        */
        if (mininumIndex !== i){
        // once the condition above is true the swapping of the array elements will happen
        // the current element of array will be swapped to the next array minimum index and the
        // array minimum index will be swapped as the current array index
        [array[i], array[mininumIndex]] = [array[mininumIndex], array[i]];   
        }
    }
    // after the outer loop iteration is completed then the function will be completed
    // returning the array
    return array;
}

const sampleArray = [10, 14, 2 ,5 ,1, 9 ,3];
document.writeln(selectionSort(sampleArray));