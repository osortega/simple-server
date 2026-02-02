const express = require("express");
const patchHandler = require("./patchHandler");
const app = express();
const port = 5001;

app.get("/", (req, res) => {
  console.log(`${new Date()} ${req.method} ${req.path}`);
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Simple Server</title>
        <style>
            body {
                background-color: #1a237e;
                color: white;
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 20px;
                min-height: 100vh;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }
            .container {
                background-color: #283593;
                padding: 30px;
                border-radius: 10px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
                text-align: center;
                max-width: 600px;
            }
            h1 {
                color: #e3f2fd;
                margin-bottom: 20px;
                font-size: 2.5em;
            }
            p {
                color: #bbdefb;
                font-size: 1.2em;
                line-height: 1.6;
            }
            .button {
                background-color: #3f51b5;
                color: white;
                padding: 12px 24px;
                border: none;
                border-radius: 5px;
                font-size: 16px;
                cursor: pointer;
                margin-top: 20px;
                text-decoration: none;
                display: inline-block;
                transition: background-color 0.3s;
            }
            .button:hover {
                background-color: #283593;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>Welcome to Simple Server</h1>
            <p>This is a simple Express.js server with a beautiful dark blue theme.</p>
            <p>The server is running successfully on port ${port}!</p>
            <a href="/test" class="button">Test PATCH Endpoint</a>
        </div>
    </body>
    </html>
  `;
  res.send(html);
});

const b = [1, 2, 3, 4, 5];

app.use("/", patchHandler);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
