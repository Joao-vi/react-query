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
