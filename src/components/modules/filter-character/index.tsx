import { FilterElement } from "components/elements";
import { Dispatch, SetStateAction } from "react";
import * as S from "./styles";

interface IFilterCharacter {
  isLoading: boolean;
  isSelected: boolean;
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
}

export const FilterCharacter = (props: IFilterCharacter) => {
  const { isLoading, isSelected, selected, setSelected } = props;

  return (
    <S.Wrapper>
      <FilterElement
        isLoading
        isSelected={selected === "alive"}
        onClick={() => setSelected("alive")}
      >
        Alive
      </FilterElement>

      <FilterElement
        isLoading
        isSelected={selected === "dead"}
        onClick={() => setSelected("dead")}
      >
        Dead
      </FilterElement>
      <FilterElement
        isLoading
        isSelected={selected === "unknown"}
        onClick={() => setSelected("unknown")}
      >
        Unknown
      </FilterElement>
      <FilterElement
        isLoading
        isSelected={selected === "female"}
        onClick={() => setSelected("female")}
      >
        Female
      </FilterElement>
      <FilterElement
        isLoading
        isSelected={selected === "male"}
        onClick={() => setSelected("male")}
      >
        Male
      </FilterElement>
      <FilterElement
        isLoading
        isSelected={selected === "genderless"}
        onClick={() => setSelected("genderless")}
      >
        Genderless
      </FilterElement>
    </S.Wrapper>
  );
};
