import * as S from "./styles";

interface IFilterElement {
  isLoading: boolean;
  isSelected: boolean;
  children: string;
}
export const FilterElement = ({ children }: IFilterElement) => {
  return (
    <S.Wrapper>
      <span>{children}</span>
    </S.Wrapper>
  );
};
