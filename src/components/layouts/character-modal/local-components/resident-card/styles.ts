import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: min-content;

    display: flex;
    align-items: center;
    gap: 1rem;

    padding: 0.5rem 1rem;

    background-color: ${theme.colors.black600};
    border-radius: 1rem;
  `}
`;

export const Avatar = styled.img`
  border-radius: 50%;
  width: 60px;
`;

export const Name = styled.span`
  font-size: 1.7rem;
`;

export const Label = styled.h2`
  ${({ theme }) => css`
    font-size: 1.5rem;
    font-weight: 700;
    color: ${theme.colors.gray};
  `}
`;

export const Info = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
