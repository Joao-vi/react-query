import { useState } from "react";

import * as S from "./styles";

import { InPortal } from "components/layouts";
import { Sections } from "./components/sections";
import { InfoSection } from "./components/info-section";

export const CharacterModal = ({ isOpen }: { isOpen: boolean }) => {
  const [currentSection, setCurrentSection] = useState("info");
  return (
    <InPortal id="character-portal">
      {isOpen && (
        <S.Overlay>
          <S.Wrapper>
            <S.WrapperAvatar>
              <S.Avatar src="/images/character.jpeg" alt="Character avatar." />
            </S.WrapperAvatar>

            <S.Body>
              <S.Header>
                <S.Name>Rick Sanches</S.Name>

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
      )}
    </InPortal>
  );
};
