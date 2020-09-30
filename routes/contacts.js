const express = require("express");
const router = express.Router();

// route GET api/contact
// description: GET all user contacts
// access Private

router.get("/", (req, res) => {
  res.send("get all contacts ");
});

//@route POST API/contacts
// @Description  add new contacts
// @access private

router.post("/", (req, res) => {
  res.send("add contact");
});

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
