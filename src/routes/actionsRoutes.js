const express = require("express");
const router = express.Router();

const { validateAuthorization } = require("../middleware/validateHeaderMiddleware");
const { verifyJWT } = require("../middleware/verifyJWTMiddleware");
const { getAction } = require("../controller/actionController");

router.get("/", validateAuthorization, verifyJWT, getAction);

module.exports = router;
