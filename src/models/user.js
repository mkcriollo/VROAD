const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    validate(value) {
      validator.isEmail(value);
    },
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
    validate(value) {},
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
