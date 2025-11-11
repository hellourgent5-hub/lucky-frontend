// src/api/api.js

import axios from "axios";

// Create axios instance
const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || https://lucky-backend-rlr0.onrender.com/api
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach token automatically if available
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("adminToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
