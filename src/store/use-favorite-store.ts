import { ICharacter } from "types";
import create from "zustand";
import { persist } from "zustand/middleware";

interface IUseFavoriteStore {
  favorites: number[];
  setFavorite: (id: number) => void;
}
export const useFavoriteStore = create(
  persist<IUseFavoriteStore>(
    (set) => ({
      favorites: [],
      setFavorite: (id) =>
        set(({ favorites }) => {
          const shouldRemove = favorites.some((fav) => fav === id);
          if (shouldRemove) {
            return {
              favorites: [...favorites.filter((fav) => fav !== id)],
            };
          }
          return { favorites: [...favorites, id] };
        }),
    }),
    {
      name: "Rick-Morty-favorites",
    }
  )
);
