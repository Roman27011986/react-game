import { useState, useEffect } from "react";
import soundPict from "../../img/volume.png";
import useSound from 'use-sound';
import boopSfx from '../../sounds/slip.mp3';
import { SoundBtnStyled } from "./Buttons.styles";

export default function SoundBtn() {
    const [toggleSound, setToggleSoumd] = useState(false);
    const [play, { stop }] = useSound(boopSfx, {interrupt: true,});

    useEffect(() => {
        toggleSound ? play() : stop();
    },[toggleSound, play, stop])

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