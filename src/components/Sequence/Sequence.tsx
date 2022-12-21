import arrowPict from "../../img/arrow.png";
import { Wrapper } from "./Sequence.styles";

export default function Sequence({sequence}: any) {
    return(
            <Wrapper 
                bg={arrowPict} 
                $sequence={sequence}>
                    <p>
                        {sequence ? 'По возростанию' : 'По убыванию'}
                    </p>
            </Wrapper>
    );
}