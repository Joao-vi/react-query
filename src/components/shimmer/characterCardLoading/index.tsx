import * as S from "./styles";
export const CharacterCardLoading = () => (
  <S.Wrapper>
    <S.Img />
    <S.Content>
      <S.Skeleton className="name" />
      <S.Skeleton className="status" />

      <S.Skeleton className="where-title" />
      <S.Skeleton className="where" />

      <S.Skeleton className="episode-title" />
      <S.Skeleton className="episode" />
    </S.Content>
  </S.Wrapper>
);
