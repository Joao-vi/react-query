import { ComponentMeta, ComponentStory } from "@storybook/react";

import { FilterCharacter } from ".";

export default {
  title: "Modules/FilterCharacter",
  component: FilterCharacter,
} as ComponentMeta<typeof FilterCharacter>;

export const Default: ComponentStory<typeof FilterCharacter> = (args) => (
  <FilterCharacter {...args} />
);
