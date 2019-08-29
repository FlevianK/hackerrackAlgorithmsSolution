// Calculate and print the sum of the elements in an array, keeping in mind that some of those integers may be quite large.
function aVeryBigSum(ar) {
    // let sum = 0;

    // ar.forEach(item => {
    //     sum += item;
    // })
    // return sum;
    
    let sum = 0
    let n = ar.length
    while (n--) {
      sum += ar[n]
    }
    
    return sum;
}

module.exports = aVeryBigSum