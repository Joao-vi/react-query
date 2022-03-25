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
