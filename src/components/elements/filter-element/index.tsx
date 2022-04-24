import { Dispatch, SetStateAction } from "react";
import * as S from "./styles";

interface IFilterElement {
  isLoading: boolean;
  isDisable?: boolean;
  children: string;
  isSelected: boolean;
  onClick: () => void;
}

export const FilterElement = (props: IFilterElement) => {
  const { children, isLoading, isSelected, isDisable = false, onClick } = props;
  return (
    <S.Wrapper
      disabled={isDisable}
      onClick={isDisable ? undefined : onClick}
      isSelected={isSelected}
      isLoading={isLoading}
    >
      <span>{children}</span>
    </S.Wrapper>
  );
};
