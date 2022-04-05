import styled, { css } from "styled-components";

export const Wrapper = styled.input`
  ${({ theme }) => css`
    width: 25rem;

    border-radius: 4px;
    padding: 1rem;

    background-color: ${theme.colors.black500};

    ${theme.animations.hoverFocus()};

    box-shadow: inset 0 0 0px 1px #fbd38db0, 0px 0px 0px 0px #fbd38d36;
  `}
`;
