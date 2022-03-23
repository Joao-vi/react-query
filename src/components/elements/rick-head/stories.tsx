import { ComponentMeta, ComponentStory } from "@storybook/react";

import { RickHead } from ".";

export default {
  title: "Rick Image",
  component: RickHead,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof RickHead>;

export const Default: ComponentStory<typeof RickHead> = (args) => (
  <RickHead {...args} />
);
