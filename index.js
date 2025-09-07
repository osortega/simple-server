const express = require("express");
const path = require("path");
const patchHandler = require("./patchHandler");
const app = express();
const port = 3001;

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
  console.log(`${new Date()} ${req.method} ${req.path}`);
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Keep the original API endpoint for backward compatibility
app.get("/api", (req, res) => {
  console.log(`${new Date()} ${req.method} ${req.path}`);
  res.send("Hello world!");
});

const b = [1, 2, 3, 4, 5];

app.use("/", patchHandler);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
