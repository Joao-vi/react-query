import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CharacterCardLoading } from ".";

export default {
  title: "Shimmer/CharacterCard loading",
  component: CharacterCardLoading,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof CharacterCardLoading>;

export const Default: ComponentStory<typeof CharacterCardLoading> = (args) => (
  <CharacterCardLoading {...args} />
);
