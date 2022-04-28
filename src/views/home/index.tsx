import { useEffect, useReducer, useRef, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

import * as S from "./styles";

import { useDebounce } from "hooks/use-debounce";
import { useCharacter } from "services/use-character";
import { IFilterCharacter } from "types/rick-morty-api";

import { RickHead, Input } from "components/elements";
import { CharacterModal, Pagination } from "components/layouts";
import {
  CharacterCard,
  FilterCharacter,
  IFilterGroup,
} from "components/modules";
import { CharacterCardLoading } from "components/shimmer";
import { useDisclosure } from "hooks/use-disclosure";
import { characterStore } from "store/character-store";

const mockArray = [1, 1, 1, 1, 1, 1, 1, 1];

const filterReducer = (
  state: IFilterCharacter,
  update: IFilterCharacter | ((state: IFilterCharacter) => IFilterCharacter)
) => ({
  ...state,
  ...(typeof update === "function" ? update(state) : update),
});

const filterGroups: IFilterGroup[] = [
  {
    title: "Status",
    key: "status",
    options: [
      { label: "Alive", value: "alive" },
      { label: "Dead", value: "dead" },
      {
        label: "Unknown",
        value: "unknown",
      },
    ],
  },
  {
    title: "Gender",
    key: "gender",
    options: [
      { label: "Male", value: "male" },
      { label: "Female", value: "female" },
      {
        label: "Genderless",
        value: "genderless",
      },
    ],
  },
];

export const Home = () => {
  //states
  const [filter, setFilter] = useReducer(filterReducer, {
    status: null,
    gender: null,
    page: 1,
  });
  const [name, setName] = useState<string>("");
  const debouncedName = useDebounce(name);

  // Fetchs
  const { data, isLoading, isFetching } = useCharacter(debouncedName, {
    ...filter,
  });

  // Hooks
  const modalCharacter = useDisclosure();

  const setPickedCharacter = characterStore(
    (state) => state.setPickedCharacter
  );

  useEffect(() => {
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
                    setPickedCharacter(character);
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
