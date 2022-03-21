// Button.stories.ts|tsx

import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import { NavBar } from ".";

export default {
  title: "NavBar",
  component: NavBar,
} as ComponentMeta<typeof NavBar>;

export const Default: ComponentStory<typeof NavBar> = (args) => (
  <NavBar {...args} />
);
