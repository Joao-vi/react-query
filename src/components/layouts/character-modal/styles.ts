import styled, { css } from "styled-components";

interface IWrapper {
  isOpen: boolean;
}

interface IContentContainer {
  isSelected: boolean;
}

export const Wrapper = styled.div<IWrapper>`
  ${({ theme, isOpen }) => css`
    display: flex;
    justify-content: center;
    position: relative;

    max-width: 60rem;
    max-height: 40rem;

    width: 100%;
    height: 100%;

    padding: 4rem 1rem 1rem 1rem;

    background-color: ${theme.colors.black500};
    border-radius: 1rem;

    transition: all 300ms cubic-bezier(0.5, -1, 0.1, 1.5);

    opacity: 0;
    pointer-events: none;
    transform: translateY(-10%);

    ${isOpen &&
    css`
      opacity: 1;
      pointer-events: all;
      transform: translateY(0);
    `}

    @media (max-width: 455px) {
      max-height: 46rem;
    }
  `}
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 8.6rem 2rem 1rem 2rem;

  transition: background-color 200ms ease;
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

export const Name = styled.h1`
  font-size: 3rem;
`;

export const Header = styled.header`
  width: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ContentContainer = styled.main<IContentContainer>`
  ${({ isSelected }) => css`
    width: 100%;
    height: 100%;

    grid-template-columns: repeat(2, minmax(15.5rem, 20rem));
    justify-content: center;
    gap: 1rem;

    overflow: auto;
    padding: 1rem 0rem;

    opacity: 0;
    transform: translateY(-10%);
    display: none;

    @keyframes showUpAnimation {
      100% {
        opacity: 1;
        transform: translateY(0%);
      }
    }

    ${isSelected &&
    css`
      display: grid;
      animation: showUpAnimation 300ms cubic-bezier(0, 0, 0.5, 2) forwards;
    `}
  `}
`;

export const Body = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
