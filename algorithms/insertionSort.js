// In the previous challenge, you wrote code to perform an Insertion Sort on an unsorted array. But how would you prove that the code is correct? I.e. how do you show that for any input your code will provide the right output?

// Challenge

// In the InsertionSort code below, there is an error. Can you fix it? Print the array only once, when it is fully sorted.
// def  insertionSort(ar)
//     i = 1
//     while (i < ar.length)
//         if (i > 0 && ar[i] < ar[i - 1])
//             value = ar[i]
//             j = i-1
//             while (j > 0 && value < ar[j])
//                 ar[j+1] = ar[j]
//                 j -= 1
//             end
//             ar[j+1] = value
//         end
//         i += 1
//     end
//     puts ar.join(" ")
// end


// Solution:
// def  insertionSort(ar)
//     i = 1
//     while (i < ar.length)
//         if (i > 0 && ar[i] < ar[i - 1])
//             value = ar[i]
//             j = i-1
//             while (j > - 1 && value < ar[j])
//                 ar[j+1] = ar[j]
//                 j -= 1
//             end
//             ar[j+1] = value
//         end
//         i += 1
//     end
//     puts ar.join(" ")
// end

// JS version A:

const insertionSort = ar => {
  for (let i = 0; i < ar.length; i++) {
    let value = ar[i]
    // store the current item value
    let j = i-1;
    for (j; j > -1 && ar[j] > value; j--) {

      // loop through the items in the sorted ar (the ar from the current to the beginning)
      // copy each item to the next one
      ar[j + 1] = ar[j]
    }
    // the last item we've reached should now hold the value of the currently sorted item
    ar[j + 1] = value
  }

  return ar
}

// JS version B (Direct translation).

// const insertionSort = ar => {
//   let i = 1
//   while (i < ar.length) {
//     if (i > 0 && ar[i] < ar[i - 1]) {
//       let value = ar[i]
//       let j = i - 1
//       while (j > -1 && value < ar[j]) {
//         ar[j + 1] = ar[j]
//         j -= 1
//       }
//       ar[j + 1] = value
//     }
//     i += 1
//   }
//   return ar
// }

module.exports = insertionSort
