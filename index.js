// index.js

const express = require('express');
const { isPrime } = require('./utils/primeChecker');

const app = express();
const PORT = process.env.PORT || 3000;

/**
 * GET /is-prime
 * Query Parameter: number (required)
 * Returns whether the given number is prime or not.
 */
app.get('/is-prime', (req, res) => {
  // Convert query param to number
  const number = Number(req.query.number);

  // Validate query parameter presence and correctness
  if (isNaN(number)) {
    return res.status(400).json({
      error: 'Invalid or missing "number" query parameter. Please provide a valid number.',
    });
  }

  // Check if the number is prime using utility function
  const result = isPrime(number);

  // Return JSON response
  return res.json({
    number,
    isPrime: result,
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
