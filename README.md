# simple-server

A simple Express.js web server example.

## Installation

```bash
npm install
```

## Usage

Start the server:

```bash
npm start
```

The server listens on port **7000**.

## Files

| File | Description |
|------|-------------|
| `index.js` | Main entry point. Sets up the Express app, defines a GET `/` route, and mounts the patch router. |
| `patchHandler.js` | Express router module that handles PATCH requests to `/`. |
| `test.txt` | A sample text file containing the numbers 1–20, one per line. |
| `package.json` | Project metadata and npm scripts. |

## API Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/` | Returns `"Hello world!"` |
| PATCH | `/` | Handles PATCH requests (logs the request). |
