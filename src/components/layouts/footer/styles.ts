import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  margin-top: auto;
  height: max-content;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  padding: 1rem;
  border-top: 1px #7c7d813d solid;
`;

export const Text = styled.span`
  ${({ theme }) => css`
    font-size: 1.6rem;

    color: ${theme.colors.gray};

    .name {
      color: ${theme.colors.orange};
      font-weight: ${theme.font.weights[300]};
    }
  `}
`;

export const SocialMedias = styled.div`
  display: flex;
  gap: 1rem;
`;

export const SocialElement = styled.a`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 4rem;
    height: 4rem;

    border-radius: 1rem;
    background-color: ${theme.colors.black500};

    ${theme.animations.hoverFocus()};

    > svg {
      color: ${theme.colors.white200};
    }
  `}
`;
