import styled from "styled-components";

export const StyledGameOverContent = styled.div`
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

export  const StyledTitle = styled.h1<any>`
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

export const StyledText = styled.p`
text-align: center;
font-size: 40px;
color: #5F40A1;
margin-bottom: 40px;
`;