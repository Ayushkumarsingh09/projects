import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
});

export const login = (credentials) => {
  return api.post('/login', credentials);
};
