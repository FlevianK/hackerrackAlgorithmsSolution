// The median of a list of numbers is essentially it's middle element after sorting. The same number of elements occur after it as before. Given a list of numbers with an odd number of elements, can you find the median?

// For example, the median of arr = [1, 2, 3, 4, 5] is 3, the middle element in the sorted array.

function findMedian(arr) {
    for (let i = 0; i < arr.length; i++) {
        let value = arr[i]
        let j = i - 1;
        for (j; j > -1 && arr[j] > value; j--) {
            arr[j + 1] = arr[j]
        }
        arr[j + 1] = value

    }
    return arr[Math.floor(arr.length / 2)]
}

module.exports = findMedian