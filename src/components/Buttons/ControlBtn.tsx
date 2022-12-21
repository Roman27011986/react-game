import { ControlBtnStyled } from "./Buttons.styles";
import { ISubmitBtn } from "./Buttons.types";

export default function ControlBtn({btnType, onHandleClick, isDisabled, children}: ISubmitBtn) {
    return (
        <ControlBtnStyled 
          type={btnType} 
          disabled={isDisabled} 
          onClick={onHandleClick} 
          whileHover={{ scale: 1.1 }}
        >
          {children}
        </ControlBtnStyled>
    )
};
