const express = require("express");
const {
  updateDetails,
  deleteProject,
} = require("../controllers/admin.controller");
const verifyAuth = require("../moddlewares/verifiyAuth");

const router = express.Router();

router.put("/user/:id", verifyAuth, updateDetails);
router.delete("/user/:userId/:projectId", deleteProject);

module.exports = router;
