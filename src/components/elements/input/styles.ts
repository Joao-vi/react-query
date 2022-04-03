import styled, { css } from "styled-components";

export const Wrapper = styled.input`
  ${({ theme }) => css`
    width: 25rem;

    border-radius: 4px;
    padding: 1rem;

    box-shadow: inset 0 0 0px 1px #fbd38db0;

    background-color: ${theme.colors.black500};

    transition: box-shadow 100ms ease-in-out;

    &:hover {
      box-shadow: inset 0 0 0px 2px #fbd38db0;
    }

    &:focus {
      box-shadow: 0px 0px 0px 4px #fbd38d36, inset 0 0 0px 2px #fbd38db0;
    }
  `}
`;
