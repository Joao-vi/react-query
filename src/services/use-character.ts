import { useQuery } from "react-query";
import { IFilterCharacter, IResponse } from "types/rick-morty-api";
import { api } from "./api";

export const fecthCharacter = async (filter: IFilterCharacter) => {
  try {
    const { data, status } = await api.get("/character/?", {
      params: {
        ...filter,
      },
    });

    if (status !== 200) {
      return Promise.reject(status);
    }

    return data as IResponse;
  } catch (error) {
    console.log("Some error has ocourred, please try later.");
  }
};

export const useCharacter = (filter: IFilterCharacter) => {
  const { name } = filter;
  return useQuery(["character", name], {
    queryFn: () => fecthCharacter(filter),
    enabled: !!name,
    staleTime: Infinity,
  });
};
