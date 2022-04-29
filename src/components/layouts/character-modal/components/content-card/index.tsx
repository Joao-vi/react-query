import * as S from "./styles";

interface IContentCard {
  label: string;
  value: string;
}
const maxValueSize = 15;
export const ContentCard = ({ label, value }: IContentCard) => {
  const shouldFormat = value.length > maxValueSize;
  const fValue = shouldFormat ? value.slice(0, maxValueSize) + "..." : value;
  return (
    <S.Wrapper>
      <S.Label>{label}</S.Label>
      <S.Content>{fValue}</S.Content>
    </S.Wrapper>
  );
};
