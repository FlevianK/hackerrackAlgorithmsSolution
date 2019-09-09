const assert = require('assert').strict

const aVeryBigSum = require('./algorithms/aVeryBigSum')
const balancedSums = require('./algorithms/balancedSums')
const camelcase = require('./algorithms/camelcase')
const compareTriplets = require('./algorithms/compareTriplets')
const findMedian = require('./algorithms/findMedian')
const insertionSort = require('./algorithms/insertionSort')
const insertionSort1 = require('./algorithms/insertionSort1')
const insertionSort2 = require('./algorithms/insertionSort2')
const minimumNumber = require('./algorithms/minimumNumber')
const pangrams = require('./algorithms/pangrams')
const runningTime = require('./algorithms/runningTime')
const simpleArraySum = require('./algorithms/simpleArraySum')
const solveMeFirst = require('./algorithms/solveMeFirst')
const superReducedString = require('./algorithms/superReducedString')
const diagonalDifference = require('./algorithms/diagonalDifference')
const plusMinus = require('./algorithms/plusMinus')

assert.deepEqual(solveMeFirst(2, 3), 5)
assert.deepEqual(simpleArraySum([1, 2, 3, 4, 10, 11]), 31)
assert.deepEqual(compareTriplets([5, 6, 7], [3, 6, 10]), [1, 1])
assert.deepEqual(aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]), 5000000015)
assert.deepEqual(superReducedString('aaabccddd'), 'abd')
assert.deepEqual(camelcase('saveChangesInTheEditor'), 5)
assert.deepEqual(minimumNumber(11, '#HackerRank'), 1)
assert.deepEqual(insertionSort([7, 4, 3, 5, 6, 2]), [2, 3, 4, 5, 6, 7])
assert.deepEqual(runningTime([2, 1, 3, 1, 2]), 4)
assert.deepEqual(findMedian([0, 1, 2, 4, 6, 5, 3]), 3)
assert.deepEqual(diagonalDifference([[1, 2, 3],[4, 5, 6],[9, 8, 9]]), 2)


let arr = [1, 2, 3] // NO
// let arr = [2, 0, 0, 0] //YES >> In the second case, arr[0] = 2 is between two subarrays summing to 0.
assert.deepEqual(balancedSums(arr), 'NO')

let s = 'We promptly judged antique ivory buckles for the next prize' //pangram
// let s = 'We promptly judged antique ivory buckles for the next prize' //not pangram
assert.deepEqual(pangrams(s), 'pangram')

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

console.log('<<< PlusMinus output >>>')
// PlusMinus should print out the results:
// Input: 5, [0, 0, -1, 1, 1]
// Output:
    // 0.400000
    // 0.200000
    // 0.400000
plusMinus([0, 0, -1, 1, 1])
