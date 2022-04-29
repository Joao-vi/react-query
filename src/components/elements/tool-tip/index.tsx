import React from "react";
import * as S from "./styles";

interface IToolTip {
  children: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  label: string;
}
export const ToolTip = ({ children, label }: IToolTip) => {
  return (
    <S.Wrapper>
      {children}
      <S.Content>
        <span>{label}</span>
      </S.Content>
    </S.Wrapper>
  );
};
