import axios from "axios";

// Automatically switch between local and Render backend
const API = axios.create({
  baseURL:
    import.meta.env.VITE_API_URL || "http://localhost:10000/api",
});

// Optional: For logged-in users (auth)
export const setToken = (token) => {
  API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export default API;
