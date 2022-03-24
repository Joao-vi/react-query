import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "themes/global";
import theme from "themes/theme";

import { Main } from "components/layouts";
import { QueryClient, QueryClientProvider } from "react-query";

import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools />
          <Main>
            <Component {...pageProps} />
          </Main>
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
