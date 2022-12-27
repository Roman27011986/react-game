import { useEffect, useState, MouseEvent } from "react";
import { useMotionValue, useTransform } from "framer-motion";

// --------------- Components imports ---------------------------------

import Container from "../Container/Container";
import ItemsList from "../ItemsList/ItemsList";
import DragItem from "../DragItem/DragItem";
import DropItem from "../DropItem/DropItem";
import SoundBtn from "../Buttons/SoundBdn";
import Sequence from "../Sequence/Sequence";
import AnimatedBg from "../AnimatedBg/AnimatedBg";
import Modals from "../Modals/Modals/Modals";

// --------------- Styles imports -------------------------------------

import { StyledWrapper, StyledItemsListWrapper } from "./App.styles";

// --------------- Types imports --------------------------------------

import { SubmitHundlerType, HandleShowGameOverModalType } from "./App.types";
import { IOptions } from './../Form/Form.types';

//---------------------------------------------------------------------

export default function App() {
  const [isOpenMenuModal, setIsOpenMenuModal] = useState<boolean>(true);
  const [isOpenGameOverModal, setIsOpenGameOverModal] = useState<boolean>(false);
  const [options, setOptions] = useState<IOptions | null>(null);
  const [acceptDropIdx, setAcceptDropIdx] = useState<number>(0);

useEffect(() => {
  if (!options?.dragItems) {
    return;
  }

  const items = [...options.dragItems];

  setAcceptDropIdx(0);

  if (!options.sequence) {
    const acceptDropIdx = items.length - 1;
    setAcceptDropIdx(acceptDropIdx);
 };

},[options])

  const submitHundler: SubmitHundlerType = (options) => {
    setOptions(options);
    setIsOpenMenuModal(prev => !prev);
  };

  const handleShowGameOverModal: HandleShowGameOverModalType = (isShowModal: boolean) => {
    setIsOpenGameOverModal(isShowModal);
  };

  const reset = () => {
    setIsOpenMenuModal(true);
    setIsOpenGameOverModal(false);
    setOptions(null);
  };

  const handleAcceptIdx = () => {
    if (options?.sequence) {
      setAcceptDropIdx(p => p += 1)
      return
    }

    if (acceptDropIdx) {
      setAcceptDropIdx(p => p -= 1)
    }
  };

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const moveX = useTransform(x, [0, 200], [45, -45]);
  const moveY = useTransform(y, [0, 200], [45, -45]);
  
  const mouseMoveHandler = (e: MouseEvent ) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.pageX - rect.left / 2) / 30);
    y.set((e.pageY - rect.top / 2) / 30);
  }

  return (
        <div onMouseMove={mouseMoveHandler}>
          <SoundBtn/>

          <AnimatedBg 
            backGround={options?.theme?.backGroundImg} 
            moveXY={{moveX, moveY}}
          />

          <Container>
            {!isOpenMenuModal && 
              <StyledWrapper>

                <ItemsList dndItems={options?.dragItems}>
                    <DragItem />
                </ItemsList> 

                  <Sequence sequence={options?.sequence} />

                <StyledItemsListWrapper bg={options?.theme?.boardImg}>
                <ItemsList 
                  dndItems={options?.dropItems} 
                  accept={acceptDropIdx} 
                  sequence={options?.sequence}
                  onHandleAcceptIdx={handleAcceptIdx} 
                  onShowGameOverModal={handleShowGameOverModal} 
                >
                  <DropItem />
                </ItemsList> 
              </StyledItemsListWrapper>
              
            </StyledWrapper>
          }
        </Container>

        <Modals
          isShowMenuModal={isOpenMenuModal}
          isShowGameOverModal={isOpenGameOverModal} 
          onGameStart={submitHundler}
          onReset={reset}
        />
      </div>
  );
};