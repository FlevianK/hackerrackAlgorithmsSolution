// Alice wrote a sequence of words in CamelCase as a string of letters, s, having the following properties:

// It is a concatenation of one or more words consisting of English letters.
// All letters in the first word are lowercase.
// For each of the subsequent words, the first letter is uppercase and rest of the letters are lowercase.
// Given s, print the number of words in s on a new line.

// For example, s = OneTwoThree. There are 3 words in the string.

function camelcase(s) {
    s = s.trim()
    if (s.length < 1) return;
    let wordCount = 1
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) === s.charAt(i).toUpperCase()) {
            ++wordCount
        }
    }
    return wordCount
}

module.exports = camelcase