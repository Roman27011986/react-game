import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledDragLayerWrapper = styled.div`
position: fixed;
pointer-events: none;
z-index: 100;
left: 0;
top: 0;
width: "100%";
height: "100%";
`;

export const StyledDragLayerInner = styled(motion.div)`
position: relative;
display: flex;
justify-content: center;
align-items: center;
padding: 10px;
width: 170px;
height: 170px;
`;

export const StyledItemValue = styled.span<any>`
position: absolute;
color: rgba(255, 255, 255, 1);

font-family: Helvetica;
font-size: 35px;
font-weight: 800;
-webkit-text-stroke: 1.5px rgba(36, 37, 70, 1);
`;