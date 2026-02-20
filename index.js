// Main entry point: sets up the Express server, registers routes, and starts listening.
const express = require("express");
const patchHandler = require("./patchHandler");
const app = express();
const port = 7000;

// GET / — responds with a plain "Hello world!" message.
app.get("/", (req, res) => {
  console.log(`${new Date()} ${req.method} ${req.path}`);
  res.send("Hello world!");
});

const b = [1, 2, 3, 4, 5];

// Mount the patchHandler router to handle PATCH requests at "/".
app.use("/", patchHandler);

// Start the HTTP server on the configured port.
app.listen(port, () => console.log(`Example app listening on port ${port}!`));