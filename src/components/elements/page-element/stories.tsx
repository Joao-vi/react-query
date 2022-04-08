import { ComponentMeta, ComponentStory } from "@storybook/react";

import { PageElement } from ".";

export default {
  title: "Elements/PageElement",
  component: PageElement,
} as ComponentMeta<typeof PageElement>;

export const Default: ComponentStory<typeof PageElement> = (args) => (
  <PageElement {...args} />
);
