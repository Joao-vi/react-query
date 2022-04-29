import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useEffect, useReducer, useState } from "react";

import { FilterElement } from ".";

export default {
  title: "Elements/FilterElement",
  component: FilterElement,
} as ComponentMeta<typeof FilterElement>;

export const Default: ComponentStory<typeof FilterElement> = (args) => {
  const [status, setStatus] = useState("");
  const [isLoading, toggleIsLoading] = useReducer((state) => !state, false);

  useEffect(() => {
    toggleIsLoading();

    const handler = setTimeout(() => {
      toggleIsLoading();
    }, 500);

    return () => clearTimeout(handler);
  }, [status]);

  return <FilterElement {...args} isLoading={isLoading} />;
};

Default.args = {
  children: "Alive",
};
