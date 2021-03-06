import styled, { css } from "styled-components";

export const Wrapper = styled.nav`
  left: 0;
  right: 0;
  position: fixed;
  z-index: 999;

  backdrop-filter: blur(10px);
`;

export const Content = styled.div`
  padding: 1rem 2rem;
  max-width: 100rem;
  margin: 0 auto;

  display: flex;
  align-items: center;
  gap: 4rem;
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: 3rem;
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

  font-size: 1.7rem;
  font-weight: 400;
`;
