import { useUserState } from "@/state/user";
import axios from "axios";

const newAxios = axios.create({
  // baseURL: "http://localhost:4000/api/",
  baseURL: "https://dimelgends.onrender.com/api",
});

newAxios.interceptors.request.use((config) => {
  const token = useUserState.getState().token;
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default newAxios;
