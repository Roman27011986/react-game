import AppBgImg from "../../img/default-bg.jpg";
import { motion } from "framer-motion";
import styled from "styled-components";

export const AnimatedBgStyle = styled(motion.div)<any>`
position: fixed;
z-index: -1;
top: -5%;
bottom: -5%;
left: -5%;
right: -5%;
background-repeat: no-repeat;
background-size: cover;
background-image: url(${({$bgImg}) => !!$bgImg ? $bgImg : AppBgImg});
`;