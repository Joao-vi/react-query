import React from "react";

import * as S from "./styles";
import { BsBookmarkFill } from "react-icons/bs";

import { useModalStore } from "store/use-modal-store";

import { Overlay } from "components/layouts";

import {
  TabNav,
  InfoSection,
  LocationSection,
  TabContent,
} from "./local-components";
import { useFavoriteStore } from "store/use-favorite-store";

interface ICharacterModal {
  isOpen: boolean;
}

export const CharacterModal = React.forwardRef<HTMLDivElement, ICharacterModal>(
  (props, ref) => {
    const { isOpen } = props;
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const character = useModalStore((state) => state.selected);

    const setFavorite = useFavoriteStore((state) => state.setFavorite);
    const favorites = useFavoriteStore((state) => state.favorites);

    React.useEffect(() => {
      setCurrentIndex(0);
    }, [isOpen]);

    return (
      <Overlay portalId="character-portal" isOpen={isOpen}>
        <S.Wrapper ref={ref} isOpen={isOpen}>
          {character && (
            <>
              <S.WrapperAvatar>
                <S.Avatar src={character.image} alt={character.name} />
              </S.WrapperAvatar>

              <S.Body>
                <S.Header>
                  <S.Name>{character.name}</S.Name>
                  <TabNav
                    currentIndex={currentIndex}
                    setCurrentIndex={setCurrentIndex}
                  />
                </S.Header>

                <TabContent currentIndex={currentIndex}>
                  <S.ContentContainer>
                    <InfoSection {...character} />
                  </S.ContentContainer>

                  <S.ContentContainer>
                    <LocationSection
                      name={character.location.name}
                      url={character.location.url}
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
