import { useRouter } from "next/router";
import { NavLink } from "./components/navLink";
import * as S from "./styles";

export const NavBar = () => {
  const { pathname } = useRouter();
  return (
    <S.Wrapper>
      <S.Content>
        <S.Title>
          R<span>&</span>M
        </S.Title>

        <S.Navigation>
          <NavLink href="/" name="Home" pathname={pathname} />
          <NavLink href="/edit" name="Edit" pathname={pathname} />
        </S.Navigation>
      </S.Content>
    </S.Wrapper>
  );
};
