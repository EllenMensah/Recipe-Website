import axios from "axios";


const baseURL = import.meta.env.VITE_BASE_URL;

export const apiClient = axios.create({
  baseURL: baseURL,
});

apiClient.interceptors.request.use((config) => {
  //Get access token from localStorage
  const accessToken = localStorage.getItem("accessToken");
  //Attach token to Authorization header
  config.headers.Authorization = `Bearer ${accessToken}`;
  //Return config
  return config;
});
