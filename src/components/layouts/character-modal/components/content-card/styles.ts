import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  gap: 0.5rem;
  height: min-content;
`;

export const Label = styled.h2`
  ${({ theme }) => css`
    font-size: 1.6rem;
    font-weight: 700;
    color: ${theme.colors.gray};
  `}
`;

export const Content = styled.span`
  ${({ theme }) => css`
    text-align: center;

    width: 100%;
    height: 100%;

    border-radius: 1rem;
    padding: 1.5rem 0rem;

    font-size: 1.7rem;
    background-color: ${theme.colors.black600};
    color: ${theme.colors.white200};
  `}
`;
