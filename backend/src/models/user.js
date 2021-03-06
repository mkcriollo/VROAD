const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

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

userSchema.pre("save", function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = bcrypt.hashSync(this.password, 10);
  next();
});

userSchema.methods.comparePasswords = function (enterPassword) {
  const Match = bcrypt.compareSync(enterPassword, this.password);
  if (Match) return true;
  return false;
};

// Static is use for not instance but for models

// userSchema.statics.findByCredentials = async (email, password) => {
//   const user = await User.findOne({ email: email });

//   if (!user) {
//     throw new Error("Unable to find user");
//   }

//   const isMatch = bcrypt.compareSync(password, user.password);

//   if (!isMatch) {
//     throw new Error("Password is not a match");
//   }

//   return user;
// };

const User = mongoose.model("User", userSchema);

// model is wrapper of schema / used to interact with database / creating,querying,deleting,updating
// schema defines a structure of the document / default values, validators etc

module.exports = User;
