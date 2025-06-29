const jwt = require("jsonwebtoken");
const User = require("../models/userSchema");

// Middleware to verify JWT token
const authenticateToken = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1]; // Bearer TOKEN

    if (!token) {
      return res.status(401).json({ error: "Access denied. No token provided." });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId);
    
    if (!user) {
      return res.status(401).json({ error: "Invalid token. User not found." });
    }

    req.user = user;
    next();
  } catch (error) {
    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({ error: "Invalid token." });
    }
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ error: "Token expired." });
    }
    return res.status(500).json({ error: "Server error during authentication." });
  }
};

// Middleware to check if user is admin (optional - for future role-based access)
const requireAdmin = async (req, res, next) => {
  try {
    if (!req.user) {
      return res.status(401).json({ error: "Authentication required." });
    }
    
    // For now, any authenticated user is considered admin
    // You can enhance this later by adding role field to user schema
    next();
  } catch (error) {
    return res.status(500).json({ error: "Server error during authorization." });
  }
};

module.exports = {
  authenticateToken,
  requireAdmin
};
