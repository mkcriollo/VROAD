const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("This is an invalid Email");
      }
    },
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
    validate(value) {
      if (value.toLowerCase().includes("password")) {
        throw new Error("Password can not included the word Password");
      }
    },
  },
});

userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email: email });

  if (!user) {
    throw new Error("Unable to find user");
  }

  return user;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
