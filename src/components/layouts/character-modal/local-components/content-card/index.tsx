import * as S from "./styles";

import { ToolTip } from "components/elements";

interface IContentCard {
  label: string;
  value: string;
}
const maxValueSize = 17;
export const ContentCard = ({ label, value }: IContentCard) => {
  const shouldFormat = value?.length > maxValueSize;
  const fValue = shouldFormat ? value.slice(0, maxValueSize) + "..." : value;
  return (
    <S.Wrapper>
      <S.Label>{label}</S.Label>
      <S.Content style={{ position: "relative" }}>
        <ToolTip
          style={{ fontSize: "1.5rem" }}
          label={value}
          placement="top"
          shouldActive={shouldFormat}
        />
        {fValue}
      </S.Content>
    </S.Wrapper>
  );
};
