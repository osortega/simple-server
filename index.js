const express = require("express");
const patchHandler = require("./patchHandler");
const app = express();
const port = 3001;

app.get("/", (req, res) => {
  console.log(`${new Date()} ${req.method} ${req.path}`);
  res.send("Hello world!");
});

const b = [1, 2, 3, 4, 5];

// This comment shouldn't be included
app.test("/", (req, res) => {
  console.log(`${new Date()} ${req.method} ${req.path}`);
  // Fake comment
  // That should be included
  res.send("Post");
});

app.use("/", patchHandler);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
