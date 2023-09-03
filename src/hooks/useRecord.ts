import {
  createRecord,
  deleteRecord,
  getRecord,
  getTournamentRecords,
  updateRecord,
} from "@/api/recordApi";
import { querClient } from "@/lib/queryClient";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useGetRecord = <T>(nro: string, id: string) => {
  return useQuery<T>({
    queryKey: ["records", nro, id],
    queryFn: () => getRecord({ nro, id }),
  });
};

export const useGetRecords = <T>(nro: string) => {
  return useQuery<T>({
    queryKey: ["records", nro],
    queryFn: () => getTournamentRecords(nro),
  });
};

export const useCreateRecord = () => {
  return useMutation({
    mutationFn: createRecord,
    onSuccess() {
      querClient.invalidateQueries(["records"]);
    },
  });
};

export const useDeleteRecord = () => {
  return useMutation({
    mutationFn: deleteRecord,
    onSuccess() {
      querClient.invalidateQueries(["records"]);
    },
  });
};

export const useUpdateRecord = () => {
  return useMutation({
    mutationFn: updateRecord,
    onSuccess() {
      querClient.invalidateQueries(["records"]);
    },
  });
};
