import { RouterContext } from "next/dist/shared/lib/router-context";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../src/themes/global";
import theme from "../src/themes/theme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    values: [{ name: "Black", value: theme.colors.black }],
  },
  nextRouter: {
    Provider: RouterContext.Provider,
    path: "/",
    asPath: "/",
    query: {},
    push() {},
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  ),
];
