// Given a sorted list with an unsorted number  in the rightmost cell, can you write some simple code to insert  into the array so that it remains sorted?

// Since this is a learning exercise, it won't be the most efficient way of performing the insertion. It will instead demonstrate the brute-force method in detail.

// Assume you are given the array arr = [1, 2, 4, 5, 3] indexed 0...4. Store the value of arr[4]. Now test lower index values successively from 3 to 0 until you reach a value that is lower than arr[4], arr[1] in this case. Each time your test fails, copy the value at the lower index to the current index and print your array. When the next lower indexed value is smaller than arr[4], insert the stored value at the current index and print the entire array.

// The results of operations on the example array is:

// Starting array: [1, 2, 4, 5, 3] 
// Store the value of arr[4] = 3 Do the tests and print interim results:
  // [1, 2, 4, 5, 5]
  // [1, 2, 4, 4, 5]
  // [1, 2, 3, 4, 5]

function insertionSort1(n, arr) {
    for (let i = 0; i < n; i++) {
        let value = arr[i]
        let j = i - 1;
        for (j; j > -1 && arr[j] > value; j--) {
            arr[j + 1] = arr[j]
            let s = "";
            for (let i = 0; i < n; i++) {
                s += arr[i] + " ";
            }
            console.log(s)
        }
        arr[j + 1] = value
    }
    let s = "";
    for (let i = 0; i < n; i++) {
        s += arr[i] + " ";
    }
    console.log(s)
}

module.exports = insertionSort1
