import axios from "@/lib/axios";
import { User, LoginInfo } from "@/types/interfaces";

export const login = async ({ email, password }: LoginInfo) => {
  const res = await axios.post("/user/login", { email, password });
  return res.data;
};

export const register = async (
  usuario: Omit<User, "biography" | "urlPhoto">
) => {
  const res = await axios.post("/user", usuario);
  return res.data;
};
