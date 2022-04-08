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
          value="alive"
          data={status}
          setData={setStatus}
        >
          Alive
        </FilterElement>

        <FilterElement
          isLoading={isLoading}
          value="dead"
          data={status}
          setData={setStatus}
        >
          Dead
        </FilterElement>
        <FilterElement
          isLoading={isLoading}
          value="unknown"
          data={status}
          setData={setStatus}
        >
          Unknown
        </FilterElement>
      </S.FilterGroup>

      <S.FilterGroup>
        <span className="title-group">Gender</span>

        <FilterElement
          isLoading={isLoading}
          value="female"
          data={gender}
          setData={setGender}
        >
          Female
        </FilterElement>

        <FilterElement
          isLoading={isLoading}
          value="male"
          data={gender}
          setData={setGender}
        >
          Male
        </FilterElement>

        <FilterElement
          isLoading={isLoading}
          value="genderless"
          data={gender}
          setData={setGender}
        >
          Genderless
        </FilterElement>
      </S.FilterGroup>
    </S.Wrapper>
  );
};
