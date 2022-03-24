import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Character } from ".";

export default {
  title: "Character Card",
  component: Character,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof Character>;

export const Default: ComponentStory<typeof Character> = (args) => {
  return <Character {...args} />;
};
