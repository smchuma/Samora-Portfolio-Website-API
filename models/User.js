const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
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

    personal_details: {
      first_name: {
        type: String,
        required: true,
      },
      middle_name: {
        type: String,
        required: true,
      },
      last_name: {
        type: String,
        required: true,
      },
      phone_number: {
        type: String,
        required: true,
        min: 10,
        unique: true,
      },

      profession: {
        type: String,
      },
      location: {
        type: String,
      },
      bio: {
        type: String,
      },
      picture: {
        type: String,
      },
    },

    experience: [
      {
        company: String,
        role: String,
        start_date: String,
        end_date: String,
        description: String,
      },
    ],

    projects: [
      {
        title: String,
        description: String,
        github_link: String,
        live_link: String,
        technologies: { type: [String] },
      },
    ],

    skills: [
      {
        skill_name: String,
        level: String,
        skill_description: String,
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
