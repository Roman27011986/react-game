import { SubmitBtnStyled } from "./Buttons.styles";
import { ISubmitBtn } from "./Buttons.types";

export default function SubmitBtn({children, btnType, onHandleClick}: ISubmitBtn) {
    return <SubmitBtnStyled 
                type={btnType} 
                onClick={onHandleClick} 
                whileHover={{ scale: 1.1 }}
            >
                {children}
            </SubmitBtnStyled>
}
