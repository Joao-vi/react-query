import styled, { css } from "styled-components";

export const SubSection = styled.h2`
  ${({ theme }) => css`
    grid-column-start: 1;
    grid-column-end: 3;
    justify-self: center;

    font-size: 1.8rem;
    font-weight: 700;
    color: ${theme.colors.white200};
  `}
`;

export const ResidentsContainer = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  justify-self: stretch;

  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;
