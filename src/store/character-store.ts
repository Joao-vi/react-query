import create from "zustand";

import { STORAGE_KEYS } from "constants/index";
import { LocalStorageManager } from "helper/local-storage-manager";

import { ICharacter } from "types/rick-morty-api";

interface ICharacterStore {
  pickedCharacter: ICharacter | undefined;
  favorites: string[];
  setFavorites: (id: string) => void;
  setPickedCharacter: (character: ICharacter) => void;
}

export const characterStore = create<ICharacterStore>((set, get) => ({
  pickedCharacter: undefined,
  favorites: [],
  setFavorites: (id: string) =>
    set(({ favorites }) => {
      const { save } = LocalStorageManager();
      const shouldRemove = favorites.includes(id);
      const fFavorites = shouldRemove
        ? favorites.filter((fav) => fav !== id)
        : [...favorites, id];
      save(STORAGE_KEYS.FAVORITES, fFavorites);
      return { favorites: fFavorites };
    }),
  setPickedCharacter: (character: ICharacter) =>
    set(() => ({ pickedCharacter: character })),
}));
