const express = require("express");
const {
  checkAuth,
  login,
  register,
  logout,
  updateUser,
  getMyPortfolioDetails,
} = require("../controllers/auth.controller");
const verifyAuth = require("../moddlewares/verifiyAuth");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/check_auth", verifyAuth, checkAuth);
router.put("/update_user/:id", verifyAuth, updateUser);

router.post("/logout", verifyAuth, logout);

router.get("/my_portfolio", getMyPortfolioDetails);

module.exports = router;
