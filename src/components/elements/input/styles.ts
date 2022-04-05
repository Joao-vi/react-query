import styled, { css } from "styled-components";

import { InputProps } from ".";

type IWrapperIcon = Pick<InputProps, "iconPlacement" | "hasIcon">;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    cursor: text;
    position: relative;

    width: 100%;
    max-width: 35rem;

    display: flex;

    border-radius: 4px;
    padding: 1rem;

    background-color: ${theme.colors.black500};

    ${theme.animations.hoverFocus()};

    box-shadow: inset 0 0 0px 1px #fbd38db0, 0px 0px 0px 0px #fbd38d36;
  `}
`;

const padding = {
  left: () => css`
    padding-left: 2.5rem;
  `,
  right: () => css`
    padding-right: 2.2rem;
  `,
};

export const Input = styled.input<IWrapperIcon>`
  ${({ iconPlacement, hasIcon }) => css`
    width: 100%;

    ${hasIcon && padding[iconPlacement]};
  `}
`;

const placements = {
  left: () => css`
    left: 0;

    ${Input} {
      padding-left: 2.2rem;
    }
  `,
  right: () => css`
    right: 0;

    ${Input} {
      padding-right: 2.2rem;
    }
  `,
};

export const WrapperIcon = styled.div<IWrapperIcon>`
  ${({ theme, iconPlacement }) => css`
    position: absolute;
    bottom: 0;
    top: 0;

    display: flex;
    align-items: center;
    padding: 0 1rem;

    font-size: ${theme.font.sizes.lg};
    ${placements[iconPlacement]};
  `}
`;
