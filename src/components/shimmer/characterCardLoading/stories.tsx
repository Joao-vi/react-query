import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CharacterCard } from "../../modules/character-card";
import { useEffect, useReducer } from "react";
import { CharacterCardLoading } from ".";

export default {
  title: "Shimmer/CharacterCard loading",
  component: CharacterCardLoading,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof CharacterCardLoading>;

const cardArgs = {
  name: "Alien Rick",
  image: "https://rickandmortyapi.com/api/character/avatar/14.jpeg",
  species: "Alien",
  type: "",
  status: "unknown",
  origin: { name: "Citadel of Ricks", url: "none" },
  episode: ["Close Rick-counters of the Rick Kind"],
};

export const Default: ComponentStory<typeof CharacterCardLoading> = (args) => {
  const [isLoading, toggleIsLoading] = useReducer((state) => !state, true);

  useEffect(() => {
    const handler = setTimeout(() => {
      toggleIsLoading();
    }, 2000);

    return () => clearTimeout(handler);
  }, []);

  if (isLoading) {
    return <CharacterCardLoading {...args} />;
  }

  return <CharacterCard {...cardArgs} />;
};
