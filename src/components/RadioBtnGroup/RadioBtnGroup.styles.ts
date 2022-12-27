import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledRadioBtn = styled.input`
-webkit-appearance: none;
-moz-appearance: none;
appearance: none;
position: absolute;
`;

export const StyledRadioBtnGroup = styled(motion.div)`
display: flex;
flex-direction: column;
align-items: center;
`;

export const StyledBtnsList = styled(motion.ul)<any>`
display: flex;
justify-content: space-between;

width: ${({$width}) => $width ? $width : 100}%;
margin-top: 56px;
border-radius: 20px;

background-color: ${({theme}) => theme.colors.yellow};
`;

export const StyledLabel = styled.label`
position: relative;
cursor: pointer;
`;

export const StyledLabelText = styled.span`
position: absolute;
top: -25px;
left: 50%;
font-size: 18px;
font-weight: bold;
color: #4F4B61;
transform: translate(-50%, -50%);
-webkit-touch-callout: none; 
-webkit-user-select: none;  
-khtml-user-select: none;    
-moz-user-select: none;      
-ms-user-select: none;       
user-select: none; 
`;

export const StyledText = styled.p`
font-family: Helvetica;
font-size: 32px;
font-weight: 400;
line-height: 44.16px;
color: rgba(66, 63, 69, 1);
`;

export const StyledSpan = styled(motion.span)<any>`
display: inline-block;
width: 20px;
height: 100%;

border: none;
border-radius: 50%;
background-color: ${({$radioBtnChecked, theme}) => 
                     $radioBtnChecked ? 
                     theme.colors.radioChecked : 
                     theme.colors.yellow};
`;