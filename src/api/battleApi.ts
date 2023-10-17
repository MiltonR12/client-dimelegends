import axios from "@/lib/axios";
import { Battle } from "@/types/interfaces";

type CreateProps = {
  nro: string;
  battle: Omit<Battle, "battleID">;
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
    startBattles: Date;
  };
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
