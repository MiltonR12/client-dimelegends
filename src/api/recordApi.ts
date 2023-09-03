import axios from "@/lib/axios";
import { Record } from "@/types/interfaces";

interface Identifier {
  nro: string;
  id: string;
}

interface Create extends Identifier {
  record: Omit<Record, "teamID">;
}

export const getTournamentRecords = async (nro: string) => {
  const res = await axios.get(`/record/${nro}`);
  return res.data;
};

export const getRecord = async ({ id, nro }: Identifier) => {
  const result = await axios.get(`/record/${nro}/${id}`);
  return result.data;
};

export const createRecord = async ({ record, nro }: Omit<Create, "id">) => {
  const res = await axios.post(`/record/${nro}`, record);
  return res.data;
};

export const deleteRecord = async ({ nro, id }: Identifier) => {
  const result = await axios.delete(`/record/${nro}/${id}`);
  return result.data;
};

export const updateRecord = async ({ nro, id, record }: Create) => {
  const result = await axios.put(`/record/${nro}/${id}`, record);
  return result.data;
};
