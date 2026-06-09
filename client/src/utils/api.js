import axios from 'axios';

// Determine the base URL for API requests
// Priority:
// 1. VITE_API_BASE_URL environment variable (set in .env.production or Vercel)
// 2. Fallback to /api for Vercel rewrites to work
const getBaseUrl = () => {
  // If explicitly set via environment variable, use that
  const envUrl = import.meta.env.VITE_API_BASE_URL;
  if (envUrl) {
    // Remove trailing slash if present
    return envUrl.replace(/\/$/, '');
  }
  
  // For Vercel deployment without env var, use relative path
  // The vercel.json rewrites will forward /api/* to the backend
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