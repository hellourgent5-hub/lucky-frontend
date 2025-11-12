// src/api/api.js (for USER FRONTEND)
import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "https://lucky-backend-rlr0.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("userToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// 🧾 USER ROUTES
export const userRegister = (data) => API.post("/users/register", data);
export const userLogin = (data) => API.post("/users/login", data);
export const getServices = () => API.get("/services");
export const getProducts = () => API.get("/products");
export const placeOrder = (data) => API.post("/orders", data);

export default API;
