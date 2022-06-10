import create from "zustand";

import { ICharacter } from "types/rick-morty-api";

interface IModalStore {
  selected: ICharacter;
  setSelected: (character: ICharacter) => void;
}

export const useModalStore = create<IModalStore>((set) => ({
  selected: null,
  setSelected: (character) => set(() => ({ selected: character })),
}));
