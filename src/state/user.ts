import { persist } from "zustand/middleware";
import { create } from "zustand";
import { User } from "@/types/interfaces";

type State = {
  user: Omit<User, "password">;
  isAllow: boolean;
  token: string;
  updateState: (user: any, token: string) => void;
  resetState: () => void;
};

const User = {
  lastName: "",
  firstName: "",
  email: "",
  biography: "",
  urlPhoto: "",
};

export const useUserState = create(
  persist<State>(
    (set) => ({
      user: User,
      isAllow: false,
      token: "",
      updateState: (user, token) => set(() => ({ isAllow: true, token, user })),
      resetState: () =>
        set(() => ({
          isAllow: false,
          token: "",
          user: User,
        })),
    }),
    {
      name: "usuario",
    }
  )
);
