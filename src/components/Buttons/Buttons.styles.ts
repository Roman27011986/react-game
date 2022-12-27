import styled from "styled-components";
import { motion } from "framer-motion";
import { ISoundBtn } from "./Buttons.types";

export const SubmitBtnStyled = styled(motion.button)`
border-radius: 20px;
padding: 8px 77px 8px 77px;
color: white;
font-family: Helvetica;
font-size: 32px;
font-weight: 400;
line-height: 44.16px;
cursor: pointer;
background-color: ${({theme}) => theme.colors.btnGreen};
filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const ControlBtnStyled = styled(motion.button)`
  max-width: 45%;
  width: 100%;
  
  padding: 3px 24px;
  border-radius: 20px;

  font-family: Helvetica;
  font-size: 18px;
  font-weight: 700;
  line-height: 39.06px;

  cursor: pointer;

  color: #4F4B61;
  background-color: ${({theme}) => theme.colors.yellow};
`;

export const SoundBtnStyled = styled.button<ISoundBtn>`
position: absolute;
top: 20px;
right: 20px;
width: 50px;
height: 50px;
border-radius: 50%;
background-size: cover;
background-image: url(${({$pict}) => $pict});
border: ${({$sound}) => $sound ? 'none' : '4px solid red'};

cursor: pointer;
z-index: 777;

&::before {
    content: '';
    display: block;
    width: 100%;
    height: 4px;
    border-radius: 2px;
    background-color: red;
    transition: 200ms;

    transform: rotate(133deg) scaleX(${({$sound}) => $sound ? '0' : '1'});
}
`;