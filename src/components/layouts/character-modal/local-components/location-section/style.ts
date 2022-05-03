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

export const LoadMore = styled.button`
  ${({ theme }) => css`
    cursor: pointer;
    text-align: center;
    flex: 1;

    padding: 1rem;
    border-radius: 0.5rem;

    background-color: ${theme.colors.black900};

    ${theme.animations.hoverFocus()};
  `}
`;
