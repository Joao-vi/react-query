import { ICharacter } from "types/rick-morty-api";

import * as S from "./styles";

type CharacterProps = ICharacter;
export const Character = (props: CharacterProps) => {
  const { name, image, status, location, type, species, episode, origin } =
    props;

  return (
    <S.Wrapper>
      <S.Img src={image} alt="Some character." />

      <S.Content>
        <div>
          <S.Title>{name}</S.Title>
          <S.Status status={status}>
            <div className="indicator" />
            <span>
              {species} - {type}
            </span>
          </S.Status>
        </div>

        <div>
          <S.SubTitle>Last known location:</S.SubTitle>
          <span>{origin}</span>
        </div>

        <div>
          <S.SubTitle>First seen in:</S.SubTitle>
          <span>{episode}</span>
        </div>
      </S.Content>
    </S.Wrapper>
  );
};
