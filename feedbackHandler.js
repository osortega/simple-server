const express = require("express");
const router = express.Router();

// In-memory storage for feedback (in a real app, this would be a database)
const feedbackStore = [];

router.post("/feedback", express.json(), (req, res) => {
  console.log(`${new Date()} ${req.method} ${req.path}`);
  
  const { message, email } = req.body;
  
  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }
  
  const feedback = {
    id: feedbackStore.length + 1,
    message,
    email: email || null,
    timestamp: new Date().toISOString()
  };
  
  feedbackStore.push(feedback);
  
  res.status(201).json({ 
    success: true, 
    message: "Thank you for your feedback!",
    feedback 
  });
});

router.get("/feedback", (req, res) => {
  console.log(`${new Date()} ${req.method} ${req.path}`);
  res.json({ 
    count: feedbackStore.length,
    feedback: feedbackStore 
  });
});

module.exports = router;
