import { ComponentMeta, ComponentStory } from "@storybook/react";

import { FilterElement } from ".";

export default {
  title: "Elements/FilterElement",
  component: FilterElement,
} as ComponentMeta<typeof FilterElement>;

export const Default: ComponentStory<typeof FilterElement> = (args) => (
  <div style={{ display: "flex", gap: "2rem" }}>
    <FilterElement {...args}>Alive</FilterElement>
    <FilterElement {...args}>Dead</FilterElement>
    <FilterElement {...args}>Unknown</FilterElement>
  </div>
);
