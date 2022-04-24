import { useQuery } from "react-query";
import { IData, IFilterCharacter, IResponse } from "types/rick-morty-api";
import { api } from "./api";

export const fecthCharacter = async (
  name: string,
  filter: IFilterCharacter
) => {
  try {
    const { data } = await api.get("/character", {
      params: { name, ...filter },
    });

    return { ...data, error: "" } as IData;
  } catch (error) {
    if (error.response.status === 404) {
      return { data: {}, error: name } as IData;
    }
  }
};

export const useCharacter = (
  name: string | undefined,
  filter: IFilterCharacter
) => {
  return useQuery(["character", name, filter], {
    queryFn: () => fecthCharacter(name, filter),
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  });
};
