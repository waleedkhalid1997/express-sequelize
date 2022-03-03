var express = require("express");
const User = require("../controllers/User");
var router = express.Router();

/* GET home page. */
router.get("/", async function (req, res, next) {
  await User.create(req, res);
});

module.exports = router;
