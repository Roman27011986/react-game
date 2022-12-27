import styled from "styled-components";

export const StyledForm = styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
padding: 25px 59px 29px 59px;
border-radius: 20px;
background-color: white;
`;

export const StyledFormList = styled.ul`
display: flex;
flex-direction: column;
justify-content: space-between;
margin-bottom: 54px;
width: 100%;
`;

export const StyledBtnWrpper = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
margin-bottom: 54px;
`;

export const StyledFormListItem = styled.li`
 &:not(:last-child) {
    margin-bottom: 25px;
   }
`; 