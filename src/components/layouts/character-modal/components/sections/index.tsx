import * as S from "./styles";

import { FilterElement } from "components/elements";
import { Dispatch, SetStateAction, useState } from "react";

interface ISections {
  currentSection: string;
  setCurrentSection: Dispatch<SetStateAction<String>>;
}

const sections = [
  {
    label: "Info",
    value: "info",
  },
  {
    label: "Location",
    value: "location",
  },
  {
    label: "Episodeos",
    value: "episodeos",
  },
];

export const Sections = ({ currentSection, setCurrentSection }: ISections) => {
  return (
    <S.Wrapper>
      {sections.map(({ label, value }) => (
        <FilterElement
          bgColor="black600"
          key={value}
          isSelected={value === currentSection}
          onClick={() => setCurrentSection(value)}
        >
          {label}
        </FilterElement>
      ))}
    </S.Wrapper>
  );
};
