// Understanding of algorithm and basis for implementation
// comes from https://www.geeksforgeeks.org/insertion-sort/

function heapify(array, n, i, passes) {

    passes.push([[...arr], "Heapifying..."]);
    
    big_i = i; // biggest index defaulted to i
    left = 2 * i + 1; // left 
    right = 2 * i + 2; // right

    if (left < n && array[left] > array[big_i]) { // if left is new biggest

        big_i = left; // set biggest index to left
        passes.push([[...arr], "Set biggest index to left..."]);

    }

    if (right < n && array[right] > array[big_i]) { // if right is new biggest

        big_i = right; // set right to biggest
        passes.push([[...arr], "Set biggest index to right..."]);

    } 
    
    if (big_i != i) { // if biggest index isn't i
        // swap array[i] and array[big_i]
        temp = array[i];
        array[i] = array[big_i];
        array[big_i] = temp;

        heapify(array, n, big_i, passes); // recursive call with biggest index

    }

}

function Sorting_Algorithm(array) {

    let passes = [[[...arr],"Initial array"]]; // initialize passes array with the original arr

    n = array.length; // get length of array

    i = n; // 2 - 1 # set i
    while (i >= 0) {

        heapify(array, n, i, passes);
        i -= 1; // decrement i

    }

    passes.push([[...arr], "Heapified"]);

    i = n - 1
    while (i > 0) {
        // swap array[0] and array[i]
        temp = array[0];
        array[0] = array[i];
        array[i] = temp;

        heapify(array, i, 0, passes);
        i -= 1; // decrement i

    }

    passes.push([[...arr], "Final result"]);

    return passes;

}
