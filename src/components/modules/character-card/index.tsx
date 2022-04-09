import { ICharacter } from "types/rick-morty-api";

import * as S from "./styles";

type CharacterCardProps = {
  basTime?: number; //ms
  delay?: number;
} & Partial<ICharacter>;

export const CharacterCard = (props: CharacterCardProps) => {
  const {
    name,
    image,
    status,
    location,
    type,
    species,
    episode,
    origin,
    delay = 1,
    basTime = 50,
  } = props;

  return (
    <S.Wrapper>
      <S.Img src={image} alt="Some character." />

      <S.Content>
        <div>
          <S.Title>{name}</S.Title>
          <S.Status status={status}>
            <div className={`indicator ${status}`} />
            <span>{`${status} - ${species}`}</span>
          </S.Status>
        </div>

        <div>
          <S.SubTitle>Last known location:</S.SubTitle>
          <span>{origin.name}</span>
        </div>

        <div>
          <S.SubTitle>First seen in:</S.SubTitle>
          <span>{episode[0]}</span>
        </div>
      </S.Content>
    </S.Wrapper>
  );
};
