import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Footer } from ".";

export default {
  title: "Layouts/Footer",
  component: Footer,
} as ComponentMeta<typeof Footer>;

export const Default: ComponentStory<typeof Footer> = (args) => (
  <Footer {...args} />
);
