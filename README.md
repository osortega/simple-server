# simple-server

A simple Express.js server that demonstrates basic HTTP routing.

## Installation

```bash
npm install
```

## Usage

Start the server:

```bash
npm start
```

The server runs on port **7000**.

## File Descriptions

| File | Description |
|------|-------------|
| `index.js` | Main entry point. Sets up the Express app, defines the `GET /` route, and starts the server on port 7000. |
| `patchHandler.js` | Router module that handles `PATCH /` requests. |
| `test.txt` | A plain text file containing the numbers 1–20, one per line. Used as sample data. |
| `package.json` | Project metadata and dependency definitions (Express, nodemon). |

## API Endpoints

### GET /

Returns a simple greeting.

**Response:**
```
Hello world!
```

### PATCH /

Handles patch requests at the root path.
