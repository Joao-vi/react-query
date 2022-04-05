import { FilterElement } from "components/elements";
import { Dispatch, SetStateAction } from "react";
import * as S from "./styles";

interface IFilterCharacter {
  isLoading: boolean;
  status: string;
  setStatus: Dispatch<SetStateAction<string>>;
  gender: string;
  setGender: Dispatch<SetStateAction<string>>;
}

export const FilterCharacter = (props: IFilterCharacter) => {
  const { isLoading, status, setStatus, gender, setGender } = props;

  return (
    <S.Wrapper>
      <S.FilterGroup>
        <span className="title-group">Status</span>
        <FilterElement
          isLoading={isLoading}
          isSelected={status === "alive"}
          onClick={() => setStatus("alive")}
        >
          Alive
        </FilterElement>

        <FilterElement
          isLoading={isLoading}
          isSelected={status === "dead"}
          onClick={() => setStatus("dead")}
        >
          Dead
        </FilterElement>
        <FilterElement
          isLoading={isLoading}
          isSelected={status === "unknown"}
          onClick={() => setStatus("unknown")}
        >
          Unknown
        </FilterElement>
      </S.FilterGroup>

      <S.FilterGroup>
        <span className="title-group">Gender</span>
        <FilterElement
          isLoading={isLoading}
          isSelected={gender === "female"}
          onClick={() => setGender("female")}
        >
          Female
        </FilterElement>
        <FilterElement
          isLoading={isLoading}
          isSelected={gender === "male"}
          onClick={() => setGender("male")}
        >
          Male
        </FilterElement>
        <FilterElement
          isLoading={isLoading}
          isSelected={gender === "genderless"}
          onClick={() => setGender("genderless")}
        >
          Genderless
        </FilterElement>
      </S.FilterGroup>
    </S.Wrapper>
  );
};
