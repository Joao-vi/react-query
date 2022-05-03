import { useInfiniteQuery } from "react-query";

import { QUERY_KEYS } from "constants/index";
import { api } from "./api";
import { queryClient } from "pages/_app";
import { ILocationByIdResponse } from "./user-location-id";
import { ICharacter } from "types/rick-morty-api";

interface IResidents {
  error: string;
  residents: ICharacter[];
}

const initialData: IResidents = {
  error: null,
  residents: null,
};

const fetchCharactersByID = async (
  charactersID: string[]
): Promise<IResidents> => {
  try {
    const { data } = await api.get(`/character/${charactersID}`);

    const residents = !!data?.length ? [...data] : [data];

    return { ...initialData, residents };
  } catch (error) {
    return { ...initialData, error: error?.message };
  }
};

type IUseCharacterByID = {
  queryKey: keyof typeof QUERY_KEYS;
  charactersID?: string[];
  locationID?: number;
};

export const useCharacterByID = (props: IUseCharacterByID) => {
  const { queryKey, locationID, charactersID } = props;
  return useInfiniteQuery([queryKey, locationID], {
    queryFn: () => fetchCharactersByID(charactersID),
    enabled: !!charactersID,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    getNextPageParam: () => charactersID,
  });
};
