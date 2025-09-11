import { Routes, Route } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import './App.css'

// API service
const api = axios.create({
  baseURL: '/api',
})

// Health check query
const useHealthCheck = () => {
  return useQuery({
    queryKey: ['health'],
    queryFn: async () => {
      const response = await api.get('/health')
      return response.data
    },
  })
}

function HomePage() {
  const { data: health, isLoading, error } = useHealthCheck()

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Simple Server
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A modern full-stack application built with React, Express.js, and Tailwind CSS
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Server Status Card */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Server Status
            </h2>
            {isLoading ? (
              <div className="flex items-center text-blue-600">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mr-2"></div>
                Checking server...
              </div>
            ) : error ? (
              <div className="text-red-600">
                ❌ Server connection failed
              </div>
            ) : (
              <div className="text-green-600">
                ✅ Server is running
                <div className="text-sm text-gray-500 mt-2">
                  Last checked: {health?.timestamp}
                </div>
              </div>
            )}
          </div>

          {/* Features Card */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Features
            </h2>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-700">
                <span className="text-green-500 mr-2">✓</span>
                React 18 with TypeScript
              </li>
              <li className="flex items-center text-gray-700">
                <span className="text-green-500 mr-2">✓</span>
                Express.js REST API
              </li>
              <li className="flex items-center text-gray-700">
                <span className="text-green-500 mr-2">✓</span>
                React Query for data fetching
              </li>
              <li className="flex items-center text-gray-700">
                <span className="text-green-500 mr-2">✓</span>
                Tailwind CSS styling
              </li>
              <li className="flex items-center text-gray-700">
                <span className="text-green-500 mr-2">✓</span>
                Vite for fast development
              </li>
            </ul>
          </div>

          {/* API Testing Card */}
          <div className="bg-white rounded-lg shadow-lg p-6 md:col-span-2">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              API Testing
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium text-gray-700 mb-2">Available Endpoints:</h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li><code className="bg-gray-100 px-2 py-1 rounded">GET /api/health</code> - Health check</li>
                  <li><code className="bg-gray-100 px-2 py-1 rounded">PATCH /api/test</code> - Test endpoint</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-700 mb-2">Tech Stack:</h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'TypeScript', 'Express.js', 'Tailwind CSS', 'Vite', 'React Query'].map((tech) => (
                    <span key={tech} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  )
}

export default App