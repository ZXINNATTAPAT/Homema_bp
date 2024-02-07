const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser'); // Import cookie-parser

// Use cookie-parser middleware
router.use(cookieParser());

// Middleware for checking authentication
function authenticate(req, res, next) {
  const token = req.cookies.jwt; // Retrieve the JWT token from cookies

  jwt.verify(token, 'your-secret-key', function (err, decoded) {
    if (err) {
      res.json({ status: 'error', message: 'Failed to authenticate token.' });
      return;
    }
    // Token is valid
    next();
  });
}

// Route /protected for accessing the protected resource
router.get('/protected', authenticate, (req, res) => {
  res.json({ message: 'This is a protected route' });
});

// Route /token for checking token validity and setting a cookie
router.get('/token', (req, res, next) => {
  const token = jwt.sign({ username: 'example' }, 'your-secret-key', { expiresIn: '1h' });

  // Set the JWT token as a cookie
  res.cookie('jwt', token, { httpOnly: true }); // httpOnly makes the cookie not accessible via JavaScript

  // Send the token to the client
  res.json({ status: 'ok', token });
});

module.exports = router;
