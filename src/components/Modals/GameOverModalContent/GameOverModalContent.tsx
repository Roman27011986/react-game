import modalStarImg from '../../../img/modal-star.png';
import SubmitBtn from "../../Buttons/SubmitBtn";

import { StyledGameOverContent, StyledTitle, StyledText } from './GameOverModalContent.styles';

export default function GameOverContent({onReset}: any) {
    return(
        <StyledGameOverContent>
            <StyledTitle img={modalStarImg}>Победа!</StyledTitle>
            <StyledText>Молодец! Ты успешно справился с заданием!</StyledText>
            <SubmitBtn btnType="button" onHandleClick={onReset}>Заново</SubmitBtn>
        </StyledGameOverContent>
    )
};