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

  return (
    <div style={{ display: "flex", gap: "2rem" }}>
      <FilterElement
        isLoading={isLoading}
        isSelected={status === "Alive"}
        onClick={() => setStatus("Alive")}
      >
        Alive
      </FilterElement>
      <FilterElement
        isLoading={isLoading}
        isSelected={status === "Dead"}
        onClick={() => setStatus("Dead")}
      >
        Dead
      </FilterElement>
      <FilterElement
        isLoading={isLoading}
        isSelected={status === "Unknown"}
        onClick={() => setStatus("Unknown")}
      >
        Unknown
      </FilterElement>
    </div>
  );
};
