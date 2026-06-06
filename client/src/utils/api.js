import axios from 'axios';

// Determine the base URL for API requests
// In production (Vercel), this will be set via VITE_API_BASE_URL environment variable
// In development, it defaults to the Vite proxy at /api which forwards to the backend
const getBaseUrl = () => {
  // If explicitly set, use that
  if (import.meta.env.VITE_API_BASE_URL) {
    return import.meta.env.VITE_API_BASE_URL;
  }
  
  // For development and same-origin deployments, use relative path
  return '/api';
};

const api = axios.create({
  baseURL: getBaseUrl(),
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add admin password header when needed
api.interceptors.request.use((config) => {
  const adminPassword = sessionStorage.getItem('messagesAdminPassword');
  if (adminPassword) {
    config.headers['x-admin-password'] = adminPassword;
  }
  return config;
});

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Clear stored password on unauthorized
      sessionStorage.removeItem('messagesAdminPassword');
    }
    return Promise.reject(error);
  }
);

export default api;