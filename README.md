# simple-server

A simple Node.js/Express web server that demonstrates basic HTTP endpoints including GET and PATCH routes.

## Installation

```bash
npm install
```

## Usage

Start the server:

```bash
npm start
```

The server will run on port **7000** using `nodemon` for automatic restarts during development.

## File Descriptions

| File | Description |
|------|-------------|
| `index.js` | Main entry point. Sets up the Express application, defines the `GET /` route, and mounts the patch handler router. |
| `patchHandler.js` | Express router module that handles `PATCH /` requests. |
| `test.txt` | A plain text file containing the numbers 1 through 20, one per line. It is used as a sample/test file to demonstrate file serving or testing scenarios. |
| `package.json` | Project metadata and npm scripts. |

## Endpoints

| Method | Path | Description |
|--------|------|-------------|
| `GET` | `/` | Returns `"Hello world!"` |
| `PATCH` | `/` | Patch endpoint handled by `patchHandler.js` |
