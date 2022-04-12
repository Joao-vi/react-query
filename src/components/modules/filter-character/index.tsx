import { FilterElement } from "components/elements";
import { Dispatch, SetStateAction } from "react";
import { IFilterCharacter } from "types/rick-morty-api";
import * as S from "./styles";

interface FilterCharacterProps {
  isLoading: boolean;
  filter: Omit<IFilterCharacter, "type" | "species">;
  setFilter: Dispatch<any>;
}

export const FilterCharacter = (props: FilterCharacterProps) => {
  const { isLoading, setFilter, filter } = props;

  return (
    <S.Wrapper>
      <S.FilterGroup>
        <span className="title-group">Status</span>
        <FilterElement
          isLoading={isLoading}
          onClick={() =>
            setFilter(({ status }) => ({
              status: status === "alive" ? null : "alive",
            }))
          }
          isSelected={filter.status === "alive"}
        >
          Alive
        </FilterElement>

        <FilterElement
          isLoading={isLoading}
          onClick={() =>
            setFilter(({ status }) => ({
              status: status === "dead" ? null : "dead",
            }))
          }
          isSelected={filter.status === "dead"}
        >
          Dead
        </FilterElement>
        <FilterElement
          isLoading={isLoading}
          onClick={() =>
            setFilter(({ status }) => ({
              status: status === "unknown" ? null : "unknown",
            }))
          }
          isSelected={filter.status === "unknown"}
        >
          Unknown
        </FilterElement>
      </S.FilterGroup>

      <S.FilterGroup>
        <span className="title-group">Gender</span>

        <FilterElement
          isLoading={isLoading}
          onClick={() =>
            setFilter(({ gender }) => ({
              gender: gender === "female" ? null : "female",
            }))
          }
          isSelected={filter.gender === "female"}
        >
          Female
        </FilterElement>

        <FilterElement
          isLoading={isLoading}
          onClick={() =>
            setFilter(({ gender }) => ({
              gender: gender === "male" ? null : "male",
            }))
          }
          isSelected={filter.gender === "male"}
        >
          Male
        </FilterElement>

        <FilterElement
          isLoading={isLoading}
          onClick={() =>
            setFilter(({ gender }) => ({
              gender: gender === "genderless" ? null : "genderless",
            }))
          }
          isSelected={filter.gender === "genderless"}
        >
          Genderless
        </FilterElement>
      </S.FilterGroup>
    </S.Wrapper>
  );
};
