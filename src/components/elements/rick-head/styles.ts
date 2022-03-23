import styled, { css } from "styled-components";

export const Image = styled.img`
  ${({ theme }) => css`
    width: 20rem;

    filter: ${theme.shadows.dropShadow};

    animation: bounce 5s ease infinite alternate;

    @keyframes bounce {
      0% {
        transform: translate(0px, 0px) scale(0.9);
      }
      25% {
        transform: translate(2px, 0px) scale(0.9);
      }
      50% {
        transform: translate(0px, -5px) scale(1);
      }
      75% {
        transform: translate(-2px, 0px) scale(0.9);
      }
      100% {
        transform: translate(0px, 0px) scale(0.9);
      }
    }
  `}
`;
