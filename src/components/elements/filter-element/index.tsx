import * as S from "./styles";

interface IFilterElement {
  isLoading: boolean;
  isSelected: boolean;
  children: string;
  onClick: () => void;
}
export const FilterElement = (props: IFilterElement) => {
  const { children, onClick, isSelected, isLoading } = props;
  return (
    <S.Wrapper onClick={onClick} isSelected={isSelected} isLoading={isLoading}>
      <span>{children}</span>
    </S.Wrapper>
  );
};
