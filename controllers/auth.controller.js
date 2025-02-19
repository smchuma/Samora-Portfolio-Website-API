const bcryptjs = require("bcryptjs");
const User = require("../models/User");
const generateToken = require("../utils/generateToken");

const register = async (req, res) => {
  const {
    username,
    email,
    password,
    personal_details: { first_name, middle_name, last_name, phone_number },
  } = req.body;

  try {
    console.log("req.body", req.body);
    if (
      !username ||
      !first_name ||
      !middle_name ||
      !last_name ||
      !email ||
      !password ||
      !phone_number
    ) {
      throw new Error("All fiends are required");
    }

    const userAlreadyExist = await User.findOne({ email });

    if (userAlreadyExist) {
      return res.status(400).json({
        success: false,
        message: "User already exist",
      });
    }

    const hashedPassword = await bcryptjs.hash(password, 10);

    await User.create({
      username,
      email,
      password: hashedPassword,
      personal_details: {
        first_name,
        middle_name,
        last_name,
        phone_number,
      },
    });

    res.status(201).json({
      message: "User created successfully",
      success: true,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const login = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    if (!username && !email) {
      return res.status(400).json({ message: "Username or email is required" });
    }

    const user = await User.findOne({
      $or: [{ username }, { email }],
    });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User not found",
      });
    }

    const isPasswordValid = await bcryptjs.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({
        success: false,
        message: "Invalid password provided",
      });
    }

    generateToken(res, user._id);

    res.status(200).json({
      message: "Login successfully",
      success: true,
    });
  } catch (error) {
    console.log("error", error);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const logout = async (req, res) => {
  try {
    res.clearCookie("authToken");
    res.status(200).json({
      message: "Logout successfully",
      success: true,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const checkAuth = async (req, res) => {
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

// const updateUser = async (req, res) => {
//   const id = req.params.id;

//   try {
//     if (!req.userId || req.userId !== id) {
//       return res.status(400).json({
//         success: false,
//         message: "Unauthorized",
//       });
//     }

//     if (!req.body) {
//       return res.status(400).json({
//         success: false,
//         message: "No data provided",
//       });
//     }

//     if (req.body.password) {
//       return res.status(400).json({
//         success: false,
//         message: "Cannot update password",
//       });
//     }

//     if (req.body.email) {
//       return res.status(400).json({
//         success: false,
//         message: "Cannot update email",
//       });
//     }

//     if (req.body.phone_number) {
//       return res.status(400).json({
//         success: false,
//         message: "Cannot update phone number",
//       });
//     }

//     const user = await User.findByIdAndUpdate(id, req.body, {
//       new: true,
//       runValidators: true,
//     });

//     if (!user) {
//       return res.status(400).json({
//         success: false,
//         message: "User not found",
//       });
//     }
//     res.status(200).json({
//       success: true,
//       message: "User updated successfully",
//       user,
//     });
//   } catch (error) {
//     res.status(400).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

module.exports = {
  register,
  login,
  logout,
  checkAuth,
  // updateUser,
};
