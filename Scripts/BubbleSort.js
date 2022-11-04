// Understanding of algorithm and basis for implementation
// comes from https://www.geeksforgeeks.org/bubble-sort/

const btn = document.getElementById('run_algorithm');
const result_input = document.getElementById('result_input');
const result_box = document.getElementById('result_box');

btn.addEventListener('click', function onClick(event) {

    arr = convertToArray(result_input.value);
    passes = convertArrayToDisplay(bubbleSort(arr));
    result_box.innerHTML = passes;

});

function convertToArray(arr){

    arr = arr.split(',');
    let size = arr.length;
    for(let i = 0; i < size; i++){

        arr[i] = parseFloat(arr[i]);

    }

    return arr;

}

function bubbleSort(arr) {

    let passes = [[...arr]]; // initialize passes array with the original arr

    const size = arr.length;
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

            } i += 1;

        } passes.push([...arr]); // add a copy of the current array to passes array

        if(!swapped){ break; }
        else { swapped = false; }

        i = 0;

    }

    return passes;

}

function convertArrayToDisplay(passes){

    let result = "";
    let size = passes.length;
    let element_size = passes[0].length;

    for (let i = 0; i < size; i++) { // for each pass

        result += "Pass " + i.toString() + ": "; // add the pass #
        for(let j = 0; j < element_size; j++){ // for each element in the current pass

            result += passes[i][j].toString(); // add the current element
            if (j < element_size - 1) { result += ", "; } // if is not the end, add a comma
            else { result += "<br>"; } // if it is the end, add a newline

        }

    }

    return result;

}