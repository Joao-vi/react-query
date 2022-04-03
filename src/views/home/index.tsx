import { NavBar } from "components/layouts";
import { useDebounce } from "hooks/use-debounce";
import { useState } from "react";
import { useCharacter } from "services/use-character";
import { IFilterCharacter } from "types/rick-morty-api";
import * as S from "./styles";

export const Home = () => {
  const [name, setName] = useState("");
  const debouncedName = useDebounce(name);
  const [filters, setFilters] = useState<IFilterCharacter>({ page: 0 });

  const { data } = useCharacter(debouncedName, filters);
  return (
    <>
      <NavBar />
      {/* <S.Content></S.Content> */}
      <input
        style={{ marginTop: "20rem" }}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </>
  );
};
