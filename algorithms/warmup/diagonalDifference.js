const diagonalDifference = arr => {
  let difference = 0
  let n = arr.length
  for (let i = 0, j = n - 1; i < n, j > -1; i++, j--) {
     difference += arr[i][i]
     difference -= arr[i][j]
  }
  if (difference < 0) difference = -difference
  return difference
}

module.exports = diagonalDifference