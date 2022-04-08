import { Dispatch, SetStateAction } from "react";
import * as S from "./styles";

interface IFilterElement {
  isLoading: boolean;
  children: string;
  value: string;
  setData: Dispatch<SetStateAction<string>>;
  data: string;
}

export const FilterElement = (props: IFilterElement) => {
  const { children, isLoading, value, setData, data } = props;
  return (
    <S.Wrapper
      onClick={() => setData((state) => (state === value ? null : value))}
      isSelected={data === value}
      isLoading={isLoading}
    >
      <span>{children}</span>
    </S.Wrapper>
  );
};
