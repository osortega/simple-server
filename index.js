const express = require("express");
const app = express();
const port = 3002;

app.get("/", (req, res) => {
  console.log(`${new Date()} ${req.method} ${req.path}`);
  res.send("hello");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
