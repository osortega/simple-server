# Simple Server

A lightweight Express.js server with several fun endpoints.

## Requirements

- [Node.js](https://nodejs.org/) v14 or later
- npm or yarn

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server (with hot-reload via nodemon):

```bash
npm start
```

The server listens on **port 1245** by default.

## Endpoints

| Method | Path      | Description                                      |
|--------|-----------|--------------------------------------------------|
| GET    | `/`       | Serves the home page                             |
| GET    | `/test`   | Page to test the PATCH endpoint interactively    |
| PATCH  | `/`       | Returns a simple "Patch" response                |
| POST   | `/silly`  | Returns a random silly joke                      |
| PUT    | `/silly`  | Returns a random silly animal                    |
| PUT    | `/silly2` | Returns a random silly sound                     |

## Example Requests

```bash
# Silly joke
curl -X POST http://localhost:1245/silly

# Silly animal
curl -X PUT http://localhost:1245/silly

# Silly sound
curl -X PUT http://localhost:1245/silly2

# PATCH endpoint
curl -X PATCH http://localhost:1245/
```

## License

ISC
