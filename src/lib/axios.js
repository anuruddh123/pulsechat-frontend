import axios from "axios";

const getApiBaseURL = () => {
  if (import.meta.env.MODE === "development") {
    return "https://pulsechat-backend-h4qt.onrender.com/api";
  }

  const envUrl =
    import.meta.env.VITE_API_URL ||
    "https://pulsechat-backend-h4qt.onrender.com";

  const normalizedUrl = envUrl.replace(/\/+$/, "");

  return normalizedUrl.endsWith("/api")
    ? normalizedUrl
    : `${normalizedUrl}/api`;
};

export const axiosInstance = axios.create({
  baseURL: getApiBaseURL(),
  withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
  if (token) {
    config.headers = config.headers || {};
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});