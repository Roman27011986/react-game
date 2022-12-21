import styled from "styled-components";
import { IItemsListWrapper } from "./App.types";

export const ItemsListWrapper = styled.div<IItemsListWrapper>`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 223px;
padding: 0 4%;
background-repeat: no-repeat;
background-size: 100% 100%;
background-position: center;
background-image: url(${({bg}) => bg });
`;
