const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ msg: "welcome to my api cards from vs code 555" })
})

module.exports = router;