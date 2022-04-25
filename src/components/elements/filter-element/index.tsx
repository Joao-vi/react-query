import { Colors } from "types/styled-components";
import * as S from "./styles";

export interface IFilterElement {
  isLoading?: boolean;
  isDisable?: boolean;
  children: string;
  isSelected: boolean;
  bgColor?: Colors;
  bgColorSelected?: Colors;
  onClick: () => void;
}

export const FilterElement = (props: IFilterElement) => {
  const {
    children,
    isSelected,
    isLoading = false,
    isDisable = false,
    bgColor = "black500",
    bgColorSelected = "orange",
    onClick,
  } = props;
  return (
    <S.Wrapper
      bgColor={bgColor}
      bgColorSelected={bgColorSelected}
      disabled={isDisable}
      onClick={isDisable ? undefined : onClick}
      isSelected={isSelected}
      isLoading={isLoading}
    >
      <span>{children}</span>
    </S.Wrapper>
  );
};
