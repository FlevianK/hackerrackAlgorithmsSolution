// Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from 1 to 100 for three categories: problem clarity, originality, and difficulty.

// We define the rating for Alice's challenge to be the triplet a = (a[0], a[1], a[2]), and the rating for Bob's challenge to be the triplet b = (b[0], b[1], b[2]).

// Your task is to find their comparison points by comparing a[0] with b[0], a[1] with b[1], and a[2] with b[2].

// If a[i] > b[i], then Alice is awarded  point.
// If a[i] < b[i], then Bob is awarded  point.
// If a[i] = b[i], then neither person receives a point.
// Comparison points is the total points a person earned.

// Given a and b, determine their respective comparison points.

// For example, a = [1, 2, 3] and b = [1, 2, 3]. For elements 0, Bob is awarded a point because a[0] < b[0]. For the equal elements a[1] and b[1], no points are earned. Finally, for elements 2, a[2] > b[2] so Alice receives a point. Your return array would be [1, 1] with Alice's score first and Bob's second.

function compareTriplets(a, b) {
    let ar = [0, 0] //initialize total earned points
    for (let i = 0; a.length > i; i++) {
        if (a[i] > b[i]) {
            ar[0] = ++ar[0]
        } else if (a[i] < b[i]) {
            ar[1] = ++ar[1]
        }
    }

    return ar
}

module.exports = compareTriplets