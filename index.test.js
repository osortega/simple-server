const test = require("node:test");
const assert = require("node:assert/strict");
const http = require("node:http");

const { app, port } = require("./index");

function request(server, path, method = "GET") {
  return new Promise((resolve, reject) => {
    const address = server.address();
    const req = http.request(
      {
        hostname: "127.0.0.1",
        port: address.port,
        path,
        method,
      },
      (res) => {
        let body = "";
        res.setEncoding("utf8");
        res.on("data", (chunk) => {
          body += chunk;
        });
        res.on("end", () => {
          resolve({ statusCode: res.statusCode, body });
        });
      },
    );

    req.on("error", reject);
    req.end();
  });
}

test("GET / shows the configured port", async () => {
  const server = app.listen(0);

  try {
    const response = await request(server, "/");
    assert.equal(response.statusCode, 200);
    assert.match(response.body, new RegExp(`port ${port}`));
  } finally {
    server.close();
  }
});

test("PATCH / is handled by the patch router", async () => {
  const server = app.listen(0);

  try {
    const response = await request(server, "/", "PATCH");
    assert.equal(response.statusCode, 200);
    assert.equal(response.body, "Patch");
  } finally {
    server.close();
  }
});
