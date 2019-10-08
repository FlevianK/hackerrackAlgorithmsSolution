const assert = require('assert').strict

const superReducedString = require('./superReducedString')
const minimumNumber = require('./minimumNumber')
const pangrams = require('./pangrams')
const camelcase = require('./camelcase')
const hackerrankInString = require('./hackerrankInString')

assert.deepEqual(superReducedString('aaabccddd'), 'abd')
assert.deepEqual(camelcase('saveChangesInTheEditor'), 5)
assert.deepEqual(minimumNumber(11, '#HackerRank'), 1)

let s = 'We promptly judged antique ivory buckles for the next prize' //pangram
// let s = 'We promptly judged antique ivory buckles for the next prize' //not pangram
assert.deepEqual(pangrams(s), 'pangram')

let word = 'hereiamstackerrank' //YES
// let word = 'hackerworld' //NO
assert.deepEqual(hackerrankInString(word), 'YES')