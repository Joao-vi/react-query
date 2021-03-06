import React from "react";
import { IoSearchOutline } from "react-icons/io5";

import * as S from "./styles";
import { IFilterCharacter } from "types";

import { useCharacter } from "services";
import { useDisclosure, useDebounce } from "hooks";
import { filterGroups, mockArray } from "constants/index";

import { RickHead, Input } from "components/elements";
import { CharacterModal, Pagination } from "components/layouts";
import { CharacterCard, FilterCharacter } from "components/modules";
import { CharacterCardLoading } from "components/shimmer";
import { useModalStore } from "store/use-modal-store";

const filterReducer = (
  state: IFilterCharacter,
  update: IFilterCharacter | ((state: IFilterCharacter) => IFilterCharacter)
) => ({
  ...state,
  ...(typeof update === "function" ? update(state) : update),
});

export const Home = () => {
  //states
  const [filter, setFilter] = React.useReducer(filterReducer, {
    status: null,
    gender: null,
    page: 1,
  });
  const [name, setName] = React.useState<string>("");
  const debouncedName = useDebounce(name);

  // Fetchs
  const { data, isLoading, isFetching } = useCharacter(debouncedName, {
    ...filter,
  });

  // Hooks
  const modalCharacter = useDisclosure();

  const setModalCharacter = useModalStore((state) => state.setSelected);

  React.useEffect(() => {
    setFilter({ page: 1 });
  }, [filter.gender, filter.status, debouncedName]);

  return (
    <S.Content>
      <RickHead />

      <S.ActionsContainer>
        <Input
          placeholder="Search for a name"
          id="search-name"
          value={name}
          onChange={(e) => setName(e.target.value.trim())}
          hasIcon
          Icon={IoSearchOutline}
        />
        <FilterCharacter
          isLoading={isLoading || isFetching}
          isDisable={!!data.error}
          filter={filter}
          setFilter={setFilter}
          filterGroups={filterGroups}
        />
      </S.ActionsContainer>

      {isLoading ? (
        <S.ContainerCards>
          {mockArray.map((_, index) => (
            <CharacterCardLoading key={index} />
          ))}
        </S.ContainerCards>
      ) : (
        <>
          {!!data?.error ? (
            <h2 className="warning-message">
              Character <span className="orange">{data.error}</span> not found.
            </h2>
          ) : (
            <S.ContainerCards>
              {data?.results?.map((character, index) => (
                <CharacterCard
                  onClick={() => {
                    setModalCharacter(character);
                    modalCharacter.open();
                  }}
                  delay={index}
                  key={character.id}
                  {...character}
                />
              ))}
            </S.ContainerCards>
          )}
        </>
      )}

      {!!data?.info && data.info.pages > 1 && (
        <Pagination
          isLoading={isLoading || isFetching}
          current={filter.page}
          setFilter={setFilter}
          pages={data.info.pages}
          sibling={2}
        />
      )}

      <CharacterModal
        ref={modalCharacter.refElement}
        isOpen={modalCharacter.isOpen}
      />
    </S.Content>
  );
};
