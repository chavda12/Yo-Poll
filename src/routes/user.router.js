const express = require("express");
const UserController = require("../controllers/user.controller");

const router = express.Router();

router.route("/").post(UserController.user_post);

module.exports = router;
