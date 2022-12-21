import styled from "styled-components";
import { createPortal } from "react-dom";
import { ModalBackdrop, animateBgModal } from "../Modals.styles";

const modalRoot: any = document.querySelector('#modal-root');

const ModalContent = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);

width: 699px;
height: 70vh;
padding: 20px;
border-radius: 40px;

@media screen and (min-width: 480px) and (max-width: 767px) {
width: 499px;
height: 460px;
}

background-color: white;
overflow: hidden;

&::before {
    content: '';
    position: absolute;
    width: 1000px;
    height: 1000px;
    animation: ${animateBgModal} 3s linear infinite;
    top: -150px;
    left: -150px;
    background: linear-gradient(to right, #7F75F0, #101F32);
    z-index:-2;
}
`;

interface Imodal {
    children?: React.ReactNode
}

const Modal: React.FC<Imodal> = ({children}) => {
    return createPortal(
        <ModalBackdrop>
            <ModalContent>{children}</ModalContent>
        </ModalBackdrop>, 
        modalRoot
    )
};

export default Modal;