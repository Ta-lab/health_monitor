import axios from 'axios';

let BASE_URL = process.env.REACT_APP_BACKEND_URL; // Default to the environment variable

if (process.env.NODE_ENV === "production") {
  // Set BASE_URL dynamically for production environment (adds /api)
  BASE_URL = `${window.location.protocol}//${window.location.hostname}:${window.location.port}/api`;
}

console.log("API BASE_URL:", BASE_URL);

const api = axios.create({
  baseURL: BASE_URL, // Use the dynamically set BASE_URL
});

console.log("API",process.env.REACT_APP_BACKEND_URL)

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const apiGet = (url) => api.get(url);
export const apiPost = (url, data) => api.post(url, data);
export const apiPut = (url, data) => api.put(url, data);
export const apiDelete = (url) => api.delete(url);
