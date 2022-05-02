import { useInfiniteQuery } from "react-query";

import { QUERY_KEYS } from "constants/index";
import { api } from "./api";
import { queryClient } from "pages/_app";

const fetchResidents = async (location: string) => {
  try {
    const { data } = await api.get("/character", {
      params: {
        location,
      },
    });

    return { ...initialData, ...data };
  } catch (error) {
    return { ...initialData, error };
  }
};

export const useResidents = (location: string[]) => {
  const locationData = queryClient.getQueryData(QUERY_KEYS.LOCATION);
  const qtdPages = Math.ceil(location.length / 4);

  return useInfiniteQuery([QUERY_KEYS.RESIDENTS, location], {
    queryFn: () => fetchResidents(location),
    enabled: !!locationData,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });
};
