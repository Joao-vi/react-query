import { RickHead } from "components/elements";
import { NavBar } from "components/layouts";
import { useState } from "react";
import { useCharacter } from "services/use-character";
import * as S from "./styles";

export const Home = () => {
  const [input, setInput] = useState("");

  const { data } = useCharacter({ name: input });
  return (
    <>
      <NavBar />
      {/* <S.Content></S.Content> */}
      <input
        style={{ marginTop: "20rem" }}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </>
  );
};
