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

    ${isLoading
      ? css`
          pointer-events: none;

          background: linear-gradient(
            -90deg,
            #e7edd145 0%,
            #f8f8f800 50%,
            #e7edf138 100%
          );

          background-size: 400% 400%;
          animation: shimmer-effect 1.5s ease-in-out infinite;

          @keyframes shimmer-effect {
            0% {
              background-position: 0% 0%;
            }

            100% {
              background-position: -135% 0%;
            }
          }
        `
      : theme.animations.hoverFocus()}
  `}
`;
