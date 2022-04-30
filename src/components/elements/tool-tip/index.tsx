import React from "react";
import * as S from "./styles";

export interface IToolTip {
  label: string;
  placement?: "top" | "bottom" | "left" | "right";
  shouldActive?: boolean;
  style?: React.CSSProperties;
}
export const ToolTip = (props: IToolTip) => {
  const { label, style, placement = "bottom", shouldActive = true } = props;
  return (
    <S.PositionContent placement={placement}>
      {shouldActive && (
        <S.Content style={style} placement={placement}>
          <span>{label}</span>
        </S.Content>
      )}
    </S.PositionContent>
  );
};
