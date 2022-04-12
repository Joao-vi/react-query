import { Dispatch, SetStateAction } from "react";
import { IFilterCharacter } from "types/rick-morty-api";

import * as S from "./styles";

interface IPageElement {
  setFilter?: Dispatch<
    IFilterCharacter | ((state: IFilterCharacter) => IFilterCharacter)
  >;
  children: string | number;
  isValid?: boolean;
  className?: string;
}
export const PageElement = (props: IPageElement) => {
  const { setFilter, children, isValid = true, className } = props;
  return (
    <S.Wrapper
      isValid={isValid}
      className={className}
      onClick={() => isValid && setFilter({ page: Number(children) })}
    >
      {children}
    </S.Wrapper>
  );
};
