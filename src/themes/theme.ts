import { css } from "styled-components";

const animations = {
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
  fadeIn: () => css`
    @keyframes fade-in-animation {
      0% {
        opacity: 0;
        transform: scale(0.8);
      }
      100% {
        opacity: 1;
        transform: scale(1);
      }
    }
  `,
  isLoading: () => css`
    pointer-events: none;

    background: linear-gradient(
      -90deg,
      #e7edd145 0%,
      #f8f8f800 50%,
      #e7edf138 100%
    );

    background-size: 400% 400%;
    animation: shimmer-effect 1.5s ease-in-out infinite;

    @keyframes shimmer-effect {
      0% {
        background-position: 0% 0%;
      }

      100% {
        background-position: -135% 0%;
      }
    }
  `,
};

export default {
  colors: {
    black600: "#202023",
    black500: "#19191b",
    black900: "#131316",
    white: "#ffffffeb",
    white200: "#EDF2F7",
    white50: "#edf2f730",
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
  animations,
} as const;
