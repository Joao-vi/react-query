import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

import { useDebounce } from "hooks/use-debounce";
import { useCharacter } from "services/use-character";
import { IFilterCharacter } from "types/rick-morty-api";

import * as S from "./styles";

import { RickHead, Input } from "components/elements";
import { CharacterCard, FilterCharacter } from "components/modules";
import { CharacterCardLoading } from "components/shimmer";
import { Pagination } from "components/layouts";

const mockArray = [1, 1, 1, 1, 1, 1, 1, 1];
export const Home = () => {
  //states
  const [name, setName] = useState<string>(undefined);
  const debouncedName = useDebounce(name);
  const [status, setStatus] = useState<IFilterCharacter["status"] | null>(null);
  const [gender, setGender] = useState<IFilterCharacter["gender"] | null>(null);
  const [page, setPage] = useState<number | null>(1);
  const debouncedPage = useDebounce(page, 100);

  // Fetchs
  const { data, isLoading, isFetching } = useCharacter(debouncedName, {
    gender,
    status,
    page: debouncedPage,
  });

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
        <>
          <S.ContainerCards>
            {data?.results?.map((character) => (
              <CharacterCard key={character.id} {...character} />
            ))}
          </S.ContainerCards>

          {!!data?.info && data.info.pages > 1 && (
            <Pagination
              current={page}
              setCurrent={setPage}
              pages={data.info.pages}
              sibling={2}
              next={data.info.next}
              prev={data.info.prev}
            />
          )}
        </>
      )}
    </S.Content>
  );
};
