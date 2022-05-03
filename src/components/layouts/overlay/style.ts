import styled from "styled-components";

export const Overlay = styled.div`
  pointer-events: none;
  position: fixed;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 8.6rem 2rem 1rem 2rem;

  transition: background-color 200ms ease;
`;
