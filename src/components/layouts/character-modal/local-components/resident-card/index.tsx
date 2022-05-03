import * as S from "./styles";

interface IResidentCard {
  name: string;
  image: string;
}

export const ResidentCard = ({ image, name }: IResidentCard) => (
  <S.Wrapper>
    <S.Avatar src={image} alt={name} />

    <S.Info>
      <S.Label>Name:</S.Label>
      <S.Name>{name}</S.Name>
    </S.Info>
  </S.Wrapper>
);
