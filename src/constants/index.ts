import { IFilterGroup } from "components/modules";

export const APP_MAIN_KEY = "R&M-reactQuery";

export const STORAGE_KEYS = {
  FAVORITES: "fav-characters",
};

export const QUERY_KEYS = {
  CHARACTER: "character",
  LOCATION: "location",
  RESIDENTS: "resident",
  LOCATION_ID: "locationId",
  FAVORITES: "favorites",
};

export const mockArray = [1, 1, 1, 1, 1, 1, 1, 1];

export const filterGroups: IFilterGroup[] = [
  {
    title: "Status",
    key: "status",
    options: [
      { label: "Alive", value: "alive" },
      { label: "Dead", value: "dead" },
      {
        label: "Unknown",
        value: "unknown",
      },
    ],
  },
  {
    title: "Gender",
    key: "gender",
    options: [
      { label: "Male", value: "male" },
      { label: "Female", value: "female" },
      {
        label: "Genderless",
        value: "genderless",
      },
    ],
  },
];
