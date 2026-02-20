# simple-server

A minimal Express.js HTTP server demonstrating basic routing.

## Installation

```bash
npm install
```

## Running the server

```bash
npm start
```

The server starts with [nodemon](https://nodemon.io/) and listens on **port 7000**.

---

## File overview

### `index.js`

The main entry point of the application. It:

- Creates an Express app and sets it to listen on port **7000**.
- Registers a **GET `/`** route that logs each incoming request (timestamp, method, path) to the console and responds with the text `Hello world!`.
- Mounts the `patchHandler` router at the root path so that PATCH requests are handled by that module.

### `patchHandler.js`

An Express [Router](https://expressjs.com/en/4x/api.html#router) module that handles PATCH requests. It:

- Registers a **PATCH `/`** route that logs each incoming request to the console.
- Is imported and mounted in `index.js` so that `PATCH /` requests reach this handler.

> **Note:** The current handler body calls an undefined function (`asdasd`), which will throw a `ReferenceError` at runtime when a PATCH request is received. This is a known bug in the code.

### `test.txt`

A plain-text file containing the numbers 1 through 20, one per line. It is a sample/test file and is not used by the server.

### `package.json`

Standard Node.js package manifest. Key fields:

| Field | Value |
|-------|-------|
| Entry point | `index.js` |
| `npm start` | Runs the server via `nodemon index.js` |
| Dependencies | `express ^4.17.1`, `nodemon ^2.0.2` |

---

## Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/` | Returns `Hello world!` |
| PATCH | `/` | Logs the request *(currently throws a ReferenceError — see note above)* |
