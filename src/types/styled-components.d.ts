import theme from "themes/theme";

export type Theme = typeof theme;

export type Colors = keyof Theme["colors"];
declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
