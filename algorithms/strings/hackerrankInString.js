const hackerrankInString = s => {
  let word = 'hackerrank'
  for (let index = 0; index < s.length; index++) {
    if (word.charAt(0) === s.charAt(index))  {
      word = word.slice(1)
    }
  }
  return word ? 'NO' : 'YES'
}

module.exports = hackerrankInString
