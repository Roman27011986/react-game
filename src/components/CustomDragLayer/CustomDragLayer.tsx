import { useDragLayer } from "react-dnd";
import { StyledDragLayerInner, StyledDragLayerWrapper, StyledItemValue } from "./CustomDragLayer.styles";

// function getItemStyles(
//     initialCursorOffset: XYCoord | null,
//     initialOffset: XYCoord | null,
//     currentOffset: XYCoord | null
//   ) {
//     if (!initialOffset || !currentOffset || !initialCursorOffset) {
//       return {
//         display: "none",
//       };
//     }
  
//     const x = initialCursorOffset?.x + (currentOffset.x - initialOffset.x);
//     const y = initialCursorOffset?.y + (currentOffset.y - initialOffset.y);
//     const transform = `translate(${x - 100}px, ${y - 100}px)`;
  
//     return {
//       transform,
//       WebkitTransform: transform,
//       background: "red",
//       // width: "200px",
//       // height: "200px",
//     };
//   }

export default function CustomDragLayer() {
    const {item, itemType, isDragging, initialCursorOffset, initialFileOffset, currentFileOffset } = useDragLayer(monitor => ({
        item: monitor.getItem(),
        itemType: monitor.getItemType(),
        initialCursorOffset: monitor.getInitialClientOffset(),
        initialFileOffset: monitor.getInitialSourceClientOffset(),
        currentFileOffset: monitor.getSourceClientOffset(),
        isDragging: monitor.isDragging(),
      }));

      if (!isDragging) {
        return null;
      }

      return (
        <StyledDragLayerWrapper>
          <StyledDragLayerInner
          initial={{x:initialFileOffset?.x, y:initialFileOffset?.y}} 
          animate={{x:currentFileOffset?.x, y:currentFileOffset?.y}}
          >
            <img src={item.value.img} alt="" />
            <StyledItemValue>{item.value.value}</StyledItemValue>
          </StyledDragLayerInner>
        </StyledDragLayerWrapper>
      );
}
