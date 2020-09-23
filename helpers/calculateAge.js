function calculateAge(movieReleasedYear, birthYear) {
  return `${Math.abs(birthYear - movieReleasedYear)} years old`
}

module.exports = calculateAge