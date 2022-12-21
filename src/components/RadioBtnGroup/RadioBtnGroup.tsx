import styled from "styled-components";
import { motion } from "framer-motion";

const StyledRadioBtn = styled.input`
-webkit-appearance: none;
-moz-appearance: none;
appearance: none;
position: absolute;
`;

const Wrapper = styled(motion.div)`
display: flex;
flex-direction: column;
align-items: center;
`;

const RadioBtnWrapper = styled(motion.ul)`
display: flex;
justify-content: space-between;

width: 100%;
margin-top: 46px;
border-radius: 20px;

background-color: ${({theme}) => theme.colors.yellow};
`;

const Label = styled.label`
position: relative;
cursor: pointer;
`;

const LabelText = styled.span`
position: absolute;
top: -25px;
left: 50%;
font-size: 18px;
transform: translate(-50%, -50%);
-webkit-touch-callout: none; 
-webkit-user-select: none;  
-khtml-user-select: none;    
-moz-user-select: none;      
-ms-user-select: none;       
user-select: none; 
`;

const P = styled.p`
font-family: Helvetica;
font-size: 32px;
font-weight: 400;
line-height: 44.16px;
color: rgba(66, 63, 69, 1);
`;

const Span = styled(motion.span)<any>`
display: inline-block;
width: 20px;
height: 100%;

border: none;
border-radius: 50%;
background-color: ${({$radioBtnChecked, theme}) => 
                     $radioBtnChecked ? 
                     theme.colors.radioChecked : 
                     theme.colors.yellow};`;

interface IRadioBtnGroup {
  title: any;
  radioBtnSum: number[];
  checked: number;
  onHandleChange: (e: any) => void
};

const RadioBtnGroup: React.FC<IRadioBtnGroup> = ({title, radioBtnSum, checked, onHandleChange}) => {
    return (
        <Wrapper>
          <P>{title}</P>
          <RadioBtnWrapper>
            {radioBtnSum.map((radioBtnValue) => (
                <li key={radioBtnValue}>
                  <Label>
                    <LabelText>{radioBtnValue}</LabelText>
                  <StyledRadioBtn 
                      value={radioBtnValue} 
                      type="radio" 
                      checked={checked === radioBtnValue}
                      onChange={onHandleChange}
                      />
                      <Span whileHover={{ scale: 1.2 }} $radioBtnChecked={checked === radioBtnValue}></Span>
                  </Label>
                </li>
            ))}
          </RadioBtnWrapper>
        </Wrapper>
    )
};

export default RadioBtnGroup;