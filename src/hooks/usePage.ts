import { createPage, getAllPages, getPage, updatePage } from "@/api/pageApi";
import { useMutation, useQuery } from "@tanstack/react-query";
import { querClient } from "@/lib/queryClient";
import { Page } from "@/types/interfaces";

export const useGetAllPages = () => {
  return useQuery<Page[]>({
    queryKey: ["creator"],
    queryFn: getAllPages,
  });
};

export const useGetPage = () => {
  return useQuery<Page>({
    queryKey: ["page"],
    queryFn: getPage,
    retry: 1,
  });
};

export const useCreatePage = () => {
  return useMutation({
    mutationFn: createPage,
    onSuccess() {
      querClient.invalidateQueries(["page"]);
    },
  });
};

export const useUpdatePage = () => {
  return useMutation({
    mutationFn: updatePage,
    onSuccess() {
      querClient.invalidateQueries(["page"]);
    },
  });
};
