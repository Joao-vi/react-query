import styled, { css } from "styled-components";

interface LinkProps {
  active: boolean;
}

export const Link = styled.a<LinkProps>`
  ${({ theme, active }) => css`
    text-decoration: none;

    padding: 5px;
    background-color: ${active ? theme.colors.seal : "transparent"};
    color: ${active ? theme.colors.black600 : theme.colors.white};
  `}
`;
