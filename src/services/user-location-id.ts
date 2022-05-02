import { QUERY_KEYS } from "constants/index";
import { useQuery } from "react-query";
import { api } from "./api";

import { ILocation } from "types/rick-morty-api";

export interface ILocationByIdResponse {
  location: ILocation;
  error: string;
}
const location: ILocation = {
  created: null,
  dimension: null,
  id: null,
  name: null,
  residents: null,
  type: null,
  url: null,
};

const initialData: ILocationByIdResponse = {
  location,
  error: null,
};

const fetchLocationById = async (
  id: string
): Promise<ILocationByIdResponse> => {
  try {
    const { data } = await api.get(`/location/${id}`);

    const residents = data.residents.map((resident) =>
      resident.replace("https://rickandmortyapi.com/api/character/", "")
    );

    return { ...initialData, location: { ...data, residents } };
  } catch (error) {
    return { ...initialData, error: error?.message };
  }
};

export const useLocationId = (id: string) =>
  useQuery([QUERY_KEYS.LOCATION_ID, id], {
    queryFn: () => fetchLocationById(id),
    initialData,
  });
