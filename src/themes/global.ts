import { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = createGlobalStyle`
${({ theme }) => css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    height: 100%;
  }

  body {
    font-family: "M PLUS Rounded 1c", sans-serif;

    background-color: ${theme.colors.black};
    color: ${theme.colors.white};

    font-variant-ligatures: none;
    text-rendering: optimizelegibility;
    -webkit-font-smoothing: antialiased;
    text-decoration-skip-ink: auto;
  }

  html {
    font-size: 62.5%; // 1rem === 10px
  }
`}
`;
