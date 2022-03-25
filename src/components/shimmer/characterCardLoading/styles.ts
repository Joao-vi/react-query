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

  span {
    font-size: 1.5rem;
    font-weight: normal;
  }
`;
