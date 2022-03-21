import { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = createGlobalStyle`
${({ theme }) => css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Inter", sans-serif;
    font-size: 62.5%; // 1rem === 10px

    background-color: ${theme.colors.mainBgColor};
    color: ${theme.colors.white};
  }
`}
`;
