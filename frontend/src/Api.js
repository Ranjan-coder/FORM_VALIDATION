import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users';

// Create user
export const createUser = (userData) => {
  return axios.post(`${API_URL}/create`, userData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

// Get all users
export const getUsers = () => {
  return axios.get(API_URL);
};

// Get user by ID
export const getUserById = (id) => {
  return axios.get(`${API_URL}/${id}`);
};

// Update user
export const updateUser = (id, userData) => {
  return axios.put(`${API_URL}/${id}`, userData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

// Delete user
export const deleteUser = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};
