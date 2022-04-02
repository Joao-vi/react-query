import styled, { css } from "styled-components";

interface IStatus {
  status: string;
}

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 43rem;
    height: 18rem;

    display: flex;

    border-radius: 1rem;
    box-shadow: ${theme.shadows.sm};

    overflow: hidden;

    background-color: ${theme.colors.black500};
  `}
`;

export const Img = styled.img`
  width: 150px;

  object-fit: cover;
`;

export const Content = styled.div`
  ${({ theme }) => css`
    flex: 1 1 0%;
    align-self: flex-start;

    padding: 10px 0px 10px 12px;

    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    span {
      font-size: ${theme.font.sizes.sm};
      font-weight: ${theme.font.weights[400]};
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
    font-size: ${theme.font.sizes.lg};
    font-weight: ${theme.font.weights[700]};
  `}
`;

export const SubTitle = styled.h2`
  ${({ theme }) => css`
    font-size: 1.5rem;
    font-weight: ${theme.font.weights[500]};
    color: ${theme.colors.gray};
  `}
`;
