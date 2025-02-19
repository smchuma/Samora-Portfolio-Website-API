const express = require("express");
const { getDetails } = require("../controllers/portfolio.controller");

const router = express.Router();

router.get("/", getDetails);

module.exports = router;
