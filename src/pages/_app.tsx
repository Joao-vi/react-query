import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ThemeProvider } from "styled-components";

import { GlobalStyles } from "themes/global";
import theme from "themes/theme";

import { MaxWidth, NavBar, Footer } from "components/layouts";

export const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <NavBar />
        <MaxWidth>
          <Component {...pageProps} />
        </MaxWidth>
        <Footer />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default MyApp;
