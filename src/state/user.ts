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

export const useUserState = create(
  persist<State>(
    (set) => ({
      user: {
        lastName: "",
        firstName: "",
        email: "",
        password: "",
        biography: "",
        urlPhoto: "",
      },
      isAllow: false,
      token: "",
      updateState: (user, token) =>
        set(() => ({ isAllow: true, token: token, user: user })),
      resetState: () =>
        set(() => ({
          isAllow: false,
          token: "",
          user: {
            biography: "",
            email: "",
            firstName: "",
            lastName: "",
            urlPhoto: "",
          },
        })),
    }),
    {
      name: "usuario",
    }
  )
);
