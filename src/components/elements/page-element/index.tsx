import { Dispatch, SetStateAction } from "react";

import * as S from "./styles";

interface IPageElement {
  setCurrent?: Dispatch<SetStateAction<number>>;
  children: string | number;
  isValid?: boolean;
  className?: string;
}
export const PageElement = (props: IPageElement) => {
  const { setCurrent, children, isValid = true, className } = props;
  return (
    <S.Wrapper
      isValid={isValid}
      className={className}
      onClick={() => isValid && setCurrent(Number(children))}
    >
      {children}
    </S.Wrapper>
  );
};
