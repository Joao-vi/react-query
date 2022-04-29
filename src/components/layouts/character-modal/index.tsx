import React, { useEffect } from "react";

import * as S from "./styles";

import { InPortal } from "components/layouts";
import { TabNav } from "./components/tab-nav";
import { InfoSection } from "./components/info-section";
import { characterStore } from "store/character-store";
import { LocationSection } from "./components/location-section";
import { TabContent } from "./components/tab-content";

interface ICharacterModal {
  isOpen: boolean;
}

export const CharacterModal = React.forwardRef<HTMLDivElement, ICharacterModal>(
  (props, ref) => {
    const { isOpen } = props;
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const backgroundColor = isOpen ? "#0000004a" : "transparent";

    const characterData = characterStore((state) => state.pickedCharacter);

    useEffect(() => {
      setCurrentIndex(0);
    }, [isOpen, setCurrentIndex]);

    return (
      <InPortal id="character-portal">
        <S.Overlay style={{ backgroundColor }}>
          <S.Wrapper ref={ref} isOpen={isOpen}>
            {characterData && (
              <>
                <S.WrapperAvatar>
                  <S.Avatar
                    src={characterData?.image}
                    alt={CharacterModal?.name}
                  />
                </S.WrapperAvatar>

                <S.Body>
                  <S.Header>
                    <S.Name>{characterData?.name}</S.Name>

                    <TabNav
                      currentIndex={currentIndex}
                      setCurrentIndex={setCurrentIndex}
                    />
                  </S.Header>

                  <TabContent currentIndex={currentIndex}>
                    <S.ContentContainer>
                      <InfoSection />
                    </S.ContentContainer>

                    <S.ContentContainer>
                      <LocationSection />
                    </S.ContentContainer>
                  </TabContent>
                </S.Body>
              </>
            )}
          </S.Wrapper>
        </S.Overlay>
      </InPortal>
    );
  }
);

CharacterModal.displayName = "CharacterModal";
