const express = require("express");
const router = express.Router();
const User = require("../models/user");

// get all users
router.get("/users", (req, res) => {
  res.send("worked");
});

// Signup User
router.post("/users/signup", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.status(201).send(user);
  } catch (e) {
    res.status(404).send(e);
  }
});

// Login User
router.post("/users/login", async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    res.send({ user });
  } catch (e) {
    res.status(400).send();
  }
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
