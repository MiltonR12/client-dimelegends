import { login, register, updatePassword } from "@/api/userApi";
import { modalError } from "@/components/show/modals";
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

export const useUpdatePassword = () => {
  return useMutation({
    mutationFn: updatePassword
  });
};
