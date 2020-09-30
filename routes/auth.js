const express = require("express");
const router = express.Router();

// route GET api/auth
// description: GET logged in user
// access Private

router.get("/", (req, res) => {
  res.send("get Logged in user");
});

module.exports = router;

//@route POST API/auth
// @Description  auth user and get token
// @access Public

router.post("/", (req, res) => {
  res.send("login user");
});

module.exports = router;
