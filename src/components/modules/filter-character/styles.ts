import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  gap: 1.5rem;
`;

export const FilterGroup = styled.div`
  ${({ theme }) => css`
    flex: 1;

    position: relative;

    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 1rem;

    padding: 1.3rem 2rem;
    border: 1px dashed ${theme.colors.gray};
    border-radius: 4px;

    .title-group {
      position: absolute;
      left: 1rem;
      top: -1.2rem;

      padding: 0 0.3rem;

      background-color: ${theme.colors.black600};
    }
  `}
`;
