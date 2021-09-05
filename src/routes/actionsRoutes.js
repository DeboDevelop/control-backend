const express = require("express");
const router = express.Router();

const { validateAuthorization } = require("../middleware/validateHeaderMiddleware");
const { verifyJWT } = require("../middleware/verifyJWTMiddleware");
const { validateUpdate } = require("../middleware/validateActions");
const { getAction, updateAction } = require("../controller/actionController");

router.get("/", validateAuthorization, verifyJWT, getAction);

router.patch("/:id", validateAuthorization, validateUpdate, verifyJWT, updateAction);

module.exports = router;
