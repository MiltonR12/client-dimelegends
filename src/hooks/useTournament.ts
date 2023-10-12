import {
  creatTournament,
  deleteTournament,
  getAllTournament,
  getMyTournaments,
  getTournament,
  updateTournament,
} from "@/api/tournamentApi";
import { querClient } from "@/lib/queryClient";
import { useMutation, useQuery } from "@tanstack/react-query";

type Mitorneo = {
  nro: string,
  tournamentName: string,
  formUrl: string
}

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

export const useGetMyTorneo = () => {
  return useQuery<Mitorneo[]>({
    queryKey: ["mis-torneos"],
    queryFn: getMyTournaments,
  });
};

export const useCreatTorneo = () => {
  return useMutation({
    mutationFn: creatTournament,
    onSuccess() {
      querClient.invalidateQueries(["torneos", "mis-torneos"]);
    },
  });
};

export const useDeleteTorneo = () => {
  return useMutation({
    mutationFn: deleteTournament,
    onSuccess() {
      querClient.invalidateQueries(["mis-torneos", "torneos"]);
    },
  });
};

export const useUpdateTorneo = () => {
  return useMutation({
    mutationFn: updateTournament,
    onSuccess() {
      querClient.invalidateQueries(["mis-torneos", "torneos"]);
    },
  });
};
