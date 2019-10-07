const assert = require('assert').strict

const diagonalDifference = require('./diagonalDifference')
const plusMinus = require('./plusMinus')
const timeConversion = require('./timeConversion')
const birthdayCakeCandles = require('./birthdayCakeCandles')
const miniMaxSum = require('./miniMaxSum')
const staircase = require('./staircase')
const simpleArraySum = require('./simpleArraySum')
const solveMeFirst = require('./solveMeFirst')
const aVeryBigSum = require('./aVeryBigSum')
const compareTriplets = require('./compareTriplets')

assert.deepEqual(diagonalDifference([[1, 2, 3],[4, 5, 6],[9, 8, 9]]), 2)
assert.deepEqual(timeConversion('12:00:00AM'), '00:00:00')
assert.deepEqual(birthdayCakeCandles([3, 4, 3, 3]), 1)
assert.deepEqual(solveMeFirst(2, 3), 5)
assert.deepEqual(simpleArraySum([1, 2, 3, 4, 10, 11]), 31)
assert.deepEqual(compareTriplets([5, 6, 7], [3, 6, 10]), [1, 1])
assert.deepEqual(aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]), 5000000015)

console.log('<<< PlusMinus output >>>')
// PlusMinus should print out the results:
// Input: 5, [0, 0, -1, 1, 1]
// Output:
    // 0.400000
    // 0.200000
    // 0.400000
plusMinus([0, 0, -1, 1, 1])
console.log('<<< miniMaxSum output >>>')
// miniMaxSum should print out the results:
// Input: [1, 2, 3, 4, 5]
// Output: 
    // 10 14
miniMaxSum([1, 2, 3, 4, 5])

console.log('<<< staircase output >>>')
// staircase should print out the results:
// Input: 4
// Output: 
//     #
//    ##
//   ###
//  ####
staircase(4)
