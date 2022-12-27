import { useEffect, useState } from "react";
import { useDrag } from "react-dnd";
import { DndItem } from "../../types/dnd";
import { getEmptyImage } from "react-dnd-html5-backend";

import { StyledItemValue } from "../CustomDragLayer/CustomDragLayer.styles"; 
import { StyledDragItem } from "./DragItem.styles";

export default function DragItem({dndItems, itemOpt, itemIdx}: any) {
    const [droped, setDroped] = useState(false);

    const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
        type: DndItem.Item,
        item: {
            id: itemOpt.value,
            value: itemOpt ,
            itemIdx
        },
        end: (_, monitor) => {
            const dropResul: any = monitor.getDropResult();
            if (dropResul?.isDroped) {
                setDroped(dropResul.isDroped)
            }
        },
        collect: monitor => {
           return {isDragging: !!monitor.isDragging()} 
          },
      }));

      useEffect(() => {
        dragPreview(getEmptyImage(), { captureDraggingState: true });
      }, []);

    return (
        <StyledDragItem 
           ref={drag}
           $isDroped={droped}
           $isDragging={isDragging}
           $itemAmount={dndItems.length > 2} 
           whileHover={{ scale: 1.2 }} 
           initial={{x: -1000}} 
           animate={{x: 0, y: dndItems.length  > 2 && (itemIdx % 2 === 0) ? '-60%' : 0}}
           >
            <img src={itemOpt.img} alt="" />
            <StyledItemValue>{itemOpt.value}</StyledItemValue>
        </StyledDragItem>
    )
};