import axios from "axios";

const baseURL =
  import.meta.env.MODE === "development"
    ? "https://pulsechat-backend-h4qt.onrender.com/api"
    : import.meta.env.VITE_API_URL || "https://pulsechat-backend-h4qt.onrender.com/api";

export const axiosInstance = axios.create({
  baseURL,
  withCredentials: true,
});
