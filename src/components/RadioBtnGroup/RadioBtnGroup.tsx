import 
{ StyledRadioBtnGroup, 
  StyledText, 
  StyledBtnsList, 
  StyledLabel, 
  StyledLabelText, 
  StyledRadioBtn, 
  StyledSpan } 
  from "./RadioBtnGroup.styles";

interface IRadioBtnGroup {
  title: any;
  radioBtnSum: number[];
  checked: number;
  width?: string;
  onHandleChange: (e: any) => void
};

export default function RadioBtnGroup({title, radioBtnSum, checked, width, onHandleChange}: IRadioBtnGroup) {
    return (
        <StyledRadioBtnGroup>

          <StyledText>{title}</StyledText>

          <StyledBtnsList $width={width}>
            {radioBtnSum.map((radioBtnValue) => (
                <li key={radioBtnValue}>
                  <StyledLabel>
                    <StyledLabelText>{radioBtnValue}</StyledLabelText>

                  <StyledRadioBtn 
                      value={radioBtnValue} 
                      type="radio" 
                      checked={checked === radioBtnValue}
                      onChange={onHandleChange}
                      />

                      <StyledSpan 
                        whileHover={{ scale: 1.2 }} 
                        $radioBtnChecked={checked === radioBtnValue}>
                      </StyledSpan>
                  </StyledLabel>
                </li>
            ))}
          </StyledBtnsList>
        </StyledRadioBtnGroup>
    )
};