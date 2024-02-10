import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
});

export const login = (credentials) => {
  // Implement login request
  return api.post('/login', credentials);
};

// Define other API functions for user and device management as needed
