import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 35rem;
    height: 16rem;

    display: flex;

    border-radius: 10px;
    box-shadow: ${theme.shadows.sm};

    overflow: hidden;

    background-color: ${theme.colors.cardBg};

    animation: shimmer 1.5s cubic-bezier(0, 0.82, 0.58, 1) infinite;

    @keyframes shimmer {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  `}
`;

export const Img = styled.div`
  width: 125px;

  object-fit: cover;
`;

export const Content = styled.div`
  flex: 1 1 0%;
  align-self: flex-start;

  padding: 10px;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  > .name {
    width: 80%;
    height: 1.6rem;
  }

  > .status {
    width: 50%;
    height: 1rem;
  }

  > .where-title {
    margin-top: 1.5rem;
    width: 70%;
    height: 1.3rem;
  }

  > .where {
    width: 50%;
    height: 1.2rem;
  }

  > .episode-title {
    margin-top: 1rem;

    width: 70%;
    height: 1.3rem;
  }

  > .episode {
    width: 50%;
    height: 1.2rem;
  }
`;

export const Skeleton = styled.div`
  background: linear-gradient(
    -90deg,
    rgb(231 237 209 / 70%) 0%,
    #e7edd14d 50%,
    rgb(231 237 209 / 70%) 100%
  );

  border-radius: 4px;

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
`;
