const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("weather oldu");
});

router.post("/", (req, res) => {
  res.send("post weather oldu");
});

module.exports = router;
