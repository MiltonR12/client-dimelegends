import { Page } from "@/types/interfaces";
import axios from "@/lib/axios";

export const getAllPages = async () => {
  const res = await axios.get("/page/list");
  return res.data;
};

export const getPage = async () => {
  const res = await axios.get("/page");
  return res.data;
};

export const createPage = async ({ pageName }: Pick<Page, "pageName">) => {
  const res = await axios.post("/page", { pageName });
  return res.data;
};

export const updatePage = async (page: Page) => {
  const res = await axios.put(`/page`, page);
  return res.data;
};

export const uploadFile = async (formData: FormData) => {
  const res = await axios.post("/page/upload", formData);
  return res.data;
};
