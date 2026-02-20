# simple-server

A simple Express.js web server with basic routing.

## Installation

```bash
npm install
```

## Usage

```bash
npm start
```

The server runs on port **7000** using `nodemon` for automatic restarts.

## File Descriptions

| File | Description |
|------|-------------|
| `index.js` | Main entry point. Sets up the Express app, registers routes, and starts the server on port 7000. |
| `patchHandler.js` | Express router module that handles `PATCH /` requests. |
| `test.txt` | A sample text file containing the numbers 1-20, used for testing file serving or upload functionality. |
| `package.json` | Project metadata and npm scripts. |

## Endpoints

| Method | Path | Description |
|--------|------|-------------|
| `GET` | `/` | Returns `"Hello world!"` |
| `PATCH` | `/` | Handled by `patchHandler.js` |
