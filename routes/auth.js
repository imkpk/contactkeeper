const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const auth = require("../middleWare/auth");
//chek validator for email and all other feilds
const { check, validationResult } = require("express-validator/check");

const User = require("../model/User");

// route GET api/auth
// description: GET logged in user
// access Private

router.get("/", auth, async (req, res) => {
  // res.send("get Logged in user");
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server Error");
  }
});

module.exports = router;

//@route POST API/auth
// @Description  auth user and get token
// @access Public

router.post(
  "/",
  [
    check("email", "please enter a valid Email Id").isEmail(),
    check("password", "password required to validate Email Id").exists()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({ msg: "invalid credentials" });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ msg: "invalid User" });
      }
      //josn-webtoken payload creating the payload
      const payload = {
        user: {
          id: user.id
        }
      };
      //togenerate the token we need to
      const jwtSecret = config.get("jwtSecret");
      jwt.sign(
        payload,
        jwtSecret,
        {
          expiresIn: 36000
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Auth Server error message");
    }
  }
);

module.exports = router;
