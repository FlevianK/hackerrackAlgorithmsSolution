// Louise joined a social networking site to stay in touch with her friends. The signup page required her to input a name and a password. However, the password must be strong. The website considers a password to be strong if it satisfies the following criteria:

// Its length is at least 6.
// It contains at least one digit.
// It contains at least one lowercase English character.
// It contains at least one uppercase English character.
// It contains at least one special character. The special characters are: !@#$%^&*()-+
// She typed a random string of length n in the password field but wasn't sure if it was strong. Given the string she typed, can you find the minimum number of characters she must add to make her password strong?

// Note: Here's the set of types of characters in a form you can paste in your solution:
  // numbers = "0123456789"
  // lower_case = "abcdefghijklmnopqrstuvwxyz"
  // upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  // special_characters = "!@#$%^&*()-+"

function minimumNumber(n, password) {
    // Return the minimum number of characters to make the password strong
    const numbers = "0123456789"
    const lower_case = "abcdefghijklmnopqrstuvwxyz"
    const upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const special_characters = "!@#$%^&*()-+"
    let password_checks = {
        number_exists: false,
        lower_case_exists: false,
        upper_case_exists: false,
        special_characters_exists: false
    }
    let existing_char_count = 0

    for (let i = 0; i < n; i++) {
        if (!password_checks.number_exists && numbers.includes(password.charAt(i))) {
            password_checks.number_exists = true
            ++existing_char_count
        }
        if (!password_checks.lower_case_exists && lower_case.includes(password.charAt(i))) {
            password_checks.lower_case_exists = true
            ++existing_char_count
        }
        if (!password_checks.upper_case_exists && upper_case.includes(password.charAt(i))) {
            password_checks.upper_case_exists = true
            ++existing_char_count
        }
        if (!password_checks.special_characters_exists && special_characters.includes(password.charAt(i))) {
            password_checks.special_characters_exists = true
            ++existing_char_count
        }
    }
    
    let missing_char_count
    if (n > 5) return 4 - existing_char_count
    if (n == 3) return 3
    if (n == 2) return 4
    if (n == 1) return 5
    if (n === 5) {
        if (existing_char_count === 1) {
            missing_char_count = 3
        } else if (existing_char_count === 2) {
            missing_char_count = 2
        } else {
            missing_char_count = 1
        }
    } else {
        missing_char_count = existing_char_count === 1 ? 3 : 2
    }

    return missing_char_count

}

module.exports = minimumNumber