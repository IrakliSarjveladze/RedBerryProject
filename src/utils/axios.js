// request.js
import axios from "axios";
export const token = "7b2ffc15-8d4e-4f3d-8d1f-636ae67c5324";
const axiosInstance = axios.create({ baseURL: "https://bootcamp-2022.devtest.ge/api" });

// Request interceptor for API calls
axiosInstance.interceptors.request.use(
  async (config) => {
    if (!config.headers) {
      config.headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };
    }
    return config;
  },
);


export default axiosInstance;