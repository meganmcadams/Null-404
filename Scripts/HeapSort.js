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

function heapify(array, n, i) {
    
    big_i = i; // biggest index defaulted to i
    left = 2 * i + 1; // left 
    right = 2 * i + 2; // right

    if (left < n && array[left] > array[big_i]) { // if left is new biggest

        big_i = left; // set biggest index to left

    }

    if (right < n && array[right] > array[big_i]) { // if right is new biggest

        big_i = right; // set right to biggest

    if big_i != i: # if biggest index isn't i
        # swap array[i] and array[big_i]
        temp = array[i]
        array[i] = array[big_i];
        array[big_i] = temp;

        heapify(array, n, big_i); // recursive call with biggest index

    }

}

function heapsort(array) {

    n = array.length; // get length of array

    i = n; // 2 - 1 # set i
    while (i >= 0) {

        heapify(array, n, i);
        i -= 1; // decrement i

    }

    i = n - 1
    while (i > 0) {
        // swap array[0] and array[i]
        temp = array[0]
        array[0] = array[i]
        array[i] = temp

        heapify(array, i, 0);
        i -= 1; // decrement i

    }

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