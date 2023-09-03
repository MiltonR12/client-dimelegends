import { Page } from '@/types/interfaces'
import axios from "@/lib/axios";

export const getPage = async () => {
  const res = await axios.get("/page");
  return res.data;
};

export const createPage = async ({ pageName }: Pick<Page, "pageName">) => {
  const res = await axios.post("/page", { pageName });
  return res.data;
};
