// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers.
// Then print the respective minimum and maximum values as a single line of two space-separated long integers.

// For example, arr = [1, 3, 5, 7, 9] . Our minimum sum is 1 + 3 + 5 + 7 = 16 and our maximum sum is 3 + 5 + 7 + 9 = 24. We would print 16 24

const miniMaxSum = arr => {
  let sum = 0;
  let smallerDigit = arr[0];
  let biggerDigit = arr[0];

  for (let index = 0; index < arr.length; index++) {
    sum += arr[index]
    if (arr[index] > biggerDigit) biggerDigit = arr[index]
    if (arr[index] < smallerDigit) smallerDigit = arr[index]
  }

  console.info(sum - biggerDigit, sum - smallerDigit)
}

module.exports = miniMaxSum
