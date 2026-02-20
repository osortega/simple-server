# simple-server

A simple Express.js server built with Node.js.

## Installation

```bash
npm install
```

## Usage

```bash
npm start
```

The server runs on port **7000**.

## Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET    | `/`  | Returns "Hello world!" |
| PATCH  | `/`  | Patch endpoint handler |

## File Descriptions

### `package.json`

The `package.json` file is the Node.js project manifest. It contains metadata about the project and manages its dependencies and scripts. Key fields include:

- **name** – The name of the project (`simple-server`).
- **version** – The current version of the project.
- **main** – The entry point of the application (`index.js`).
- **scripts** – Defines npm scripts. The `start` script runs the server using `nodemon`.
- **dependencies** – Lists the packages required to run the application:
  - `express` – Web framework for Node.js.
  - `nodemon` – Utility that automatically restarts the server when file changes are detected.
- **license** – The license under which the project is distributed.

### `index.js`

The main entry point of the application. Sets up the Express server, defines the root `GET` route, and mounts the patch route handler.

### `patchHandler.js`

An Express router module that handles `PATCH` requests to `/`.

### `package-lock.json` / `yarn.lock`

Auto-generated lock files that pin the exact versions of all installed dependencies to ensure consistent installs across environments.

### `test.txt`

A plain text file used for testing purposes.
