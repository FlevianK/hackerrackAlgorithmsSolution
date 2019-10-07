// You are in charge of the cake for your niece's birthday and have decided the cake will have one candle for each year of her total age.
// When she blows out the candles, she’ll only be able to blow out the tallest ones.
// Your task is to find out how many candles she can successfully blow out.

// For example, if your niece is turning 4 years old, and the cake will have 4 candles of height 4, 4, 1, 3, she will be able to blow out 2 candles successfully,
// since the tallest candles are of height 4 and there are 4 such candles.

const birthdayCakeCandles = ar => {
  let biggerDigitFrequency = 0
  let biggerDigit = ar[0]
  for (let index = 0; index < ar.length; index++) {
    if (biggerDigit >= ar[index] && biggerDigit === ar[index]) {
      biggerDigitFrequency++
    }
    if (biggerDigit < ar[index]) {
      biggerDigit = ar[index]
      biggerDigitFrequency = 1
    }
  }

  return biggerDigitFrequency
}

module.exports = birthdayCakeCandles
