const assert = require('assert').strict

const superReducedString = require('./superReducedString')
const minimumNumber = require('./minimumNumber')
const pangrams = require('./pangrams')
const camelcase = require('./camelcase')

assert.deepEqual(superReducedString('aaabccddd'), 'abd')
assert.deepEqual(camelcase('saveChangesInTheEditor'), 5)
assert.deepEqual(minimumNumber(11, '#HackerRank'), 1)

let s = 'We promptly judged antique ivory buckles for the next prize' //pangram
// let s = 'We promptly judged antique ivory buckles for the next prize' //not pangram
assert.deepEqual(pangrams(s), 'pangram')