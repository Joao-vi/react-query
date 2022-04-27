import { ICharacter } from "types/rick-morty-api";

import * as S from "./styles";

type CharacterCardProps = {
  baseTime?: number; //ms
  delay?: number;
  toggle: () => void;
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
    baseTime = 50,
    toggle,
  } = props;

  return (
    <S.Wrapper onClick={toggle}>
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
          <span>{location.name}</span>
        </div>

        <div>
          <S.SubTitle>First seen in:</S.SubTitle>
          <span>{origin.name}</span>
        </div>
      </S.Content>
    </S.Wrapper>
  );
};
