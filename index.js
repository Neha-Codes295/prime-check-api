const express = require('express');
const { isPrime } = require('./utils/primeChecker');

const app = express();
const PORT = 3000;

app.get('/is-prime', (req, res) => {
  const number = Number(req.query.number);

  if (isNaN(number)) {
    return res.status(400).json({
      error: 'Invalid or missing "number" query parameter. Please provide a valid number.'
    });
  }

  const result = isPrime(number);
  return res.json({
    number,
    isPrime: result
  });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
