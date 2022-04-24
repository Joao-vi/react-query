import styled, { css } from "styled-components";

interface IWrapper {
  isSelected: boolean;
  isLoading: boolean;
}
export const Wrapper = styled.button<IWrapper>`
  ${({ theme, isSelected, isLoading }) => css`
    cursor: pointer;
    user-select: none;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 1rem 4rem;

    border-radius: 4px;

    background-color: ${isSelected
      ? theme.colors.orange
      : theme.colors.black500};

    > span {
      font-weight: ${theme.font.weights[500]};
    }

    &:disabled {
      background: linear-gradient(
        -90deg,
        #e7edd145 0%,
        #f8f8f861 50%,
        #e7edf138 100%
      );
    }

    ${isLoading ? theme.animations.isLoading() : theme.animations.hoverFocus()}
  `}
`;
