const assert = require('assert').strict

const findMedian = require('./findMedian')
const insertionSort = require('./insertionSort')
const insertionSort1 = require('./insertionSort1')
const insertionSort2 = require('./insertionSort2')
const runningTime = require('./runningTime')

assert.deepEqual(insertionSort([7, 4, 3, 5, 6, 2]), [2, 3, 4, 5, 6, 7])
assert.deepEqual(runningTime([2, 1, 3, 1, 2]), 4)
assert.deepEqual(findMedian([0, 1, 2, 4, 6, 5, 3]), 3)

console.log('<<< insertionSort1 output >>>')
// InsertionSort1 should print out the results:
// Input: 6, [2, 4, 6, 8, 3]
// Output: 
    // 2 4 6 8 8 
    // 2 4 6 6 8 
    // 2 4 4 6 8 
    // 2 3 4 6 8
insertionSort1(5, [2, 4, 6, 8, 3])

console.log('<<< insertionSort2 output >>>')
// InsertionSort2 should print out the results:
// Input: 6, [1, 4, 3, 5, 6, 2]
// Output: 
    // 1 4 3 5 6 2 
    // 1 3 4 5 6 2 
    // 1 3 4 5 6 2 
    // 1 3 4 5 6 2 
    // 1 2 3 4 5 6
insertionSort2(6, [1, 4, 3, 5, 6, 2])