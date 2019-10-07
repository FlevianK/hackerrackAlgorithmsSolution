const plusMinus = arr => {
  let plus = 0, minus = 0, zero = 0

  for (index = 0; index < arr.length; index++) {
    if (arr[index] > 0) {
      plus++
    } else if (arr[index] < 0) {
      minus++
    } else {
      zero++
    }
  }
  console.info((plus / arr.length).toPrecision(6))
  console.info((minus / arr.length).toPrecision(6))
  console.info((zero / arr.length).toPrecision(6))
}

module.exports = plusMinus