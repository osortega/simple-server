# simple-server

A minimal [Express.js](https://expressjs.com/) HTTP server that demonstrates basic routing, including a `GET` endpoint and a `PATCH` endpoint.

---

## Installation

```bash
npm install
```

---

## Usage

Start the server (uses [nodemon](https://nodemon.io/) for auto-restart on file changes):

```bash
npm start
```

The server listens on **port 7000** by default.

---

## File Descriptions

| File | Description |
|------|-------------|
| `index.js` | Main entry point. Creates the Express app, registers routes, and starts the server on port 7000. |
| `patchHandler.js` | Express router module that handles `PATCH /` requests. |
| `package.json` | Project metadata and dependency definitions (`express`, `nodemon`). |
| `test.txt` | A plain-text file containing numbers 1–20, used for testing file-serving or read operations. |

---

## API Endpoints

### `GET /`

Returns a plain-text greeting.

**Response:**
```
Hello world!
```

### `PATCH /`

Logs the incoming request. Handled by `patchHandler.js`.

---

## Project Structure

```
simple-server/
├── index.js          # App entry point
├── patchHandler.js   # PATCH route handler
├── package.json      # Project configuration
└── test.txt          # Sample text file (numbers 1–20)
```
