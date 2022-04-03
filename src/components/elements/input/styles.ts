import styled, { css } from "styled-components";

export const Wrapper = styled.input`
  ${({ theme }) => css`
    width: 25rem;

    border-radius: 4px;
    padding: 1rem;

    box-shadow: inset 0 0 0px 1px #fbd38db0;

    background-color: ${theme.colors.black500};

    ${theme.animations.hoverFocus()};
  `}
`;
