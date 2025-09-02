const express = require("express");
const router = express.Router();

router.patch("/", (req, res) => {
  console.log(`${new Date()} ${req.method} ${req.path}`);
  console.log("Patch");
  res.send("PATCH request handled successfully!");
});

module.exports = router;
