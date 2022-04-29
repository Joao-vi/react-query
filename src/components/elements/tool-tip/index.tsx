import React from "react";
import * as S from "./styles";

export interface IToolTip {
  children: JSX.Element | React.ReactNode;
  label: string;
  placement?: "top" | "bottom" | "left" | "right";
  shouldActive?: boolean;
}
export const ToolTip = ({
  children,
  label,
  placement = "bottom",
  shouldActive = true,
}: IToolTip) => {
  return (
    <S.Wrapper placement={placement}>
      {children}
      {shouldActive && (
        <S.Content placement={placement}>
          <span>{label}</span>
        </S.Content>
      )}
    </S.Wrapper>
  );
};
