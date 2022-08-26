import styled from "styled-components";

const Animate = styled.div`
  animation-duration: 1.5s;
  animation-iteration-count: 8;
  transform-origin: bottom;
  animation-name: bounce-7;
  animation-timing-function: cubic-bezier(0.28, 0.84, 0.42, 1);
  @keyframes bounce-7 {
    0% {
      transform: scale(1, 1) translateY(0);
    }
    10% {
      transform: scale(1.1, 0.9) translateY(0);
    }
    30% {
      transform: scale(0.9, 1.1) translateY(-7px);
    }
    50% {
      transform: scale(1.02, 0.95) translateY(0);
    }
    57% {
      transform: scale(1, 1) translateY(-2px);
    }
    64% {
      transform: scale(1, 1) translateY(0);
    }
    100% {
      transform: scale(1, 1) translateY(0);
    }
  }
`;

export default Animate;
