import { createPage, getPage } from "@/api/pageApi";
import { useMutation, useQuery } from "@tanstack/react-query";
import { querClient } from "@/lib/queryClient";

export const useGetPage = () => {
  return useQuery({
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
