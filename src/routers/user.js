const express = require("express");
const router = express.Router();

// get all users
router.get("/users", (req, res) => {
  res.send("worked");
});

// Signup User
router.post("/users/signup", (req, res) => {
  res.send("worked");
});

// Login User
router.post("/users/login", (req, res) => {
  res.send("worked");
});

// Logout User
router.post("/users/logout", (req, res) => {
  res.send("worked");
});

// get one user
router.get("/users/:id", (req, res) => {
  res.send("worked");
});

// Edit user
router.patch("/users/:id", (req, res) => {
  res.send("worked");
});

// NOTE

// figure out why the route signup is not getting a res back
module.exports = router;
