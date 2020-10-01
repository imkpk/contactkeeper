const express = require("express");
const router = express.Router();
const auth = require("../middleWare/auth");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
//chek validator for email and all other feilds
const { check, validationResult } = require("express-validator/check");

const Contact = require("../model/Contacts");
// route GET api/contact
// description: GET all user contacts
// access Private

router.get("/", auth, async (req, res) => {
  // res.send("get all contacts ");
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1
    });
    res.json(contacts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("contact Server  Error");
  }
});

//@route POST API/contacts
// @Description  add new contacts
// @access private

router.post(
  "/",
  [auth, check("name", "Name is Required ").not().isEmpty()],

  async (req, res) => {
    // res.send("add contact");
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, phone, type } = req.body;
    try {
      const newContact = new Contact({
        name,
        email,
        phon,
        type,
        user: req.user.id
      });

      const contact = await newContact.save();
      res.json(contact);
    } catch (er) {
      console.error(er.message)
      res.status(500).send('Contact data server error')
    }
  }
);

//@route put API/contacts/:id
// @Description  update contacts
// @access private

router.put("/:id", (req, res) => {
  res.send("update contact");
});

//@route DELETE API/contacts/:id
// @Description  DELETE contacts
// @access private

router.delete("/:id", (req, res) => {
  res.send("DELETE contact");
});

module.exports = router;
