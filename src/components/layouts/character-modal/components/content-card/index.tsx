import * as S from "./styles";

import { ToolTip } from "components/elements";

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
      <ToolTip label={value} shouldActive={shouldFormat}>
        <S.Content>{fValue}</S.Content>
      </ToolTip>
    </S.Wrapper>
  );
};
