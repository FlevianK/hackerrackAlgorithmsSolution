// Can you modify your previous Insertion Sort implementation to keep track of the number of shifts it makes while sorting? The only thing you should print is the number of shifts made by the algorithm to completely sort the array. A shift occurs when an element's position changes in the array. Do not shift an element if it is not necessary.

function runningTime(arr) {
    let shift_count = 0 //Initialize shift counter
    for (let i = 0; i < arr.length; i++) {
        let value = arr[i]
        let j = i - 1;
        for (j; j > -1 && arr[j] > value; j--) {
            arr[j + 1] = arr[j]
            shift_count++ //Increment shift counter by 1 whenever a shift happens
        }
        arr[j + 1] = value
    }
    return shift_count
}

module.exports = runningTime