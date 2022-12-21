import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useDrag } from "react-dnd";
import { DndItem } from "../../types/dnd";


const Li = styled(motion.li)<any>`
position: relative;
display: flex;
justify-content: center;
align-items: center;
padding: 10px;
width: calc((100% - 3px * 5) / 6);
height: calc((100% - 3px * 5) / 6);
opacity: ${({$isDragging, $isDroped}) => $isDragging || $isDroped ? "0" : "0.9"};
`;

const Span = styled.span<any>`
position: absolute;
color: rgba(255, 255, 255, 1);

font-family: Helvetica;
font-size: 35px;
font-weight: 800;
-webkit-text-stroke: 1.5px rgba(36, 37, 70, 1);
`;

const DragItem: React.FC<any> = ({dndItems, itemOpt, itemIdx}) => {
    const [droped, setDroped] = useState(false);
 
    const [{ isDragging }, drag] = useDrag(() => ({
        type: DndItem.Item,
        item: {
            value: itemOpt ,
            itemIdx
        },
        end: (_, monitor) => {
            const dropResul: any = monitor.getDropResult();
            
            if (dropResul?.isDroped) {
                setDroped(dropResul.isDroped)
            }
        },
        collect: monitor => ({
            isDragging: !!monitor.isDragging()
          }),
      }));

    return (
        <Li 
           ref={drag}
           $isDroped={droped}
           $isDragging={isDragging}
           $itemAmount={dndItems.length > 2} 
           whileHover={{ scale: 1.2 }} 
           initial={{x: -1000}} 
           animate={{x: 0, y: dndItems.length  > 2 && (itemIdx % 2 === 0) ? '-60%' : 0}}
           >
            <img src={itemOpt.img} alt="" />
            <Span>{itemOpt.value}</Span>
        </Li>
    )
};

export default DragItem;