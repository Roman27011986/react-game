import styled from "styled-components";

export const StyledDropItem = styled.li`
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

`;