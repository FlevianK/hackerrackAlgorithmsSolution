const timeConversion = s => {
  if (s.slice(s.length - 2) == 'PM' && s.slice(0, 2) < 12) {
    s = parseInt(s.slice(0, 2)) + 12 + s.slice(2)
  }
  if (s.slice(s.length - 2) == 'AM' && s.slice(0, 2) == 12) {
    s = s.replace(s.slice(0, 2), '00')
  }

  return s.replace(s.slice(s.length - 2), '')
}

module.exports = timeConversion