import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "https://lucky-backend-rlr0.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("adminToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const adminLogin = (data) => API.post("/admin/login", data);
export const resetAdmin = () => API.get("/admin/reset-admin");

export default API;
