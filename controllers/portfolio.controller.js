const User = require("../models/User");

const getDetails = async (req, res) => {
  try {
    const userId = process.env.USER_ID;
    const user = await User.findById(userId).select("-password");

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { getDetails };
