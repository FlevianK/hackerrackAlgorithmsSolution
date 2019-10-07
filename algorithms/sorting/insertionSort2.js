// In Insertion Sort Part 1, you inserted one element into an array at its correct sorted position. Using the same approach repeatedly, can you sort an entire array?

// Guideline: You already can place an element into a sorted array. How can you use that code to build up a sorted array, one element at a time? Note that in the first step, when you consider an array with just the first element, it is already sorted since there's nothing to compare it to.

// In this challenge, print the array after each iteration of the insertion sort, i.e., whenever the next element has been inserted at its correct position. Since the array composed of just the first element is already sorted, begin printing after placing the second element.

// For example, there are  elements in . Working from left to right, we get the following output:

  // [3, 4, 7, 5, 6, 2, 1]
  // [3, 4, 7, 5, 6, 2, 1]
  // [3, 4, 5, 7, 6, 2, 1]
  // [3, 4, 5, 6, 7, 2, 1]
  // [2, 3, 4, 5, 6, 7, 1]
  // [1, 2, 3, 4, 5, 6, 7]

function insertionSort2(n, arr) {
    for (let i = 1; i < n; i++) {
        let value = arr[i]
        let j = i - 1;
        for (j; j > -1 && arr[j] > value; j--) {
            arr[j + 1] = arr[j]
        }
        arr[j + 1] = value
        let s = "";
        for (let i = 0; i < n; i++) {
            s += arr[i] + " ";
        }
        console.log(s)
    }
}

module.exports = insertionSort2