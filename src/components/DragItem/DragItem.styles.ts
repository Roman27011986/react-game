import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledDragItem = styled(motion.li)<any>`
position: relative;
display: flex;
justify-content: center;
align-items: center;
padding: 10px;
width: calc((100% - 3px * 5) / 6);
height: calc((100% - 3px * 5) / 6);
opacity: ${({$isDragging, $isDroped}) => $isDragging || $isDroped ? "0" : "0.9"};
`;