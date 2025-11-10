// src/api/api.js
import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "https://lucky-backend-rlr0.onrender.com/api",
});

export const setToken = (token) => {
  API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export default API;
