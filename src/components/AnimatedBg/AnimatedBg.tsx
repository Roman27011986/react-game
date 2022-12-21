// --------------- Styles import ---------------------------------

import { AnimatedBgStyle } from "./AnimatedBg.styles";

// --------------- Types import ----------------------------------

import { IAnimatedBg } from "./AnimatedBg.types";

//----------------------------------------------------------------

export default function AnimatedBg({ backGround, moveXY }: IAnimatedBg) {
    return(
        <AnimatedBgStyle 
            style={{x: moveXY.moveX, y: moveXY.moveY}} 
            $bgImg={backGround}
        >
        </AnimatedBgStyle>
    )
}