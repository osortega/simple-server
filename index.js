const express = require("express");
const app = express();
const port = 3004;

app.get("/", (req, res) => {
  console.log(`${new Date()} ${req.method} ${req.path}`);
  res.header('Cross-Origin-Resource-Policy', 'cross-origin');
  res.header('Cross-Origin-Embedder-Policy', 'require-corp');
  res.send("Hello world!");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
