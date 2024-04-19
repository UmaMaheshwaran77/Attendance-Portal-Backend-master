const JWT_SECRET = process.env.JWT_SECRET; 
const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) {
    return res.status(401).json({ message: "Authentication token required" });
  }

  // Check if the authorization header starts with "Bearer "
  if (!authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: "Invalid authorization header format" });
  }

  // Extract the token by removing the "Bearer " prefix
  const token = authHeader.substring(7);
  if (!token) {
    return res.status(401).json({ message: "Authentication token required" });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Invalid token" });
    }
    req.user = user;
    next();
  });
}

module.exports = {
  authenticateToken
};