import styled, { css } from "styled-components";

export const Wrapper = styled.nav`
  position: fixed;

  height: 8rem;
  width: 100%;
  backdrop-filter: blur(10px);
`;

export const Content = styled.div`
  max-width: 100rem;
  margin: 0 auto;

  display: flex;
  align-items: center;
  gap: 4rem;
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: 2rem;
    font-weight: bold;

    > span {
      color: ${theme.colors.orange};
    }
  `}
`;

export const Navigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  font-size: 1.6rem;
  font-weight: 400;
`;
