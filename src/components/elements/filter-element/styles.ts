import styled, { css } from "styled-components";

export const Wrapper = styled.button`
  ${({ theme }) => css`
    cursor: pointer;
    user-select: none;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 1rem 4rem;

    border-radius: 4px;
    box-shadow: ${theme.shadows.sm};

    background-color: ${theme.colors.black500};

    > span {
      font-weight: ${theme.font.weights[500]};
    }

    &:focus {
      border: 1px solid red;
    }
  `}
`;
