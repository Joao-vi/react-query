import * as S from "./styles";

interface IFadeIn {
  children: JSX.Element;
}
export const FadeIn = ({ children }: IFadeIn) => {
  return <S.Wrapper>{children}</S.Wrapper>;
};
