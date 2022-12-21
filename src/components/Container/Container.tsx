import styled from "styled-components";

const Div = styled.div`
padding: 0 15px 0 15px;
margin: auto;

// @media screen and (min-width: 480px) and (max-width: 767px){
//     width: 480px;
//   }
  
//   @media screen and (min-width: 768px) {
//     width: 730px;
//   }
  
  @media screen and (min-width: 1200px) {
    width: 920px;
   }
`;

export default function Container({children}: any) {
    return (
        <Div>
            {children}
        </Div>
    )
};
