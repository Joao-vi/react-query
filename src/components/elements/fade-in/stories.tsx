import { ComponentMeta, ComponentStory } from "@storybook/react";

import { FadeIn } from ".";

export default {
  title: "Elements/FadeIn",
  component: FadeIn,
} as ComponentMeta<typeof FadeIn>;

export const Default: ComponentStory<typeof FadeIn> = (args) => (
  <FadeIn {...args} />
);
