import * as S from "./styles";
import NextLink from "next/link";

interface NavLinkProps {
  href: string;
  pathname: string;
  name: string;
}

export const NavLink = ({ href, name, pathname }: NavLinkProps) => {
  const isActive = pathname === href;

  return (
    <NextLink href={href} passHref>
      <S.Link active={isActive}>{name}</S.Link>
    </NextLink>
  );
};
