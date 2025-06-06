// utils/primeChecker.js

/**
 * Checks whether a given number is prime.
 * @param {number} number - The number to check.
 * @returns {boolean} - Returns true if prime, false otherwise.
 */
function isPrime(number) {
  // Validate input type and range
  if (typeof number !== 'number' || !Number.isInteger(number) || number < 2) {
    return false;
  }

  // Check divisibility from 2 to sqrt(number)
  for (let i = 2, limit = Math.sqrt(number); i <= limit; i++) {
    if (number % i === 0) return false;
  }

  return true;
}

module.exports = { isPrime };
