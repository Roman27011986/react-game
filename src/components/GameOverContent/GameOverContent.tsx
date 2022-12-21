import styled from "styled-components";
import modalStarImg from '../../img/modal-star.png';
import SubmitBtn from "../Buttons/SubmitBtn";

const StyledContentWrapper = styled.div`
position: relative;
display: flex;
height: 100%;
flex-direction: column;
align-items: center;
justify-content: space-between;
padding: 37px 59px 29px 59px;
border-radius: 20px;
background-color: white;
`;

const StyledContentTitle = styled.h1<any>`
font-family: 'Circe Rounded';
font-weight: 700;
font-size: 100px;
line-height: 163px;


text-shadow: #76d66f 1px 1px 15px;
color: #efde59;


&::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;

    width: 100px;
    height: 95px;

    background-image: url(${({img}) => img });
    background-size: cover;
    background-position: center;
}
`;

const P = styled.p`
text-align: center;
font-size: 40px;
color: #5F40A1;
`;

export default function GameOverContent({onReset}: any) {
    return(
        <StyledContentWrapper>
            <StyledContentTitle img={modalStarImg}>Победа!</StyledContentTitle>
            <P>Молодец! Ты успешно справился с заданием!</P>
            <SubmitBtn btnType="button" onHandleClick={onReset}>Заново</SubmitBtn>
        </StyledContentWrapper>
    )
};