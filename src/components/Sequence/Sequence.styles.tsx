import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledSequence = styled(motion.div)<any>`
position: relative;
display: flex;
width: 240px;
padding: 10px 0;
margin-bottom: 4px;
font-family: Helvetica;
font-size: 22px;
font-weight: 700;
-webkit-text-stroke: 1px rgba(36, 37, 70, 1);
color: rgba(255, 255, 255, 1);
float: ${({$sequence}) => $sequence ? 'left' : 'right'};
justify-content: ${({$sequence}) => $sequence ?  'flex-start' : 'flex-end'};

&::before{
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: contain;
    background-image: url(${({bg}) => bg });
    background-position: right;
    transform: ${({$sequence}) => $sequence ? null : 'scaleX(-1)'};
}
`;