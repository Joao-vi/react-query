import { useQuery } from "react-query";

import { QUERY_KEYS } from "constants/index";
import { ILocationResponse } from "types/rick-morty-api";
import { api } from "./api";

interface IFilterLocation {
  name?: string;
  type?: string;
  dimension?: string;
}

const initialData: ILocationResponse = {
  error: null,
  info: null,
  results: null,
};

const fectchLocation = async (
  filter: IFilterLocation
): Promise<ILocationResponse> => {
  try {
    // query by id
    const { data } = await api.get("/location", {
      params: filter,
    });

    return { ...initialData, ...data };
  } catch (error) {
    return { ...initialData, error: error?.message };
  }
};

export const useLocation = (filter: IFilterLocation) => {
  return useQuery([QUERY_KEYS.LOCATION, filter], {
    queryFn: () => fectchLocation(filter),
    refetchOnWindowFocus: false,
    initialData,
  });
};
