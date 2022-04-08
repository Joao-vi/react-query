import { ComponentMeta, ComponentStory } from "@storybook/react";
import { IoSearchOutline } from "react-icons/io5";

import { Input } from ".";

export default {
  title: "elements/Input",
  component: Input,
  argTypes: {
    iconPlacement: {
      options: ["left", "right"],
      control: "radio",
    },
    hasIcon: {
      type: "boolean",
    },
  },
} as ComponentMeta<typeof Input>;

export const Default: ComponentStory<typeof Input> = (args) => (
  <Input {...args} />
);

Default.args = {
  Icon: IoSearchOutline,
  placeholder: "Search for character",
};
