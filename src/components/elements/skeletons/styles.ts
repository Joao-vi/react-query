import styled from "styled-components";

export const Skeleton = styled.div`
  background: linear-gradient(-90deg, #e7edd1 0%, #f8f8f8 50%, #e7edf1 100%);

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
`;
