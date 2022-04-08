import { useQuery } from "react-query";
import { IFilterCharacter, IResponse } from "types/rick-morty-api";
import { api } from "./api";

export const fecthCharacter = async (
  name: string,
  filter: IFilterCharacter
) => {
  try {
    const { data, status } = await api.get("/character", {
      params: { name, ...filter },
    });

    return data as IResponse;
  } catch (error) {
    console.log("Some error has ocourred at fetchCharacter", error);
  }
};

export const useCharacter = (
  name: string | undefined,
  filter: IFilterCharacter
) => {
  return useQuery(["character", name, filter], {
    queryFn: () => fecthCharacter(name, filter),
    // enabled: !!name,
    refetchOnWindowFocus: false,
  });
};
