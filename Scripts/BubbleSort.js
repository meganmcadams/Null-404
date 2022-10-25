// Understanding of algorithm and basis for implementation
// comes from https://www.geeksforgeeks.org/bubble-sort/

const btn = document.getElementById('run_algorithm');
const result_box = document.getElementById('results');

btn.addEventListener('click', function onClick(event) {

    arr = document.getElementById("run_algorithm").value;
    
    result = convertArrayToDisplay(bubbleSort(arr));
    result_box.innerHTML = result;

  
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

    let result = "";
    let size = length(arr);
    let element_size = length(arr[0]);

    for(let i = 0; i < size; i++){ // for each pass

        result += "Pass " + i.toString() + ": "; // add the pass #
        for(let j = 0; j < element_size; j++){ // for each element in the current pass

            result += arr[j].toString(); // add the current element
            if(j < size - 1){ result += ", "; } // if is not the end, add a comma
            else { result += "\n"; } // if it is the end, add a newline

        }

    }

    return result;

}