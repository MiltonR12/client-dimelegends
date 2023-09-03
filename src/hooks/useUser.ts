import { login, register } from "@/api/userApi";
import { useMutation } from "@tanstack/react-query";

export const useLogin = () => {
  return useMutation({
    mutationFn: login,
  });
};

export const useRegister = () => {
  return useMutation({
    mutationFn: register,
  });
};
