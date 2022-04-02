import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CharacterCard } from ".";

export default {
  title: "Modules/Character Card",
  component: CharacterCard,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof CharacterCard>;

export const Default: ComponentStory<typeof CharacterCard> = (args) => {
  return <CharacterCard {...args} />;
};

Default.args = {
  name: "Alien Rick",
  image: "https://rickandmortyapi.com/api/character/avatar/14.jpeg",
  species: "Alien",
  type: "",
  status: "unknown",
  origin: { name: "Citadel of Ricks", url: "none" },
  episode: ["Close Rick-counters of the Rick Kind"],
};
