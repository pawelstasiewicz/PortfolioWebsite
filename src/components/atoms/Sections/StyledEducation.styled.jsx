import styled from "styled-components";
import { portfolioColor } from "../../../assets/PortfolioData";

export const StyledEducation = styled.div`
   display: flex;
   flex-direction: column;
    

   p{
        color:${portfolioColor.hexGray3};
        margin: 10px 50px;
        font-family: 'Inika';
    }

   div{
        p{
            color: ${portfolioColor.hexGray1};
            margin: 10px 50px;
            font-family: 'Inika';
        }
   }
`