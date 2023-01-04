import { useState, useEffect } from "react";
import soundPict from "../../img/volume.png";
import useSound from 'use-sound';
import boopSfx from '../../sounds/s-t.mp3';
import { SoundBtnStyled } from "./Buttons.styles";

export default function SoundBtn() {
    const [toggleSound, setToggleSoumd] = useState(true);
    const [play, { pause }] = useSound(boopSfx, {interrupt: true});

    useEffect(() => {
        toggleSound ? play() : pause();
    },[toggleSound, play, pause])

    const handleClick = () => {
        setToggleSoumd(prev => !prev)
    }
    return(
        <SoundBtnStyled 
            $pict={soundPict} 
            $sound={toggleSound} 
            onClick={handleClick}
        >
        </SoundBtnStyled>
    )
}