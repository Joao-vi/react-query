import * as S from "./style";

import { IInPortal, InPortal } from "..";
import { useEffect } from "react";

interface IOverlay {
  portalId: IInPortal["id"];
  isOpen: boolean;
  children: React.ReactNode;
}

export const Overlay = ({ isOpen, portalId, children }: IOverlay) => {
  const backgroundColor = isOpen ? "rgb(0 0 0 / 68%)" : "transparent";

  useEffect(() => {
    const body = document.querySelector("body");
    if (isOpen) {
      body.style.pointerEvents = "none";
    } else {
      body.style.pointerEvents = "all";
    }
  }, [isOpen]);

  return (
    <InPortal id={portalId}>
      <S.Overlay style={{ backgroundColor }}>{children}</S.Overlay>
    </InPortal>
  );
};
