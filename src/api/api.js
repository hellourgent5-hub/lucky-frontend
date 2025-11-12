import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "https://lucky-backend-rlr0.onrender.com/api",
  headers: { "Content-Type": "application/json" },
});

export const getServices = () => API.get("/services");
export const getProducts = () => API.get("/products");
export const userLogin = (data) => API.post("/users/login", data);
export default API;
