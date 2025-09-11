const express = require("express");
const cors = require("cors");
const path = require("path");
const patchHandler = require("./patchHandler");

const app = express();
const port = process.env.PORT || 6000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from React app
app.use(express.static(path.join(__dirname, "../client/dist")));

// API routes
app.get("/api/health", (req, res) => {
  console.log(`${new Date()} ${req.method} ${req.path}`);
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

app.use("/api", patchHandler);

// Catch all handler for React app
app.get("*", (req, res) => {
  if (req.path.startsWith("/api")) {
    res.status(404).json({ error: "API endpoint not found" });
  } else {
    res.sendFile(path.join(__dirname, "../client/dist/index.html"));
  }
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));
