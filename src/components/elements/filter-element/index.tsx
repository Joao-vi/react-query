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
  style?: Record<string, string>;
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
    style,
  } = props;
  return (
    <S.Wrapper
      style={style}
      bgColor={bgColor}
      bgColorSelected={bgColorSelected}
      disabled={isDisable}
      onClick={isDisable ? undefined : onClick}
      isSelected={isSelected}
      isLoading={isLoading}
    >
      {children}
    </S.Wrapper>
  );
};
