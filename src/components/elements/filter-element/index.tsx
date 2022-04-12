import { Dispatch, SetStateAction } from "react";
import * as S from "./styles";

interface IFilterElement {
  isLoading: boolean;
  children: string;
  isSelected: boolean;
  onClick: () => void;
}

export const FilterElement = (props: IFilterElement) => {
  const { children, isLoading, isSelected, onClick } = props;
  return (
    <S.Wrapper onClick={onClick} isSelected={isSelected} isLoading={isLoading}>
      <span>{children}</span>
    </S.Wrapper>
  );
};
