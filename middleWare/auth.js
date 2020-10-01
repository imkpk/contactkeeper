const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function (req, res, next) {
  //get the tokern for header
  const token = req.header("x-auth-token");

  // chek if no token exist
  if (!token) {
    return res.status(404).json({ msg: "no token, authorization denied " });
  }
  try {
    //entire token payload
    const decoded = jwt.verify(token, config.get("jwtSecret"));

    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
