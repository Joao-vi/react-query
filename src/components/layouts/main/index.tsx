import { ReactNode } from "react";
import * as S from "./styles";

interface MainProps {
  children: ReactNode;
}

export const Main = ({ children }: MainProps) => {
  return <S.Wrapper> {children} </S.Wrapper>;
};
