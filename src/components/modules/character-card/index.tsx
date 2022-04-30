import { ToolTip } from "components/elements";
import { ICharacter } from "types/rick-morty-api";

import * as S from "./styles";

type CharacterCardProps = {
  baseTime?: number; //ms
  delay?: number;
  onClick: () => void;
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
    onClick,
  } = props;

  const fName = name.length > 18 ? name.slice(0, 18) + "..." : false;
  return (
    <S.Wrapper onClick={onClick}>
      <S.Img src={image} alt="Some character." />

      <S.Content>
        <div>
          <S.Title style={{ position: "relative" }}>
            {fName || name}
            <ToolTip placement="top" label={name} shouldActive={!!fName} />
          </S.Title>

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
