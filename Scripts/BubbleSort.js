// Understanding of algorithm and basis for implementation
// comes from https://www.geeksforgeeks.org/bubble-sort/

const btn = document.getElementById('run_algorithm');

btn.addEventListener('click', function onClick(event) {

    arr = document.getElementById("run_algorithm").value;
    
    bubbleSort(arr);


  
});

function bubbleSort(arr) {

    arr = arr.split(','); // arr to sort
    let passes = [arr[0]]; // initialize passes array with the original arr

    const size = length(arr);
    let i = 0;
    let temp = 0;
    let swapped = false;

    while(true){ // while not sorted yet

        while(i < size - 1){ // for each element minus the last element

            if (arr[i] > arr[i + 1]){ // if the curr element is greater than the element after

                // swap elements
                temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;

                swapped = true; // indicate that elements were swapped

            }

        } passes.push(arr); // add current array to passes array

        if(!swapped){ break; }
        else { swapped = false; }

    }

    return passes;

}

function convertArrayToDisplay(arr){

    let size = length(arr);
    for(let i = 0; i < size; i++){

        // put in string alongside the current pass # (aka i)

    }

}