import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 1rem;

    padding: 1rem;
    border-radius: 1rem;

    box-shadow: ${theme.shadows.sm};

    background-color: ${theme.colors.black600};
  `}
`;

export const Page = styled.button`
  ${({ theme }) => css`
    cursor: pointer;
    width: 4rem;
    height: 4rem;

    padding: 1rem;

    border-radius: 1rem;
    background-color: ${theme.colors.black500};

    &.current {
      background-color: ${theme.colors.orange};
    }
    ${theme.animations.hoverFocus()};
  `}
`;
