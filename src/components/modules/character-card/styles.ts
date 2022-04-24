import styled, { css } from "styled-components";

interface IStatus {
  status: string;
}

export const Wrapper = styled.div`
  ${({ theme }) => css`
    cursor: pointer;

    width: 43rem;
    height: 16rem;

    display: flex;

    border-radius: 1rem;
    box-shadow: ${theme.shadows.sm};

    overflow: hidden;

    background-color: ${theme.colors.black500};

    animation: fade-in-animation 200ms ease-in-out forwards;

    @keyframes fade-in-animation {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    transition: all 200ms ease;

    &:hover {
      transform: translateY(-0.4rem);
      box-shadow: 0px 4px 11px -5px ${theme.colors.orange};
    }
  `}
`;

export const Img = styled.img`
  width: 150px;

  object-fit: cover;
`;

export const Content = styled.div`
  ${({ theme }) => css`
    height: 100%;

    flex: 1 1 0%;
    align-self: flex-start;

    padding: 10px 0px 10px 12px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;

    span {
      font-size: ${theme.font.sizes.sm};
      font-weight: ${theme.font.weights[300]};
    }
  `}
`;

export const Status = styled.div<IStatus>`
  display: flex;
  align-items: center;
  gap: 0.4rem;

  > .indicator {
    width: 1rem;
    height: 1rem;

    border-radius: 50%;

    &.Alive {
      background-color: green;
    }
    &.Dead {
      background-color: red;
    }
    &.unknown {
      background-color: gray;
    }
  }

  span {
    font-size: 1.5rem;
    font-weight: 500;
  }
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: 2.2rem;
    font-weight: ${theme.font.weights[700]};
  `}
`;

export const SubTitle = styled.h2`
  ${({ theme }) => css`
    font-size: 1.5rem;
    font-weight: ${theme.font.weights[700]};
    color: ${theme.colors.gray};
  `}
`;
