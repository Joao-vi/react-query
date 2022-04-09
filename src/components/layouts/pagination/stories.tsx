import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";

import { Pagination } from ".";

export default {
  title: "Layouts/Pagination",
  component: Pagination,
} as ComponentMeta<typeof Pagination>;

export const Default: ComponentStory<typeof Pagination> = (args) => {
  const [current, setCurrent] = useState(1);
  return <Pagination {...args} current={current} setCurrent={setCurrent} />;
};

Default.args = {
  pages: 20,
  sibling: 5,
};
