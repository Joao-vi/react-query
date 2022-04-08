import styled, { css } from "styled-components";

interface IWrapper {
  isValid: boolean;
}
export const Wrapper = styled.button<IWrapper>`
  ${({ theme, isValid }) => css`
    cursor: ${isValid ? "pointer" : "initial"};
    width: 4rem;
    height: 4rem;

    padding: 1rem;

    border-radius: 1rem;
    background-color: ${theme.colors.black500};

    &.current {
      background-color: ${theme.colors.orange};
    }

    ${isValid && theme.animations.hoverFocus()};
  `}
`;
