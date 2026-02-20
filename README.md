# simple-server

A simple Express.js HTTP server that demonstrates basic routing with GET and PATCH endpoints.

## Installation

```bash
npm install
```

## Usage

```bash
npm start
```

The server will start on port **7000**.

## Files

### `index.js`

The main entry point of the application. It:
- Creates an Express application
- Defines a `GET /` route that responds with `"Hello world!"`
- Mounts the `patchHandler` router at `/` to handle PATCH requests
- Starts the server on port 7000

### `patchHandler.js`

An Express router module that handles `PATCH /` requests. It logs the incoming request details (timestamp, method, and path) to the console.

## Endpoints

| Method | Path | Description                  |
|--------|------|------------------------------|
| GET    | `/`  | Returns `"Hello world!"`     |
| PATCH  | `/`  | Logs request and handles patch |
