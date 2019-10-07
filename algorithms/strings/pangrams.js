// Roy wanted to increase his typing speed for programming contests. His friend suggested that he type the sentence "The quick brown fox jumps over the lazy dog" repeatedly. This sentence is known as a pangram because it contains every letter of the alphabet.

// After typing the sentence several times, Roy became bored with it so he started to look for other pangrams.

// Given a sentence, determine whether it is a pangram. Ignore case.

function pangrams(s) {
    const lower_case = "abcdefghijklmnopqrstuvwxyz"
    const upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let alphabet_count = 26, contains_space = false
    for (let i = 0; i < lower_case.length; i++) {
      //check if all the alphabet character exists
        if (s.includes(lower_case[i]) || s.includes(upper_case[i])) {
          --alphabet_count
        }
    }

    // Check if a space exists in the string
    if (/\s/.test(s)) { contains_space = true }

    if (!contains_space || alphabet_count > 0) return 'not pangram'

    return 'pangram'
}

module.exports = pangrams