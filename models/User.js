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

    // experience: [
    //   {
    //     company: String,
    //     role: String,
    //     start_date: String,
    //     end_date: String,
    //     description: String,
    //   },
    // ],

    // projects: [
    //   {
    //     title: String,
    //     description: String,
    //     link: String,
    //   },
    // ],

    // skills: [String]

    profession: String,
    location: String,
    about_me: String,
    picture: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
