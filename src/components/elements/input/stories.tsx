import { ComponentMeta, ComponentStory } from "@storybook/react";
import { IoSearchOutline } from "react-icons/io5";

import { Input } from ".";

export default {
  title: "elements/Input",
  component: Input,
  parameters: {},
} as ComponentMeta<typeof Input>;

export const Default: ComponentStory<typeof Input> = (args) => (
  <Input {...args} />
);

Default.args = {
  hasIcon: true,
  Icon: IoSearchOutline,
  iconPlacement: "left",
  placeHolder: "Search for character",
};
