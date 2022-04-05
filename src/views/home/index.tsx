import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

import { useDebounce } from "hooks/use-debounce";
import { useCharacter } from "services/use-character";
import { IFilterCharacter } from "types/rick-morty-api";

import * as S from "./styles";

import { RickHead, Input } from "components/elements";
import { CharacterCard, FilterCharacter } from "components/modules";
import { CharacterCardLoading } from "components/shimmer";

const mockArray = [1, 1, 1, 1, 1, 1, 1, 1];
export const Home = () => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");
  const debouncedName = useDebounce(name);

  const [filters, setFilters] = useState<IFilterCharacter>({ page: 0 });

  const { data, isLoading, isFetching } = useCharacter(debouncedName, filters);

  return (
    <S.Content>
      <RickHead />

      <S.ActionsContainer>
        <Input
          placeholder="Search for a name"
          id="search-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          hasIcon
          Icon={IoSearchOutline}
        />
        <FilterCharacter
          isLoading={isLoading || isFetching}
          status={status}
          setStatus={setStatus}
          gender={gender}
          setGender={setGender}
        />
      </S.ActionsContainer>

      {isLoading ? (
        <S.ContainerCards>
          {mockArray.map((_, index) => (
            <CharacterCardLoading key={index} />
          ))}
        </S.ContainerCards>
      ) : (
        <S.ContainerCards>
          {data?.results?.map((character) => (
            <CharacterCard key={character.id} {...character} />
          ))}
        </S.ContainerCards>
      )}
    </S.Content>
  );
};
