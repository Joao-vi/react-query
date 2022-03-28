import styled, { css } from "styled-components";

export const Wrapper = styled.input`
  ${({ theme }) => css`
    width: 25rem;
    padding: 1rem;

    border-radius: 4px;
    box-shadow: ${theme.shadows.sm}, inset 0 0 0 1px #fbd38d78;

    background-color: ${theme.colors.cardBg};

    transition: box-shadow 500ms cubic-bezier(0.5, -1, 0.1, 1.5);

    &:hover {
      box-shadow: ${theme.shadows.sm}, inset 0 0 0px 2px #fbd38db0;
    }

    &:focus {
      box-shadow: 0px 0px 0px 4px #fbd38d36, inset 0 0 0px 2px #fbd38db0;
    }
  `}
`;
