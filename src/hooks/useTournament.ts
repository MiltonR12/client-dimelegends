import {
  creatTournament,
  deleteTournament,
  getAllTournament,
  getMyTournaments,
  getTournament,
  updateTournament,
} from "@/api/tournamentApi";
import { modalError } from "@/components/show/modals";
import { querClient } from "@/lib/queryClient";
import { TournamentComplet } from "@/types/interfaces";
import { useMutation, useQuery } from "@tanstack/react-query";

type Mitorneo = {
  nro: string;
  tournamentName: string;
  formUrl: string;
};

export const useGetAllTorneo = <T>() => {
  return useQuery<T>({
    queryKey: ["torneos"],
    queryFn: getAllTournament,
  });
};

export const useGetTorneo = (nro: string) => {
  return useQuery<TournamentComplet>({
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
    onError() {
      modalError("Error al crear el torneo")
    }
  });
};

export const useDeleteTorneo = () => {
  return useMutation({
    mutationFn: deleteTournament,
    onSuccess(data, variables, context) {
      querClient.invalidateQueries(["mis-torneos", "torneos", variables]);
    },
    onError(){
      modalError("No se pudo eliminar el torneo")
    }
  });
};

export const useUpdateTorneo = () => {
  return useMutation({
    mutationFn: updateTournament,
    onSuccess() {
      querClient.invalidateQueries(["mis-torneos", "torneos"]);
    },
    onError(){
      modalError("Error al actualizar el torneo")
    }
  });
};
