import {
  createAllBattles,
  createBattle,
  deleteBattle,
  getBattles,
  updateBattle,
  updateWinner,
} from "@/api/battleApi";
import { querClient } from "@/lib/queryClient";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Battle } from "@/types/interfaces";
import { modalError } from "@/components/show/modals";

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
    onSuccess(data, variables) {
      querClient.invalidateQueries(["battle", variables.nro]);
    },
    onError() {
      modalError("Ocurrio un error al generar el encuentro");
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
      modalError("Ocurrio un error al generar los encuentros");
    },
  });
};

export const useDeleteBattle = () => {
  return useMutation({
    mutationFn: deleteBattle,
    onSuccess(data, variables, context) {
      querClient.invalidateQueries(["battle", variables.nro]);
    },
    onError() {
      modalError("Ocurrio un error al eliminar el encuentro");
    },
  });
};

export const useUpdateWinner = () => {
  return useMutation({
    mutationFn: updateWinner,
    onSuccess(data, variables, context) {
      querClient.invalidateQueries(["battle", variables.nro]);
    },
    onError() {
      modalError("Ocurrio un error");
    },
  });
};

export const useUpdateBattle = () => {
  return useMutation({
    mutationFn: updateBattle,
    onSuccess(data, variables, context) {
      querClient.invalidateQueries(["battle", variables.nro])
    },
    onError() {
      modalError("Error al actualizar el encuentro")
    }
  })
}