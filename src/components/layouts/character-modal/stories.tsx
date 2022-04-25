import { ComponentMeta, ComponentStory } from "@storybook/react";

import { CharacterModal } from ".";

export default {
  title: "Layouts/CharacterModal",
  component: CharacterModal,
} as ComponentMeta<typeof CharacterModal>;

export const Default: ComponentStory<typeof CharacterModal> = (args) => (
  <CharacterModal {...args} />
);
