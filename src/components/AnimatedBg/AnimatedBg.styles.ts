import AppBgImg from "../../img/default-bg.jpg";
import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledAnimatedBg = styled(motion.div)<any>`
position: fixed;
z-index: -1;
top: -10%;
bottom: -10%;
left: -10%;
right: -10%;
background-repeat: no-repeat;
background-size: cover;
background-image: url(${({$bgImg}) => !!$bgImg ? $bgImg : AppBgImg});
`;