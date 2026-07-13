const express = require("express");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const patchHandler = require("./patchHandler");
const app = express();

const port = 1245;

app.put("/silly2", (req, res) => {
  const sounds = ["🎺 tuba", "🥁 kazoo", "🎻 squeaky violin", "📯 vuvuzela", "🔔 cowbell"];
  const sound = sounds[Math.floor(Math.random() * sounds.length)];
  res.json({ message: "You PUT a silly sound on the server!", sound });
});

app.put("/silly", (req, res) => {
  const animals = ["🐸 frog", "🦆 duck", "🐧 penguin", "🦙 llama", "🐡 blowfish"];
  const animal = animals[Math.floor(Math.random() * animals.length)];
  res.json({ message: "You just PUT a silly animal on the server!", animal });
});

app.post("/silly", (req, res) => {
  const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
  ];
  const joke = jokes[Math.floor(Math.random() * jokes.length)];
  res.json({ message: "🤪 Here's a silly joke for you!", joke });
});

function HelloWorld() {
  return React.createElement("h1", null, "Hello World");
}

app.get("/", (req, res) => {
  console.log(`${new Date()} ${req.method} ${req.path}`);
  const body = ReactDOMServer.renderToString(React.createElement(HelloWorld));
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hello World</title>
</head>
<body>
  <div id="root">${body}</div>
</body>
</html>`;
  res.send(html);
});

const b = [1, 2, 3, 4, 5];

app.use("/", patchHandler);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));