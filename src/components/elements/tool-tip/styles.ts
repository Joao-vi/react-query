import styled, { css } from "styled-components";

const placement = {
  bottom: () => css`
    top: 9;
  `,
};

export const Content = styled.div`
  ${({ theme }) => css`
    position: absolute;

    width: max-content;
    padding: 0.5rem 1rem;

    color: ${theme.colors.white200};

    background-color: ${theme.colors.black900};

    border-radius: 0.5rem;
    box-shadow: ${theme.shadows.sm};

    transition: all 300ms cubic-bezier(0.5, -1, 0.1, 1.5);

    top: 90%;
    opacity: 0;
    pointer-events: none;

    &:hover {
      pointer-events: all;
      top: 130%;
      opacity: 1;
    }
  `}
`;
export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;

  &:hover {
    ${Content} {
      top: 130%;
      opacity: 1;
      pointer-events: all;
    }
  }
`;
