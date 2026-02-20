# simple-server

A simple Express.js server for demonstrating basic HTTP endpoints.

## Installation

```bash
npm install
```

## Usage

```bash
npm start
```

The server starts on port **7000**.

## Files

| File | Description |
|------|-------------|
| `index.js` | Main entry point. Sets up the Express app, defines the `GET /` route, and mounts the patch router. |
| `patchHandler.js` | Express router module that handles `PATCH /` requests. |
| `test.txt` | A plain-text file containing the numbers 1 through 20, one per line. Used as sample/test data. |
| `package.json` | Node.js project manifest with dependencies and scripts. |

## API Endpoints

| Method | Path | Description |
|--------|------|-------------|
| `GET`  | `/`  | Returns the string `"Hello world!"` |
| `PATCH`| `/`  | Logs the request and handles patch operations. |
