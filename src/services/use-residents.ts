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

const fetchResidents = async (residentsId: string[]): Promise<IResidents> => {
  try {
    const { data } = await api.get(`/character/${residentsId}`);

    return { ...initialData, residents: data };
  } catch (error) {
    return { ...initialData, error: error?.message };
  }
};

type IUseResidents = {
  residentsId?: string[];
  locationId?: number;
};

export const useResidents = ({ locationId, residentsId }: IUseResidents) => {
  return useInfiniteQuery([QUERY_KEYS.RESIDENTS, locationId], {
    queryFn: () => fetchResidents(residentsId),
    enabled: !!residentsId,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    getNextPageParam: () => residentsId,
  });
};
