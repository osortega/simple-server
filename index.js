const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  console.log(`${new Date()} ${req.method} ${req.path}`);
  res.send("Hello world!");
});

const b = [1, 2, 3, 4, 5];

app.patch("/", (req, res) => {
  console.log(`${new Date()} ${req.method} ${req.path}`);
  asdasd("Patch");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
