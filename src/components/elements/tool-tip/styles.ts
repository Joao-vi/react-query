import styled, { css } from "styled-components";

import { IToolTip } from ".";

const placements = {
  bottom: (state: "show" | "hidden") => css`
    top: ${state === "show" ? "110%" : "90%"};
  `,
  top: (state: "show" | "hidden") => css`
    bottom: ${state === "show" ? "110%" : "90%"};
  `,
  right: (state: "show" | "hidden") => css`
    left: ${state === "show" ? "110%" : "90%"};
  `,
  left: (state: "show" | "hidden") => css`
    right: ${state === "show" ? "110%" : "90%"};
  `,
};

type TProps = {
  placement: IToolTip["placement"];
};

export const Content = styled.div<TProps>`
  ${({ theme, placement }) => css`
    z-index: 2;
    position: absolute;

    width: max-content;
    padding: 0.5rem 1rem;

    color: ${theme.colors.white200};

    background-color: ${theme.colors.black900};

    border-radius: 0.5rem;
    box-shadow: ${theme.shadows.sm};
    border: 1px solid ${theme.colors.white50};

    transition: all 300ms cubic-bezier(0.5, -1, 0.1, 1.5);

    ${placements[placement]("hidden")};
    opacity: 0;
    pointer-events: none;
  `}
`;
export const PositionContent = styled.div<TProps>`
  ${({ placement }) => css`
    position: absolute;
    inset: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      ${Content} {
        ${placements[placement]("show")};
        opacity: 1;
        pointer-events: all;
      }
    }
  `}
`;
