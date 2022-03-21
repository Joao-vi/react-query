import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "themes/global";
import theme from "themes/theme";

import { Main } from "components/layouts";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Main>
          <Component {...pageProps} />
        </Main>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
