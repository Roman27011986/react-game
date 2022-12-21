import styled from "styled-components";
import { useDrop } from 'react-dnd';
import { useState } from "react";
import { DndItem } from "../../types/dnd";

const LiDrop = styled.li`
display: flex;
justify-content: center;
align-items: center;
border-radius: 50%;
background: rgba(0, 0, 0, 0.06);
box-shadow: inset 0px 4px 25px rgba(0, 0, 0, 0.25);
width: 100px;
height: 100px;
&:not(:last-child) {
    margin-right: 20px;
  }
`

const Span = styled.span<any>`
position: absolute;

color: rgba(255, 255, 255, 1);

font-family: Helvetica;
font-size: 35px;
font-weight: 800;
-webkit-text-stroke: 1.5px rgba(36, 37, 70, 1);
`;

const Img = styled.img<any>`
width: 100%;
height: 100%;
`;

const DropItem: React.FC<any> = ({
        itemOpt, 
        accept, 
        itemIdx, 
        dndItems, 
        sequence,
        onShowGameOverModal, 
        onHandleAcceptIdx
    }) => {
    const [canDrop, setCanDrop] = useState<any>('');

    const [{ isOver }, drop] = useDrop(() => ({
        accept: DndItem.Item,
        drop:(item: any) => {
            const currentItemValue = item.value.value;
            const acceptDropValue = dndItems[accept]?.value;
            const isCantDrop = currentItemValue === itemOpt.value;
            const isCurrentValue = acceptDropValue === currentItemValue;
            const resultDropValue = {
                isDroped: currentItemValue
            };
       
            if (!isCantDrop || !isCurrentValue) {
                return;
            }

            onHandleAcceptIdx();
            setCanDrop(isCantDrop)

            if (sequence && dndItems.length === itemIdx + 1) {
                onShowGameOverModal(dndItems.length === itemIdx + 1);
            }
           
            if (!sequence && itemIdx === 0) {
                onShowGameOverModal(true);
            }

            return resultDropValue;
        },

        collect: monitor => ({
            isOver: !!monitor.isOver(),
          }),
          
      }),[accept, itemOpt])

    return (
        <LiDrop ref={drop}>
            { canDrop && <>
                <img src={itemOpt.img} alt="" />
                <Span>{itemOpt.value}</Span>
            </> }
        </LiDrop>
    )
}

export default DropItem;