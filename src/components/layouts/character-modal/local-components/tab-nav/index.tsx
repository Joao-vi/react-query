import * as S from "./styles";
import { Dispatch, SetStateAction } from "react";

import { FilterElement } from "components/elements";

interface ITabNav {
  currentIndex: number;
  setCurrentIndex: Dispatch<SetStateAction<number>>;
}

const sections = [
  {
    label: "Info",
    value: 0,
  },
  {
    label: "Location",
    value: 1,
  },
];

export const TabNav = ({ currentIndex, setCurrentIndex }: ITabNav) => {
  return (
    <S.Wrapper>
      {sections.map(({ label, value }) => (
        <FilterElement
          bgColor="black600"
          key={value}
          isSelected={value === currentIndex}
          onClick={() => setCurrentIndex(value)}
          style={{ padding: "1rem 2rem" }}
        >
          {label}
        </FilterElement>
      ))}
    </S.Wrapper>
  );
};
