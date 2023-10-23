import axios from "@/lib/axios";
import { Battle } from "@/types/interfaces";

type CreateProps = {
  nro: string;
  battle: Omit<Battle, "battleID" | "battleWinner">;
};

type DeleteProps = {
  nro: string;
  id: string;
};

type WinnerProps = {
  nro: string;
  id: string;
  winner: string | null;
};

type CreateAllProps = {
  nro: string;
  data: {
    nroBattlesByDay: number;
    timeBattles: number;
    startBattles: string;
  };
};

type UpdateProps = {
  nro: string;
  battle: Omit<Battle, "battleID" | "battleWinner">;
};

export const getBattles = async (nro: string) => {
  const res = await axios.get(`/battle/${nro}`);
  return res.data;
};

export const createBattle = async ({ nro, battle }: CreateProps) => {
  const res = await axios.post(`/battle/${nro}`, battle);
  return res.data;
};

export const createAllBattles = async ({ nro, data }: CreateAllProps) => {
  const res = await axios.post(`/battle/${nro}/generate`, data);
  return res.data;
};

export const deleteBattle = async ({ nro, id }: DeleteProps) => {
  const res = await axios.delete(`/battle/${nro}/${id}`);
  return res.data;
};

export const updateWinner = async ({ nro, winner, id }: WinnerProps) => {
  const res = await axios.patch(`/battle/winner/${nro}`, { id, winner });
  return res.data;
};

export const updateBattle = async ({ battle, nro }: UpdateProps) => {
  const res = await axios.put(`/battle/${nro}`, battle);
  return res.data;
};
