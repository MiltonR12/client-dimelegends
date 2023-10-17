import {
  createAllBattles,
  createBattle,
  deleteBattle,
  getBattles,
  updateWinner,
} from "@/api/battleApi";
import { querClient } from "@/lib/queryClient";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Battle } from "@/types/interfaces";

interface BattleTime extends Battle {
  battleID: string;
}

export const useGetBattles = (nro: string) => {
  return useQuery<BattleTime[]>({
    queryKey: ["battle", nro],
    queryFn: () => getBattles(nro),
  });
};

export const useCreateBattle = () => {
  return useMutation({
    mutationFn: createBattle,
    onSuccess(data, variables, context) {
      querClient.invalidateQueries(["battle", variables.nro]);
    },
    onError(error, variables, context) {
      alert("Error al crear el versus");
    },
  });
};

export const useCreateAllBattles = () => {
  return useMutation({
    mutationFn: createAllBattles,
    onSuccess(data, variables) {
      querClient.invalidateQueries(["battle", variables.nro]);
    },
    onError(error, variables, context) {
      alert("Error al generar los horarios");
    },
  });
};

export const useDeleteBattle = () => {
  return useMutation({
    mutationFn: deleteBattle,
    onSuccess(data, variables, context) {
      querClient.invalidateQueries(["battle", variables.nro]);
    },
    onError(error, variables, context) {
      alert("Error al eliminar");
    },
  });
};

export const useUpdateWinner = () => {
  return useMutation({
    mutationFn: updateWinner,
    onSuccess(data, variables, context) {
      querClient.invalidateQueries(["battle", variables.nro]);
    },
    onError(error, variables, context) {
      alert("Error al cambiar al ganador");
    },
  });
};
