import * as S from "./styles";

import { InPortal } from "components/layouts";

export const CharacterModal = () => {
  return (
    <InPortal id="character-portal">
      <S.Overlay>
        <S.Wrapper>
          <S.WrapperAvatar>
            <S.Avatar src="/images/character.jpeg" alt="Character avatar." />
          </S.WrapperAvatar>
          <S.Name>Rick Sanches</S.Name>
        </S.Wrapper>
      </S.Overlay>
    </InPortal>
  );
};
