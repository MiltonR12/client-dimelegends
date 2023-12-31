import {
  createRecord,
  deleteRecord,
  getRecord,
  getTournamentRecords,
  updateRecord,
} from "@/api/recordApi";
import { querClient } from "@/lib/queryClient";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Record } from '@/types/interfaces'
import { modalError } from "@/components/show/modals";

export const useGetRecord = <T>(nro: string, id: string) => {
  return useQuery<T>({
    queryKey: ["records", nro, id],
    queryFn: () => getRecord({ nro, id }),
  });
};

export const useGetRecords = (nro: string) => {
  return useQuery<Record[]>({
    queryKey: ["records", nro],
    queryFn: () => getTournamentRecords(nro),
  });
};

export const useCreateRecord = () => {
  return useMutation({
    mutationFn: createRecord,
    onSuccess(data, variables, context) {
      querClient.invalidateQueries({ queryKey: ["records"] });
    },
    onError(){
      modalError("Error al crear el registro")
    }
  });
};

export const useDeleteRecord = () => {
  return useMutation({
    mutationFn: deleteRecord,
    onSuccess(data, variables, context) {
      querClient.invalidateQueries({ queryKey: ["records"] });
    },
    onError(){
      modalError("Error al eliminar el registro")
    }
  });
};

export const useUpdateRecord = () => {
  return useMutation({
    mutationFn: updateRecord,
    onSuccess(data, variables, context) {
      querClient.invalidateQueries({ queryKey: ["records"] });
    },
    onError(){
      modalError("Error al actualizar el registro")
    }
  });
};
