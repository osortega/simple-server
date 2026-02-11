# Simple Server

A simple Express.js server application that demonstrates basic REST API endpoints.

## What is this repo?

This repository contains a minimal Express.js server implementation designed for learning or testing purposes. It provides a basic HTTP server with GET and PATCH endpoints, running with automatic reload capabilities via nodemon.

## Features

- **GET endpoint**: Returns "Hello world!" at the root path (`/`)
- **PATCH endpoint**: Handles PATCH requests at the root path (`/`)
- **Auto-reload**: Uses nodemon for automatic server restart during development
- **Request logging**: Logs timestamp, method, and path for each request

## Prerequisites

- Node.js (v12 or higher recommended)
- npm or yarn package manager

## Installation

Install the project dependencies:

```bash
npm install
```

or if you use yarn:

```bash
yarn install
```

## Usage

Start the development server:

```bash
npm start
```

The server will start on **port 7000** and will automatically restart when you make changes to the code.

## API Endpoints

### GET /

Returns a simple "Hello world!" message.

**Example:**
```bash
curl http://localhost:7000/
```

**Response:**
```
Hello world!
```

### PATCH /

Handles PATCH requests.

**Example:**
```bash
curl -X PATCH http://localhost:7000/
```

## Project Structure

```
simple-server/
├── index.js           # Main server entry point
├── patchHandler.js    # PATCH route handler
├── package.json       # Project dependencies and scripts
└── test.txt          # Test data file
```

## Technologies Used

- **Express.js**: Fast, unopinionated web framework for Node.js
- **Nodemon**: Development tool for automatic server restart

## License

ISC
