const User = require("../models/User");

const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("-password");
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

const updateUser = async (req, res) => {
  const id = req.params.id;

  try {
    if (!req.userId || req.userId !== id) {
      return res.status(400).json({
        success: false,
        message: "Unauthorized",
      });
    }

    if (!req.body) {
      return res.status(400).json({
        success: false,
        message: "No data provided",
      });
    }

    if (req.body.password) {
      return res.status(400).json({
        success: false,
        message: "Cannot update password",
      });
    }

    if (req.body.email) {
      return res.status(400).json({
        success: false,
        message: "Cannot update email",
      });
    }

    if (req.body.phone_number) {
      return res.status(400).json({
        success: false,
        message: "Cannot update phone number",
      });
    }

    const user = await User.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "User updated successfully",
      user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getUser,
  updateUser,
};
