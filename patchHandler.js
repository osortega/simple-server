const express = require("express");
const router = express.Router();

router.patch("/", (req, res) => {
  console.log(`${new Date()} ${req.method} ${req.path}`);
  res.send("Patch");
});

router.get("/test", (req, res) => {
  console.log(`${new Date()} ${req.method} ${req.path}`);
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>PATCH Test - Simple Server</title>
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
                margin: 10px;
                text-decoration: none;
                display: inline-block;
                transition: background-color 0.3s;
            }
            .button:hover {
                background-color: #283593;
            }
            #result {
                background-color: #1a237e;
                padding: 15px;
                border-radius: 5px;
                margin-top: 20px;
                font-family: monospace;
            }
        </style>
    </head>
    <body>
        <div id="root"></div>
        <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
        <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
        <script>
            const e = React.createElement;

            function PatchTestApp() {
                const [result, setResult] = React.useState("");

                async function testPatch() {
                    try {
                        const response = await fetch('/', { method: 'PATCH' });
                        const text = await response.text();
                        setResult("Response: " + text);
                    } catch (error) {
                        setResult("Error: " + error.message);
                    }
                }

                return e("div", { className: "container" },
                    e("h1", null, "PATCH Endpoint Test"),
                    e("p", null, "Click the button below to test the PATCH endpoint:"),
                    e("button", { className: "button", onClick: testPatch }, "Send PATCH Request"),
                    e("div", { id: "result" }, result),
                    e("a", { href: "/", className: "button" }, "Back to Home")
                );
            }

            ReactDOM.createRoot(document.getElementById("root")).render(e(PatchTestApp));
        </script>
    </body>
    </html>
  `;
  res.send(html);
});

module.exports = router;
