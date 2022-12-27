import arrowPict from "../../img/arrow.png";
import { StyledSequence } from "./Sequence.styles";

export default function Sequence({sequence}: any) {
    return(
            <StyledSequence 
                bg={arrowPict} 
                $sequence={sequence}>
                    <p>
                        {sequence ? 'По возростанию' : 'По убыванию'}
                    </p>
            </StyledSequence>
    );
}