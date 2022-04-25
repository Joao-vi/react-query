import styled, { css } from "styled-components";

import { IFilterElement } from ".";

type IWrapper = Omit<IFilterElement, "onClick" | "isDisable" | "children">;
export const Wrapper = styled.button<IWrapper>`
  ${({ theme, isSelected, isLoading, bgColor, bgColorSelected }) => css`
    cursor: pointer;
    user-select: none;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 1rem 4rem;

    border-radius: 4px;

    background-color: ${isSelected
      ? theme.colors[bgColorSelected]
      : theme.colors[bgColor]};

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
