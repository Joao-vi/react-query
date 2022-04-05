import { ReactNode } from "react";
import * as S from "./styles";

interface MainProps {
  children: ReactNode;
}

export const Layout = ({ children }: MainProps) => {
  return <S.Wrapper> {children} </S.Wrapper>;
};
