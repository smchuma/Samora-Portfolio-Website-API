const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone_number: {
      type: Number,
      required: true,
      min: 10,
      unique: true,
    },
    profession: String,
    location: String,
    about_me: String,
    picture: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
