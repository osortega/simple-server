// patchHandler.js — Express router that handles PATCH requests at the root path.
const express = require("express");
const router = express.Router();

// PATCH / — logs the request timestamp, method, and path.
router.patch("/", (req, res) => {
  console.log(`${new Date()} ${req.method} ${req.path}`);
  asdasd("Patch");
});

module.exports = router;
