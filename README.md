# simple-server

A simple Node.js/Express web server.

## Installation

```bash
npm install
```

## Usage

```bash
npm start
```

The server will run on port **7000**.

## File Descriptions

| File | Description |
|------|-------------|
| `index.js` | Main entry point. Creates the Express app, registers routes, and starts the server on port 7000. |
| `patchHandler.js` | Express router module that handles `PATCH /` requests. |
| `test.txt` | A plain text file containing the numbers 1 through 20, one per line. |
| `package.json` | Node.js project manifest. Defines dependencies (`express`, `nodemon`) and scripts (`start`). |
| `package-lock.json` | Auto-generated lock file for npm, pinning exact dependency versions. |
| `yarn.lock` | Auto-generated lock file for Yarn, pinning exact dependency versions. |
| `.gitignore` | Specifies files and directories that Git should ignore. |

## Endpoints

| Method | Path | Description |
|--------|------|-------------|
| `GET`  | `/`  | Returns `Hello world!` |
| `PATCH`| `/`  | Patch endpoint handled by `patchHandler.js` |
