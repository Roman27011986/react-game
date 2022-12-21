import React from "react";
import styled from "styled-components";

const Ul = styled.ul`
display: flex;
justify-content: center;

padding: 160px 0;
`;

export default function ItemsList({
        children, 
        dndItems, 
        sequence,
        onShowGameOverModal, 
        onHandleAcceptIdx, 
        accept
    }: any) {
    return(
        <Ul>
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
        </Ul>
    );
}; 