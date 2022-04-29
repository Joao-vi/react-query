import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ToolTip, IToolTip } from ".";

export default {
  title: "Elements/ToolTip",
  component: ToolTip,
  argTypes: {
    placement: {
      options: ["bottom", "top", "left", "right"],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof ToolTip>;

export const Default: ComponentStory<typeof ToolTip> = (args) => (
  <ToolTip {...args} />
);

Default.args = {
  label: "Hey there",
  children: "Hover me",
};
