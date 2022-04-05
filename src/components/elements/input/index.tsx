import { InputHTMLAttributes } from "react";
import * as S from "./styles";

import { IconType } from "react-icons";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  value: string;
  onChange: () => void;
  placeHolder: string;
  iconPlacement?: "left" | "right";
  hasIcon?: boolean;
  Icon?: IconType;
}
export const Input = (props: InputProps) => {
  const {
    id,
    value,
    onChange,
    placeHolder,
    iconPlacement = "right",
    hasIcon = false,
    Icon,
    ...rest
  } = props;
  return (
    <S.Wrapper>
      {hasIcon && Icon && (
        <S.WrapperIcon iconPlacement={iconPlacement}>
          <Icon />
        </S.WrapperIcon>
      )}
      <S.Input
        hasIcon={hasIcon}
        iconPlacement={iconPlacement}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeHolder}
        {...rest}
      />
    </S.Wrapper>
  );
};
