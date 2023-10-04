import axios from "@/lib/axios";
import { Tournament } from "@/types/interfaces";

type CreateTorneo = Omit<Tournament, "nro" | "Page">;

export const getAllTournament = async () => {
  const res = await axios.get("/torneo");
  return res.data;
};

export const getTournament = async (nro: string) => {
  const res = await axios.get(`/torneo/${nro}`);
  return res.data;
};

export const getMyTournaments = async () => {
  const res = await axios.get("/torneo/mis-torneos");
  return res.data;
};

export const creatTournament = async (tournament: CreateTorneo) => {
  const res = await axios.post("/torneo", tournament);
  return res.data;
};

export const deleteTournament = async (nro: string) => {
  const res = await axios.delete(`/torneo/${nro}`);
  return res.data;
};

export const updateTournament = async (torneo: Omit<Tournament, "Page">) => {
  const res = await axios.put(`/torneo/${torneo.nro}`, torneo);
  return res.data;
};
