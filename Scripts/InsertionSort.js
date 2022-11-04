// Understanding of algorithm and basis for implementation
// comes from https://www.geeksforgeeks.org/insertion-sort/

const btn = document.getElementById('run_algorithm');
const result_input = document.getElementById('result_input');
const result_box = document.getElementById('result_box');

btn.addEventListener('click', function onClick(event) {

    arr = convertToArray(result_input.value);
    passes = convertArrayToDisplay(InsertionSort(arr));
    result_box.innerHTML = passes;

});

function convertToArray(arr) {

    arr = arr.split(',');
    let size = arr.length;
    for(let i = 0; i < size; i++){

        arr[i] = parseFloat(arr[i]);

    }

    return arr;

}

function InsertionSort(arr) {

    let passes = [[...arr]]; // initialize passes array with the original arr

    const size = arr.length;

    for (let i = 0; i < size; i++) { // for every item in array

        val = arr[i]; // set val
        hole = i; // set hole

        while (hole > 0 && arr[hole - 1] > val) { // while still in range and need to move

            arr[hole] = arr[hole - 1]; // decrement hole
            hole -= 1; // decrement hole index

        }

        if (hole != i) {

            array[hole] = val

        }

        passes.push([...arr]);

    }

    return passes;

}

function convertArrayToDisplay(passes) {

    let result = "";
    let size = passes.length;
    let element_size = passes[0].length;

    for (let i = 0; i < size; i++) { // for each pass

        result += "Pass " + i.toString() + ": "; // add the pass #
        for (let j = 0; j < element_size; j++) { // for each element in the current pass

            result += passes[i][j].toString(); // add the current element
            if (j < element_size - 1) { result += ", "; } // if is not the end, add a comma
            else { result += "<br>"; } // if it is the end, add a newline

        }

    }

    return result;

}