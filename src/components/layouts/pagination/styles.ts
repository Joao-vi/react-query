import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 80rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 1rem;
    border-radius: 1rem;

    box-shadow: ${theme.shadows.sm};

    background-color: ${theme.colors.black600};
  `}
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 1rem;
`;
export const Arrow = styled.button`
  ${({ theme }) => css`
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

    ${theme.animations.hoverFocus()};

    > svg {
      font-size: 1.8rem;
    }
  `}
`;
