import styled from "styled-components";

export const Header = styled.header`
  height: 20rem;

  background-color: #f6f8fc;
`;

export const Content = styled.article`
  padding-top: 6rem;
  padding-bottom: 3rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const Title = styled.h1`
  font-size: 5rem;
  font-weight: bold;
  color: #24282f;
  text-align: center;
`;

export const ActionsContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const ContainerCards = styled.section`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;
