// src/api.js
import axios from "axios";

const BASE_URL = "https://lucky-backend-rlr0.onrender.com/api";

export const registerUser = (data) => axios.post(`${BASE_URL}/auth/register`, data);
export const loginUser = (data) => axios.post(`${BASE_URL}/auth/login`, data);

// Categories
export const getCategories = () => axios.get(`${BASE_URL}/categories`);
export const createCategory = (data, token) =>
  axios.post(`${BASE_URL}/categories/add`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });

// Products
export const getProducts = () => axios.get(`${BASE_URL}/products`);
export const addProduct = (data, token) =>
  axios.post(`${BASE_URL}/products/add`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
