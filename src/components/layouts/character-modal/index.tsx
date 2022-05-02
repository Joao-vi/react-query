import React from "react";

import * as S from "./styles";

import { characterStore } from "store/character-store";

import { InPortal } from "components/layouts";
import { TabNav, InfoSection, LocationSection, TabContent } from "./components";

interface ICharacterModal {
  isOpen: boolean;
}

export const CharacterModal = React.forwardRef<HTMLDivElement, ICharacterModal>(
  (props, ref) => {
    const { isOpen } = props;
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const backgroundColor = isOpen ? "#0000004a" : "transparent";

    const characterData = characterStore((state) => state.pickedCharacter);

    const setFavorite = characterStore((state) => state.setFavorites);

    React.useEffect(() => {
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
                    src={characterData.image}
                    alt={characterData.name}
                  />
                </S.WrapperAvatar>

                <S.Body>
                  <S.Header>
                    <S.Name>{characterData.name}</S.Name>

                    <TabNav
                      currentIndex={currentIndex}
                      setCurrentIndex={setCurrentIndex}
                    />
                  </S.Header>

                  <TabContent currentIndex={currentIndex}>
                    <S.ContentContainer>
                      <InfoSection {...characterData} />
                    </S.ContentContainer>

                    <S.ContentContainer>
                      <LocationSection
                        name={characterData.location.name}
                        url={characterData.location.url}
                      />
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
