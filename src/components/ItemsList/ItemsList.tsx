import React from "react";
import CustomDragLayer from "../CustomDragLayer/CustomDragLayer";

import { StyledItemsList } from "./ItemsList.syles";

export default function ItemsList({
        children, 
        dndItems, 
        sequence,
        onShowGameOverModal, 
        onHandleAcceptIdx, 
        accept
    }: any) {
    return(
        <>
            <CustomDragLayer/>

            <StyledItemsList>
                {dndItems.map((dndItem: any, idx: any) => (
                    React.cloneElement(children, {   
                    key: dndItem.value, 
                    itemIdx: idx,
                    itemOpt: dndItem,
                    dndItems: dndItems,
                    accept: accept,
                    sequence: sequence,
                    onShowGameOverModal: onShowGameOverModal,
                    onHandleAcceptIdx: onHandleAcceptIdx
                })
            ))}
            </StyledItemsList>
        </>
    );
}; 