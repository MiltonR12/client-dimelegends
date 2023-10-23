import axios from "@/lib/axios";
import { User, LoginInfo } from "@/types/interfaces";

type PasswordProps = {
  oldPassword: string,
  newPassword: string,
}

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

export const updatePassword = async (data: PasswordProps) => {
  const res = await axios.patch('/user/password', data)
  return res.data
}
