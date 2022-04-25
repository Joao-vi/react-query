import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;

    position: relative;

    max-width: 60rem;
    max-height: 40rem;

    width: 100%;
    height: 100%;

    padding: 4rem 0 1rem 0rem;

    background-color: ${theme.colors.black500};
    border-radius: 1rem;
  `}
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0 0 0 0;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 1rem 2rem;

  background-color: #000000b0;
`;

export const Avatar = styled.img`
  width: 100%;
  height: 100%;
`;

export const WrapperAvatar = styled.div`
  ${({ theme }) => css`
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: -10.5rem;

    overflow: hidden;
    border-radius: 50%;
    border: 10px solid #19191b;

    width: 15rem;
    height: 15rem;

    background-color: ${theme.colors.black500};

    transition: all 200ms ease;
    &:hover {
      border-radius: 10%;
    }
  `}
`;

export const Name = styled.h1``;
