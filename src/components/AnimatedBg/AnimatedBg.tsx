// --------------- Styles import ---------------------------------

import { StyledAnimatedBg } from "./AnimatedBg.styles";

// --------------- Types import ----------------------------------

import { IAnimatedBg } from "./AnimatedBg.types";

//----------------------------------------------------------------

export default function AnimatedBg({ backGround, moveXY }: IAnimatedBg) {
    return(
        <StyledAnimatedBg 
            style={{x: moveXY.moveX, y: moveXY.moveY}} 
            $bgImg={backGround}
        >
        </StyledAnimatedBg>
    )
}