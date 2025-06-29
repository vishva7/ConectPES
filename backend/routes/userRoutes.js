const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../models/userSchema");
const bcrypt = require("bcryptjs");
const { authenticateToken } = require("../middleware/auth");

router.post("/signup", async (req, res) => {
  req.body.password = await bcrypt.hash(req.body.password, 10);
  let user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    let savedUser = await user.save();
    const token = jwt.sign(
      { userId: savedUser._id },
      process.env.JWT_SECRET,
      { expiresIn: "24h" } // Token expires in 24 hours
    );
    res.status(200).send({
      token,
      userId: savedUser._id,
      email: savedUser.email,
      name: savedUser.name,
    });
  } catch (error) {
    return res.status(401).send("Invalid email or password");
  }
});

router.post("/login", async (req, res) => {
  try {
    console.log(req);
    console.log("Logging in");
    let getUser = await User.findOne({ email: req.body.email });
    console.log(getUser);
    if (!getUser) {
      return res.status(401).send("Invalid email or password");
    }
    const result = await bcrypt.compare(req.body.password, getUser.password);
    if (result) {
      const token = jwt.sign(
        { userId: getUser._id },
        process.env.JWT_SECRET,
        { expiresIn: "24h" } // Token expires in 24 hours
      );
      res.json({
        token,
        userId: getUser._id,
        email: getUser.email,
        name: getUser.name,
      });
    } else {
      res.status(400).json({ error: "Invalid email or password" });
    }
  } catch (error) {
    res.status(400).json({ error });
  }
});

// Verify token endpoint
router.get("/verify", authenticateToken, async (req, res) => {
  try {
    res.json({
      valid: true,
      user: {
        id: req.user._id,
        email: req.user.email,
        name: req.user.name,
      },
    });
  } catch (error) {
    res.status(500).json({ error: "Server error during token verification" });
  }
});

// Logout endpoint (client-side token removal, but good to have for consistency)
router.post("/logout", (req, res) => {
  res.json({ message: "Logged out successfully" });
});

module.exports = router;
