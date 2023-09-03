import {
  creatTournament,
  getAllTournament,
  getMyTournaments,
  getTournament,
} from "@/api/tournamentApi";
import { querClient } from "@/lib/queryClient";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useGetAllTorneo = <T>() => {
  return useQuery<T>({
    queryKey: ["torneos"],
    queryFn: getAllTournament,
  });
};

export const useGetTorneo = <T>(nro: string) => {
  return useQuery<T>({
    queryKey: ["torneos", nro],
    queryFn: () => getTournament(nro),
  });
};

export const useGetMyTorneo = <T>() => {
  return useQuery<T>({
    queryKey: ["mis-torneos"],
    queryFn: getMyTournaments,
  });
};

export const useCreatTorneo = () => {
  return useMutation({
    mutationFn: creatTournament,
    onSuccess() {
      querClient.invalidateQueries(["torneos"]);
    },
  });
};
