// Steve has a string of lowercase characters in range ascii[‘a’..’z’]. He wants to reduce the string to its shortest length by doing a series of operations. In each operation he selects a pair of adjacent lowercase letters that match, and he deletes them. For instance, the string aab could be shortened to b in one operation.

// Steve’s task is to delete as many characters as possible using this method and print the resulting string. If the final string is empty, print Empty String

function superReducedString(s) {
    let sLength = s.length
    while (sLength > 0 && sLength--) {
        for (let i = 0; i < sLength; i++) {
            if (s[i] === s[i + 1]) {
                s = s.slice(0, i) + s.slice(i + 2);
                sLength -= 1
            }
        }
    }

    return s ? s : 'Empty String'
}

module.exports = superReducedString