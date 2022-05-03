import React from "react";

import * as S from "./styles";

import { characterStore } from "store/character-store";

import { Overlay } from "components/layouts";

import { TabNav, InfoSection, LocationSection, TabContent } from "./components";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";

interface ICharacterModal {
  isOpen: boolean;
}

export const CharacterModal = React.forwardRef<HTMLDivElement, ICharacterModal>(
  (props, ref) => {
    const { isOpen } = props;
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const [isFav, toggleIsFav] = React.useReducer((state) => !state, false);

    const characterData = characterStore((state) => state.pickedCharacter);

    const setFavorite = characterStore((state) => state.setFavorites);

    React.useEffect(() => {
      setCurrentIndex(0);
    }, [isOpen, setCurrentIndex]);

    return (
      <Overlay portalId="character-portal" isOpen={isOpen}>
        <S.Wrapper ref={ref} isOpen={isOpen}>
          {characterData && (
            <>
              <S.WrapperAvatar>
                <S.Avatar src={characterData.image} alt={characterData.name} />
              </S.WrapperAvatar>

              <S.Body>
                <S.Header>
                  <S.Name>{characterData.name}</S.Name>
                  <S.BookMark onClick={toggleIsFav} isFav={isFav}>
                    <BsBookmarkFill />
                  </S.BookMark>

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
      </Overlay>
    );
  }
);

CharacterModal.displayName = "CharacterModal";
