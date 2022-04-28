import React from "react";

import * as S from "./styles";

import { InPortal } from "components/layouts";
import { Sections } from "./components/sections";
import { InfoSection } from "./components/info-section";
import { characterStore } from "store/character-store";

interface ICharacterModal {
  isOpen: boolean;
}
export const CharacterModal = React.forwardRef<HTMLDivElement, ICharacterModal>(
  (props, ref) => {
    const { isOpen } = props;
    const [currentSection, setCurrentSection] = React.useState("info");

    const backgroundColor = isOpen ? "#0000004a" : "transparent";

    const characterData = characterStore((state) => state.pickedCharacter);

    return (
      <InPortal id="character-portal">
        <S.Overlay style={{ backgroundColor }}>
          <S.Wrapper ref={ref} isOpen={isOpen}>
            <S.WrapperAvatar>
              <S.Avatar src={characterData?.image} alt={CharacterModal?.name} />
            </S.WrapperAvatar>

            <S.Body>
              <S.Header>
                <S.Name>{characterData?.name}</S.Name>

                <Sections
                  currentSection={currentSection}
                  setCurrentSection={setCurrentSection}
                />
              </S.Header>

              <S.ContentContainer>
                <InfoSection />
              </S.ContentContainer>
            </S.Body>
          </S.Wrapper>
        </S.Overlay>
      </InPortal>
    );
  }
);

CharacterModal.displayName = "CharacterModal";
