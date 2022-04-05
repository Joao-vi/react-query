import { css } from "styled-components";
export default {
  colors: {
    black600: "#202023",
    black500: "#19191b",
    black900: "#131316",
    white: "#ffffffeb",
    white200: "#EDF2F7",
    gray: "#7c7d81",
    orange: "#FFA200",
    seal: "#88ccca",
  },
  shadows: {
    sm: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    dropShadow: "drop-shadow(0rem 3px 2px rgba(0, 0, 0, 0.5))",
  },
  font: {
    sizes: {
      sm: "1.6rem",
      md: "1.8rem",
      lg: "2rem",
    },
    weights: {
      300: "300",
      400: "400",
      500: "500",
      600: "600",
      700: "700",
    },
    family: "'Inter', sans-serif",
  },
  animations: {
    hoverFocus: () => css`
      box-shadow: inset 0 0 0px 0px #fbd38db0, 0px 0px 0px 0px #fbd38d36;

      transition: box-shadow 150ms ease-in-out;

      &:hover {
        box-shadow: inset 0 0 0px 2px #fbd38db0, 0px 0px 0px 0px #fbd38d36;
      }

      &:focus-within {
        box-shadow: inset 0 0 0px 2px #fbd38db0, 0px 0px 0px 4px #fbd38d36;
      }
    `,
  },
} as const;
