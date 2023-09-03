import axios from "@/lib/axios";
import { Tournament } from "@/types/interfaces";

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

export const creatTournament = async (
  tournament: Omit<Tournament, "nro" | "Page">
) => {
  const res = await axios.post("/torneo", tournament);
  return res.data;
};
