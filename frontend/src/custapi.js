
import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
});

export const login = (credentials) => {
  return api.post('/login', credentials);
};

export const getAllocatedDevices = () => {
  return api.get('/devices');
};

export const updateDeviceState = (deviceId, newState) => {
  return api.put(`/devices/${deviceId}`, newState);
};

export const createRoom = (roomData) => {
  return api.post('/rooms', roomData);
};
