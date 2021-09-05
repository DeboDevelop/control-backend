const express = require("express");
const router = express.Router();

const { validateAuthorization } = require("../middleware/validateHeaderMiddleware");
const { verifyTOTP } = require("../controller/totpController");

router.post("/verify", validateAuthorization, verifyTOTP);

module.exports = router;
