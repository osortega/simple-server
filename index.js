const express = require("express");
const app = express();
const port = 3002;

app.get("/", (req, res) => {
  console.log(`${new Date()} ${req.method} ${req.path}`);
  res.send("Hello world!");
});

app.get("/hello/:name", (req, res) => {
  const name = req.params.name;
  console.log(`${new Date()} ${req.method} ${req.path}`);
  res.send(`Hello, ${name}!`);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
