const express = require("express");
const router = express.Router();
const User = require("../models/user");

// get all users
router.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (e) {
    res.status(500).send(e);
  }
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
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).send({ message: "Email does not exist" });
    }
    const isMatch = user.comparePasswords(req.body.password);
    if (!isMatch) {
      return res.status(400).send({ message: "Password is incorrect" });
    }
    res.send({ user });
  } catch (e) {
    res.status(500).send();
  }
});

// Logout User
router.post("/users/logout", (req, res) => {
  res.send("worked");
});

// get one user
router.get("/users/:id", async (req, res) => {
  // place id outside or it will fail since it will fail inside the try and run the catch with the error saying object id is not found
  const _id = req.params.id;
  try {
    const user = await User.findById(_id);
    if (!user) {
      return res.status(400).send({ message: "User not found" });
    }
    res.send(user);
  } catch (e) {
    res.status(500).send();
  }
});

router.patch("/users/:id", async (req, res) => {
  const _id = req.params.id;
  const updates = Object.keys(req.body);
  const validInputs = ["name", "email", "password"];
  // checks if all updates are valid inputs
  const isValid = updates.every((key) => {
    return validInputs.includes(key);
  });
  // if not it send a message saying you can update
  if (!isValid) {
    res.status(404).send({ message: "Invalid Updates!" });
  }
  try {
    const user = await User.findById(_id);
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
    // get all update and update the user with that updates new value
    updates.forEach((update) => {
      user[update] = req.body[update];
    });
    await user.save();
    res.send(user);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.delete("/users/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const user = await User.findByIdAndDelete(_id);
    if (!user) {
      return res.status(404).send({ message: "No User Found" });
    }
    res.status(200).send();
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;

// Problems

/*
- when updating a user if the password is not being updated it will return the original password not the password pass into bcrypt 





*/
