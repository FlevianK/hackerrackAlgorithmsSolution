// Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

// Note: Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock. Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock.

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