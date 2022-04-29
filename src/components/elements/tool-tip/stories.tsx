import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ToolTip } from ".";

export default {
  title: "Elements/ToolTip",
  component: ToolTip,
} as ComponentMeta<typeof ToolTip>;

export const Default: ComponentStory<typeof ToolTip> = (args) => (
  <ToolTip {...args} />
);
