import styled from "styled-components";

export const StyledProjects = styled.section`
    position: relative;
    top: 200px;

     @media (min-width: 768px) {
     .gridModify{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        margin: 0 20px;
     }

     @media (min-width: 1024px) {
       margin: 0 100px;
    }

    @media (min-width: 1445px) {
       margin: 0 300px;
    }
    }
`