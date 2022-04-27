import * as S from "./styles";

interface IContentCard {
  label: string;
  value: string;
}
export const ContentCard = ({ label, value }: IContentCard) => (
  <S.Wrapper>
    <S.Label>{label}</S.Label>
    <S.Content>{value}</S.Content>
  </S.Wrapper>
);
