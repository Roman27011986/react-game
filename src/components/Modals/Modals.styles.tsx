import styled, { keyframes } from "styled-components";

export const animateBgModal = keyframes`
0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const ModalBackdrop = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
/* pointer-events: unset; */
`;