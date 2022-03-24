import styled, { css } from "styled-components";

interface IStatus {
  status: string;
}

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 35rem;
    height: 16rem;

    display: flex;

    border-radius: 10px;
    box-shadow: ${theme.shadows.sm};

    overflow: hidden;

    background-color: ${theme.colors.cardBg};
  `}
`;

export const Img = styled.img`
  width: 125px;

  object-fit: cover;
`;

export const Content = styled.div`
  ${({ theme }) => css`
    flex: 1 1 0%;
    align-self: flex-start;

    padding: 10px;

    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    span {
      font-size: 1.5rem;
      font-weight: normal;
    }
  `}
`;

const statusModifeirs = {
  Alive: () => css`
    background-color: green;
  `,
  Dead: () => css`
    background-color: red;
  `,
  unknown: () => css`
    background-color: gray;
  `,
};

export const Status = styled.div<IStatus>`
  ${({ status }) => css`
    display: flex;
    align-items: center;
    gap: 4px;

    > .indicator {
      width: 10px;
      height: 10px;

      border-radius: 50%;

      ${statusModifeirs[status]}
    }

    > span {
      font-size: 1.2rem;
      font-weight: bold;
    }
  `}
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 800;
`;

export const SubTitle = styled.h2`
  ${({ theme }) => css`
    font-size: 1.4rem;
    font-weight: bolder;
    color: ${theme.colors.gray};
  `}
`;
