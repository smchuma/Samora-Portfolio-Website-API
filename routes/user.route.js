const express = require("express");
const verifyAuth = require("../moddlewares/verifiyAuth");
const { getUser, updateUser } = require("../controllers/user.controller");

const router = express.Router();

router.get("/user", verifyAuth, getUser);
router.put("/update_user/:id", verifyAuth, updateUser);

module.exports = router;
