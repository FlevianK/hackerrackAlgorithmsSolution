const assert = require('assert').strict

const balancedSums = require('./balancedSums')

let arr = [1, 2, 3] // NO
// let arr = [2, 0, 0, 0] //YES >> In the second case, arr[0] = 2 is between two subarrays summing to 0.
assert.deepEqual(balancedSums(arr), 'NO')
