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
    values: [{ name: "Main background", value: theme.colors.mainBgColor }],
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
