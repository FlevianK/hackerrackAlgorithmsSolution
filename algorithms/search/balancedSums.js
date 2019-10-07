// Watson gives Sherlock an array of integers. His challenge is to find an element of the array such that the sum of all elements to the left is equal to the sum of all elements to the right. For instance, given the array arr = [5, 6, 8, 11], 8 is between two subarrays that sum to 11. If your starting array is [1], that element satisfies the rule as left and right sum to 0.

// You will be given arrays of integers and must determine whether there is an element that meets the criterion.

function balancedSums(arr) {
    // let left_sum = 0
    // let right_sum = 0
    // arr.forEach(item => {
    //     right_sum += item
    // })

    // for (let i = 0; i < arr.length; i++) {
    //     if (left_sum === right_sum - arr[i]) return "YES"
    //     left_sum += arr[i]
    //     right_sum -= arr[i]
    // }

    // return "NO"

    let i = 0
    let j = arr.length - 1
    sum  = 0
    while (i != j) {
      if (sum >= 0 ) {
        sum -= arr[j]
        j--
      } else {
        sum +=arr[i];
        i++
      }
    }
    
  return sum === 0 ? 'Yes' : 'NO'
}

module.exports = balancedSums

