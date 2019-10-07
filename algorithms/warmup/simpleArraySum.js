// Given an array of integers, find the sum of its elements.
// For example, if the array ar = [1, 2, 3], 1 + 2 + 3 = 6, so return 6.

function simpleArraySum(ar) {
    let sum = 0 //initialize total
    let n = ar.length
    while (n--) {
      sum += ar[n]
    }
    return sum
}

module.exports = simpleArraySum