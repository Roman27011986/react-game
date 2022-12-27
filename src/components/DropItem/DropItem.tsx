import { useDrop } from 'react-dnd';
import { useState } from "react";
import { DndItem } from "../../types/dnd";

import { StyledDropItem } from './DropItem.styles';
import { StyledItemValue } from "../CustomDragLayer/CustomDragLayer.styles";

export default function DropItem({
        itemOpt, 
        accept, 
        itemIdx, 
        dndItems, 
        sequence,
        onShowGameOverModal, 
        onHandleAcceptIdx
    }: any) {
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
        <StyledDropItem ref={drop}>
            { canDrop && <>
                <img src={itemOpt.img} alt="" />
                <StyledItemValue>{itemOpt.value}</StyledItemValue>
            </> }
        </StyledDropItem>
    )
}