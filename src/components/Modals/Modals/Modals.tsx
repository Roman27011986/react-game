import Modal from "../Modal/Modal";
import GameOverModal from "../GameOverModal/GameOverModal";
import Form from "../../Form/Form";
import GameOverContent from "../../GameOverContent/GameOverContent";

export default function Modals({isShowMenuModal, isShowGameOverModal, onGameStart, onReset}: any) {
    return(
        <>
        { 
        isShowMenuModal && 
          <Modal>
            <Form onGameStart={onGameStart} />
          </Modal>
      }
      { 
        isShowGameOverModal && 
          <GameOverModal>
            <GameOverContent onReset={onReset}/>
          </GameOverModal>
      }
        </>
    )
};