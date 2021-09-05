const express = require("express");
const router = express.Router();
const { verifyTOTP } = require("../controller/totpController");

router.post("/verify", verifyTOTP);

module.exports = router;
