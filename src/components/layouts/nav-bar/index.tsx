import { useRouter } from "next/router";

import * as S from "./styles";

import { NavLink } from "./components/navLink";

export const NavBar = () => {
  const { pathname } = useRouter();

  return (
    <S.Wrapper>
      <S.Content>
        <S.Title>
          Rick<span>&</span>Morty
        </S.Title>

        <S.Navigation>
          <NavLink href="/" name="Home" pathname={pathname} />
        </S.Navigation>
      </S.Content>
    </S.Wrapper>
  );
};
