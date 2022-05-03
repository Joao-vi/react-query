import styled, { css } from "styled-components";

import { Wrapper as PageElement } from "components/elements/page-element/styles";

type IArrow = {
  isLoading: boolean;
};
export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 80rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 1rem;
    border-radius: 1rem;
    border: 1px solid ${theme.colors.white50};

    box-shadow: ${theme.shadows.sm};

    background-color: ${theme.colors.black600};
  `}
`;

export const Content = styled.div<IArrow>`
  ${({ theme, isLoading }) => css`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 1rem;

    ${PageElement} {
      ${isLoading && theme.animations.isLoading()}
    }
  `}
`;

export const Arrow = styled.button<IArrow>`
  ${({ theme, isLoading }) => css`
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 4rem;
    height: 4rem;

    padding: 1rem;

    border-radius: 1rem;
    background-color: ${theme.colors.black500};

    transition: background-color 100ms ease;

    &:disabled {
      opacity: 0.5;
      pointer-events: none;
    }

    &:active {
      background-color: ${theme.colors.orange};
    }

    ${isLoading ? theme.animations.isLoading() : theme.animations.hoverFocus()}

    > svg {
      font-size: 1.8rem;
    }
  `}
`;
