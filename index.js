const express = require("express");
const patchHandler = require("./patchHandler");
const app = express();
const port = 7000;

app.get("/", (req, res) => {
  console.log(`${new Date()} ${req.method} ${req.path}`);
  res.send("Hello world!");
});

app.use("/", patchHandler);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));