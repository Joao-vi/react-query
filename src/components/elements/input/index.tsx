import { ChangeEventHandler, InputHTMLAttributes } from "react";
import * as S from "./styles";

import { IconType } from "react-icons";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  iconPlacement?: "left" | "right";
  hasIcon?: boolean;
  Icon?: IconType;
}
export const Input = (props: InputProps) => {
  const { iconPlacement = "right", hasIcon = false, Icon, ...rest } = props;
  return (
    <S.Wrapper>
      {hasIcon && Icon && (
        <S.WrapperIcon iconPlacement={iconPlacement}>
          <Icon />
        </S.WrapperIcon>
      )}
      <S.Input hasIcon={hasIcon} iconPlacement={iconPlacement} {...rest} />
    </S.Wrapper>
  );
};
