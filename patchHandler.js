const express = require("express");
const router = express.Router();

router.patch("/", (req, res) => {
  console.log(`${new Date()} ${req.method} ${req.path}`);
  res.send("Patch request received");
});

module.exports = router;
