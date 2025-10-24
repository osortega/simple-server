const express = require("express");
const patchHandler = require("./patchHandler");
const app = express();
const port = 3001;

app.get("/", (req, res) => {
  console.log(`${new Date()} ${req.method} ${req.path}`);
  res.send("Hello world!");
});

app.get("/bye", (req, res) => {
  console.log(`${new Date()} ${req.method} ${req.path}`);
  res.send("Goodbye!");
});

const b = [1, 2, 3, 4, 5];

app.use("/", patchHandler);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
