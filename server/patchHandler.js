const express = require("express");
const router = express.Router();

router.patch("/test", (req, res) => {
  console.log(`${new Date()} ${req.method} ${req.path}`);
  res.json({ 
    message: "Patch request received", 
    data: req.body,
    timestamp: new Date().toISOString()
  });
});

module.exports = router;
