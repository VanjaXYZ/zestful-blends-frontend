import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URI,
  withCredentials: true
  // In future can optionally include auth token in header via context
});

export default api;