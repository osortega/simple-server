# Simple Server - Full-Stack React + Express.js Application

A modern full-stack application built with React, Express.js, and Tailwind CSS, featuring a clean monorepo structure with npm workspaces.

![Simple Server App](https://github.com/user-attachments/assets/02ce1337-46f6-48a4-8b6a-48247faa4a0e)

## 🚀 Features

- **React 18** with TypeScript for the frontend
- **Express.js** REST API backend
- **Tailwind CSS** for modern, responsive styling
- **React Query** for efficient data fetching and caching
- **Vite** for fast development and optimized builds
- **npm workspaces** for monorepo management
- **CORS** enabled for cross-origin requests
- **Hot reload** in development mode

## 📁 Project Structure

```
simple-server/
├── server/              # Express.js backend
│   ├── index.js         # Main server file
│   ├── patchHandler.js  # API route handlers
│   └── package.json     # Server dependencies
├── client/              # React frontend
│   ├── src/
│   │   ├── App.tsx      # Main React component
│   │   ├── main.tsx     # React entry point
│   │   └── index.css    # Global styles
│   ├── public/
│   ├── vite.config.ts   # Vite configuration
│   └── package.json     # Client dependencies
├── package.json         # Root workspace configuration
└── README.md
```

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **React Query** - Data fetching and caching
- **Axios** - HTTP client
- **Tailwind CSS** - Utility-first CSS framework

### Backend
- **Express.js** - Web framework
- **CORS** - Cross-origin resource sharing
- **Nodemon** - Development auto-restart

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd simple-server
```

2. Install dependencies for all workspaces:
```bash
npm install
```

### Development

Start both the server and client in development mode:
```bash
npm run dev
```

This will start:
- **Client** on http://localhost:3000 (with hot reload)
- **Server** on http://localhost:6000 (with auto-restart)

The client automatically proxies API requests to the server.

### Individual Commands

**Server only:**
```bash
npm run dev:server    # Development mode
npm run start         # Production mode
```

**Client only:**
```bash
npm run dev:client    # Development mode
npm run build         # Production build
```

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Health check endpoint |
| PATCH | `/api/test` | Test endpoint for API testing |

### Example API Usage

```bash
# Health check
curl http://localhost:6000/api/health

# Test PATCH endpoint
curl -X PATCH http://localhost:6000/api/test \
  -H "Content-Type: application/json" \
  -d '{"test": "data"}'
```

## 📦 Production Build

1. Build the client:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

The server will serve the built React app and handle API requests.

## 🔧 Configuration

### Server Configuration
- **Port**: 6000 (configurable via `PORT` environment variable)
- **CORS**: Enabled for all origins in development
- **Static Files**: Serves React build from `client/dist`

### Client Configuration
- **Development Server**: Port 3000
- **API Proxy**: Automatically proxies `/api/*` requests to the server
- **Build Output**: `client/dist`

## 🧪 Testing

Run tests for both client and server:
```bash
npm test
```

## 📝 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start both client and server in development mode |
| `npm run dev:server` | Start only the server in development mode |
| `npm run dev:client` | Start only the client in development mode |
| `npm run build` | Build the client for production |
| `npm start` | Start the production server |
| `npm test` | Run all tests |

## 🔒 Security

- All dependencies are checked for known vulnerabilities
- CORS is properly configured for the application context
- Environment variables are used for sensitive configuration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test your changes
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.