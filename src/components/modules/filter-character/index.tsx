import { FilterElement } from "components/elements";
import { Dispatch, SetStateAction } from "react";
import { IFilterCharacter } from "types/rick-morty-api";
import * as S from "./styles";

export interface IFilterGroup {
  title: string;
  key: string;
  options: { label: string; value: string }[];
}
interface FilterCharacterProps {
  isLoading: boolean;
  filter: IFilterCharacter;
  setFilter: Dispatch<IFilterCharacter>;
  filterGroups: IFilterGroup[];
}

export const FilterCharacter = (props: FilterCharacterProps) => {
  const { isLoading, setFilter, filter, filterGroups } = props;

  return (
    <S.Wrapper>
      {filterGroups.map(({ title, key, options }) => (
        <S.FilterGroup key={title}>
          <span className="title-group">{title}</span>
          {options.map(({ value, label }) => (
            <FilterElement
              key={value}
              isLoading={isLoading}
              isSelected={value === filter[key]}
              onClick={() =>
                setFilter({ [key]: filter[key] === value ? null : value })
              }
            >
              {label}
            </FilterElement>
          ))}
        </S.FilterGroup>
      ))}
    </S.Wrapper>
  );
};
