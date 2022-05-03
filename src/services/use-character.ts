import { useQuery } from "react-query";
import { IFilterCharacter, ICharacterResponse } from "types/rick-morty-api";
import { api } from "./api";

const initialData: ICharacterResponse = {
  error: null,
  info: null,
  results: null,
};

export const fecthCharacter = async (
  name: string,
  filter: IFilterCharacter
) => {
  try {
    const { data } = await api.get("/character", {
      params: { name, ...filter },
    });

    if (data?.results?.lenght < 1) {
      throw new Error("No results has found.");
    }

    return { ...initialData, ...data } as ICharacterResponse;
  } catch (error) {
    return { ...initialData, error: name } as ICharacterResponse;
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
    initialData,
  });
};
