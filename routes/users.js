const express = require("express");
const router = express.Router();

//@route POST API/USERS
// @Description register a user
// @access Public

router.post("/", (req, res) => {
  res.send("register a user");
});

module.exports = router;
