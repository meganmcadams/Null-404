// Understanding of algorithm and basis for implementation
// comes from https://www.geeksforgeeks.org/bubble-sort/

function Sorting_Algorithm(arr) {

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