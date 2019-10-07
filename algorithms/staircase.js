const staircase = n => {
  const line = Array(n).fill(' ');
    for (let index = n - 1; index >= 0; index--) {
        line[index] = '#';
        console.info(line.join(''));
  }
}

module.exports = staircase
